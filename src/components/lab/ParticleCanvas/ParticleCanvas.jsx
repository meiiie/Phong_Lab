'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './ParticleCanvas.css';

const ParticleCanvas = ({
  particleCount = 100,
  particleColor = '#00d4ff',
  connectionDistance = 100,
  mouseInteraction = true,
  parallaxIntensity = 0.3
}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      return mobile;
    };

    const mobile = checkMobile();
    window.addEventListener('resize', checkMobile);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;
    
    // Set canvas size with device pixel ratio
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configuration for wave + spring physics (matching hero-section.html)
    const CONFIG = {
      spacing: mobile ? 40 : 35,
      baseRadius: mobile ? 1 : 1.5,
      mouseRadius: mobile ? 150 : 250,
      colorBase: 'rgba(100, 116, 139, 0.2)',
      colorActive: 'rgba(0, 116, 217, 1)',
      waveSpeed: 0.015,
      waveAmp: mobile ? 5 : 10,
      spring: 0.06,
      friction: 0.92
    };

    // Particle class with wave + spring physics (matching hero-section.html)
    class Particle {
      constructor(x, y) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.radius = CONFIG.baseRadius;
        this.color = CONFIG.colorBase;
      }

      update() {
        // 1. WAVE EFFECT (Living Ambient - sóng biển)
        const wave = Math.sin(time + (this.originX * 0.01) + (this.originY * 0.01)) * CONFIG.waveAmp;
        const targetX = this.originX + wave * 0.5;
        const targetY = this.originY + wave * 0.5;

        // 2. MOUSE INTERACTION
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let force = 0;
        let angle = 0;
        let activeScale = 0;

        if (mouseInteraction && distance < CONFIG.mouseRadius) {
          force = (CONFIG.mouseRadius - distance) / CONFIG.mouseRadius;
          angle = Math.atan2(dy, dx);
          
          // Push particles away (water ripple effect)
          const push = force * 20;
          this.vx -= Math.cos(angle) * push * 0.05;
          this.vy -= Math.sin(angle) * push * 0.05;

          // Scale up on hover
          activeScale = force * 3.5;

          // Change color when active
          if (force > 0.2) {
            this.color = CONFIG.colorActive;
          } else {
            this.color = CONFIG.colorBase;
          }
        } else {
          // Return to base color
          this.color = CONFIG.colorBase;
        }

        // 3. SPRING PHYSICS (back to wave position)
        const springX = (targetX - this.x) * CONFIG.spring;
        const springY = (targetY - this.y) * CONFIG.spring;

        this.vx += springX;
        this.vy += springY;
        
        // Friction
        this.vx *= CONFIG.friction;
        this.vy *= CONFIG.friction;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Smooth radius transition
        const targetRadius = CONFIG.baseRadius + activeScale;
        this.radius += (targetRadius - this.radius) * 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles in hexagonal grid pattern
    particlesRef.current = [];
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    for (let y = 0; y < height + CONFIG.spacing; y += CONFIG.spacing) {
      for (let x = 0; x < width + CONFIG.spacing; x += CONFIG.spacing) {
        // Offset every other row for hexagonal pattern
        const offsetX = (y % (CONFIG.spacing * 2) === 0) ? 0 : CONFIG.spacing / 2;
        particlesRef.current.push(new Particle(x + offsetX, y));
      }
    }

    // Draw connections between nearby particles (optional - can be disabled for cleaner look)
    const drawConnections = () => {
      // Disabled for cleaner look matching hero-section.html
      return;
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += CONFIG.waveSpeed;

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      drawConnections();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler (throttled)
    let lastMouseMove = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMouseMove < 16) return; // ~60fps throttle
      lastMouseMove = now;

      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Touch move handler for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
    }

    // Scroll parallax effect
    const handleScroll = () => {
      if (!parallaxIntensity || mobile) return;
      
      const scrollY = window.scrollY;
      const offset = scrollY * parallaxIntensity;
      
      if (canvas) {
        canvas.style.transform = `translateY(${offset}px)`;
      }
    };

    if (parallaxIntensity) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, particleColor, connectionDistance, mouseInteraction, parallaxIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
};

export default ParticleCanvas;
