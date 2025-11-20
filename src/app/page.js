
"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CustomEase from "gsap/CustomEase";
// import { useGSAP } from "@gsap/react";
// import { useLenis } from "lenis/react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import HeroLab from "@/components/lab/HeroLab/HeroLab";
import ProjectsGrid from "@/components/lab/ProjectsGrid/ProjectsGrid";
import TeamGrid from "@/components/lab/TeamGrid/TeamGrid";
import CounterAnimation from "@/components/CounterAnimation/CounterAnimation";
import { researchProjects, researchAreas } from "@/data/research-projects";
import { teamMembers } from "@/data/team-members";
import { techStack } from "@/data/tech-stack";
import TechStackGrid from "@/components/lab/TechStackGrid/TechStackGrid";


let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);
  // const lenis = useLenis();

  // Client-side check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  // useEffect(() => {
  //   if (!isClient || !lenis) return;
  //   if (loaderAnimating) {
  //     lenis.stop();
  //   } else {
  //     lenis.start();
  //   }
  // }, [isClient, lenis, loaderAnimating]);

  // GSAP Smooth Scroll for homepage
  useEffect(() => {
    if (!isClient) return;

    // Enable GSAP smooth scroll for homepage
    gsap.config({
      force3D: true,
      autoSleep: 60,
      nullTargetWarn: false
    });

    // Smooth scroll with GSAP
    gsap.to(window, {
      duration: 0.1,
      ease: "none",
      scrollTo: { y: 0 },
      immediateRender: true
    });

  }, [isClient]);

  useEffect(() => {
    if (showPreloader) {
      setLoaderAnimating(true);
      
      // Master timeline cho toàn bộ preloader
      const masterTl = gsap.timeline({
        delay: 0.5,
        defaults: {
          ease: "power2.out",
        },
      });

      // Phase 1: Loading Counter (00 -> ẩn -> 26 -> ẩn -> 65 -> ẩn -> 98 -> ẩn -> 99)
      const counts = document.querySelectorAll(".count");
      const countDuration = 0.6;
      const countDelay = 1.2; // Tăng delay để có thời gian ẩn
      
      // Bắt đầu với tất cả counts ẩn
      gsap.set(counts, { opacity: 0, scale: 0.8 });
      gsap.set(counts, { y: "20px" });
      
      // Hiển thị từng count một cách tuần tự với ẩn hoàn toàn
      counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");
        
        // Bắt đầu với digits ẩn
        gsap.set(digits, { y: "120%" });
        
        // Timeline cho từng count
        const countTl = gsap.timeline({
          delay: index * countDelay,
        });
        
        // Hiển thị count với animation mượt mà
        countTl.to(count, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: countDuration,
          ease: "power2.out"
        });
        
        // Animation digits từ dưới lên
        countTl.to(digits, {
          y: "0%",
          duration: countDuration * 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3");
        
        // Giữ count hiển thị một chút
        countTl.to({}, { duration: 0.3 });
        
        // Ẩn count hiện tại hoàn toàn (trừ count cuối cùng)
        if (index < counts.length - 1) {
          countTl.to(count, {
            opacity: 0,
            scale: 0.8,
            y: "-20px",
            duration: countDuration * 0.5,
            ease: "power2.in"
          });
        }
      });

      // Phase 2: Counter fade out (ẩn count cuối cùng)
      masterTl.to(".count", {
        opacity: 0,
        scale: 0.8,
        y: "-20px",
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      }, counts.length * countDelay + 0.5);

      // Phase 3: Spinner fade out
      masterTl.to(".spinner", {
        opacity: 0,
        duration: 0.4,
      }, "-=0.2");

      // Phase 4: Text reveal ("Trường Đại học Hàng hải Việt Nam")
      masterTl.to(".intro-logo", {
        opacity: 1,
        duration: 0.5,
      }, "-=0.1");

      masterTl.to(".word h1", {
        y: "0%",
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3");

      // Phase 5: Divider animation
      masterTl.to(".divider", {
        scaleY: "100%",
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

      // Phase 6: Text exit animation
      masterTl.to("#word-1 h1", {
        y: "100%",
        duration: 0.6,
        delay: 0.3,
        ease: "power2.in"
      });

      masterTl.to("#word-2 h1", {
        y: "-100%",
        duration: 0.6,
        ease: "power2.in"
      }, "-=0.6");

      // Phase 7: Divider fade out
      masterTl.to(".divider", {
        opacity: 0,
        duration: 0.3,
        delay: 0.2,
      }, "-=0.3");

      // Phase 8: Block exit animation
      masterTl.to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        onStart: () => {
          // Animation cho hero background image
          const heroImg = document.querySelector(".hero-main-bg img");
          if (heroImg) {
            gsap.to(heroImg, { scale: 1, duration: 1.5, ease: "power2.out" });
          }
        },
        onComplete: () => {
          // Ẩn hoàn toàn preloader
          gsap.to(".loader", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setShowPreloader(false);
              setLoaderAnimating(false);
            }
          });
        },
      }, "-=0.4");
    }
  }, [showPreloader]);

  // Advanced GSAP ScrollTrigger animations for professional layout
  useEffect(() => {
    if (!isClient) return;

    // 1. Section Headers with Split Text Effect
    const sectionHeaders = gsap.utils.toArray(".section-header");
    sectionHeaders.forEach((header) => {
      const h2 = header.querySelector("h2");
      const p = header.querySelector("p");
      
      // Animate header title with clip-path reveal
      if (h2) {
        gsap.fromTo(
          h2,
          {
            opacity: 0,
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          },
          {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
      
      // Animate description with fade and slide
      if (p) {
        gsap.fromTo(
          p,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    });

    // 2. Research Projects Section with Parallax
    const researchSection = document.querySelector(".research-projects-section");
    if (researchSection) {
      // Parallax background effect
      gsap.to(researchSection, {
        backgroundPosition: "50% 100px",
        ease: "none",
        scrollTrigger: {
          trigger: researchSection,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // 3. Project Cards with Subtle Fade-in
    const projectCards = gsap.utils.toArray(".project-card");
    if (projectCards.length > 0) {
      gsap.set(projectCards, { 
        opacity: 0, 
        y: 20,
      });
      
      ScrollTrigger.batch(projectCards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          });
        },
      });
    }

    // 4. Team Section with Parallax Background
    const teamSection = document.querySelector(".team-section");
    if (teamSection) {
      // Parallax background effect
      const teamBg = teamSection.querySelector(".team-section-bg");
      if (teamBg) {
        gsap.to(teamBg, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: teamSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    // 5. Team Role Headers with Line Animation
    const roleHeaders = gsap.utils.toArray(".team-role-header");
    roleHeaders.forEach((header) => {
      // Create animated underline
      const underline = document.createElement("div");
      underline.className = "role-header-underline";
      header.appendChild(underline);
      
      gsap.fromTo(
        header,
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            once: true,
          },
        }
      );
      
      // Animate underline
      gsap.fromTo(
        underline,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    // 6. Team Member Cards with Subtle Fade-in
    const teamCards = gsap.utils.toArray(".team-member-card");
    if (teamCards.length > 0) {
      gsap.set(teamCards, { 
        opacity: 0, 
        y: 20,
      });
      
      ScrollTrigger.batch(teamCards, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
          });
        },
      });
    }

    // 7. CTA Buttons with Subtle Fade-in
    const ctaButtons = gsap.utils.toArray(".team-cta");
    ctaButtons.forEach((cta) => {
      gsap.fromTo(
        cta,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 95%",
            once: true,
          },
        }
      );
    });

    // 8. Tech Stack Icons with Category Stagger
    const techCategories = gsap.utils.toArray(".tech-category-section");
    techCategories.forEach((category) => {
      const icons = category.querySelectorAll(".tech-icon");
      
      if (icons.length > 0) {
        gsap.set(icons, { opacity: 0, y: 20 });
        
        ScrollTrigger.create({
          trigger: category,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(icons, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out",
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isClient]);

  return (
    <>
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Trường Đại học</span>
              </h1>
            </div>
            <div className="word" id="word-2">
              <h1>Hàng hải Việt Nam</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
          <div className="counter">
            <div className="count">
              <div className="digit">
                <h1>0</h1>
              </div>
              <div className="digit">
                <h1>0</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>2</h1>
              </div>
              <div className="digit">
                <h1>7</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>6</h1>
              </div>
              <div className="digit">
                <h1>5</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>8</h1>
              </div>
            </div>
            <div className="count">
              <div className="digit">
                <h1>9</h1>
              </div>
              <div className="digit">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <Nav />
      
      {/* Hero Lab Section - Neo-futuristic Research Lab Hero */}
      <HeroLab
        title="Kiến tạo tương lai Khoa học Hàng Hải"
        tagline="Lab Nghiên Cứu Khoa Học Sinh Viên VMU"
        mission="Trao quyền cho sinh viên CNTT thông qua nghiên cứu tiên tiến và đổi mới sáng tạo"
        ctaLabel="Tham Gia Lab"
        ctaLink="/contact"
        ctaSecondaryLabel="Tìm Hiểu Đề Tài"
        ctaSecondaryLink="/research"
        particleCount={100}
        particleColor="#0074D9"
        showPreloader={showPreloader}
      />

      {/* Hero Stats */}
      <section className="hero-stats">
        <div className="hero-stats-bg-pattern"></div>
        <div className="container">
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="70" 
                  duration={2000} 
                  delay={200}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Năm thành lập</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="1956" 
                  duration={2500} 
                  delay={400}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Năm khai giảng</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="50+" 
                  duration={1800} 
                  delay={600}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Chuyên ngành đào tạo</p>
            </div>
          </div>
          <div className="stat">
            <div className="stat-count">
              <h2>
                <CounterAnimation 
                  endValue="25K+" 
                  duration={2200} 
                  delay={800}
                  className="counter-number"
                  animateOnScroll={false}
                />
              </h2>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-info">
              <p>Cựu sinh viên</p>
            </div>
          </div>
        </div>
      </section>



      {/* Dự án nghiên cứu */}
      <section className="research-projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Dự Án Nghiên Cứu</h2>
            <p>Khám phá các dự án nghiên cứu đang được thực hiện bởi sinh viên và giảng viên của lab</p>
          </div>
          <ProjectsGrid
            projects={researchProjects}
            filterOptions={{
              areas: researchAreas,
              statuses: ['ongoing', 'completed']
            }}
            columns={{ desktop: 3, tablet: 2, mobile: 1 }}
          />
        </div>
      </section>

      {/* Đội ngũ Lab */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Đội Ngũ Lab</h2>
            <p>Gặp gỡ các thành viên tài năng của Lab Nghiên Cứu Khoa Học Sinh Viên VMU</p>
          </div>
          <TeamGrid
            members={teamMembers}
            groupByRole={true}
            columns={{ desktop: 4, tablet: 2, mobile: 1 }}
          />
          <div className="team-cta">
            <AnimatedButton
              text="Tham Gia Đội Ngũ"
              href="/contact"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Công nghệ sử dụng */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2>Công Nghệ Sử Dụng</h2>
            <p>Các công nghệ và công cụ mà lab sử dụng trong nghiên cứu và phát triển</p>
          </div>
          <TechStackGrid techStack={techStack} />
        </div>
      </section>

      {/* Call to Action - Simple */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Sẵn sàng tham gia?</h2>
            <p>Hãy trở thành một phần của Lab Nghiên Cứu Khoa Học Sinh Viên VMU</p>
            <div className="cta-buttons">
              <AnimatedButton
                text="Tham Gia Ngay"
                href="/contact"
                variant="primary"
              />
              <AnimatedButton
                text="Tìm Hiểu Thêm"
                href="/about"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ConditionalFooter />
    </>
  );
}
