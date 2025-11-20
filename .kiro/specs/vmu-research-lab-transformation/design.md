# Design Document - VMU Student Research Lab Website

## Overview

This design document outlines the comprehensive transformation strategy for converting the current VMU 70th Anniversary website into a modern, Neo-futuristic landing page for the VMU Student Research Lab. The design focuses on creating an immersive, technology-forward experience that showcases student research, innovation, and academic excellence in Computer Science and Information Technology.

### Design Philosophy

**Neo-futuristic Aesthetic**: The design embraces a forward-thinking, technology-centric visual language that combines:
- Dark, sophisticated color palettes with neon accents
- Geometric patterns and grid systems
- Smooth, cinematic animations powered by GSAP
- 3D elements and particle effects
- High contrast and visual hierarchy
- Minimalist yet impactful layouts

### Target Audience

1. **Prospective Lab Members**: Students interested in joining research activities
2. **Academic Visitors**: Faculty, researchers, and collaborators
3. **Industry Partners**: Companies seeking collaboration opportunities
4. **Alumni**: Former lab members and supporters
5. **General Public**: Anyone interested in student research at VMU

## Architecture

### Technology Stack (Retained)

The existing technology stack will be maintained for consistency and performance:

```
Frontend Framework:
- Next.js 15.4.6 (App Router)
- React 19.1.0

Animation & Interactions:
- GSAP 3.13.0 (ScrollTrigger, CustomEase)
- @gsap/react 2.1.2
- Lenis 1.3.8 (Smooth scrolling)
- Split-type 0.3.4 (Text effects)

Styling:
- CSS Modules
- CSS Variables for theming
- Responsive design (mobile-first)

Performance:
- Next.js Image optimization
- Code splitting
- Lazy loading
```

### Site Structure

```
/                           # Homepage (Research Lab Landing)
├── /about                  # About the Lab
├── /research               # Research Projects Showcase
│   └── /[project-id]      # Individual Project Details
├── /team                   # Team Members
│   └── /[member-id]       # Individual Member Profile
├── /publications           # Publications & Papers
├── /resources              # Learning Resources & Tools
└── /contact                # Contact & Join Us
```

### File Architecture

```
src/
├── app/
│   ├── page.js                    # Homepage (transformed)
│   ├── about/page.js              # About Lab
│   ├── research/page.js           # Research Projects
│   ├── team/page.js               # Team Members
│   ├── publications/page.js       # Publications
│   ├── resources/page.js          # Resources
│   ├── contact/page.js            # Contact
│   ├── globals.css                # Global styles (updated)
│   └── lab-theme.css              # New Neo-futuristic theme
├── components/
│   ├── lab/                       # New lab-specific components
│   │   ├── HeroLab/              # Hero section with 3D effects
│   │   ├── ProjectCard/          # Research project cards
│   │   ├── TeamMember/           # Team member profiles
│   │   ├── TechStack/            # Technology stack display
│   │   ├── ParticleBackground/   # Particle effects
│   │   └── ResearchFilter/       # Project filtering
│   ├── common/                    # Shared components (retained)
│   └── ...                        # Existing components (to be updated)
├── data/
│   ├── research-projects.js       # Research projects data
│   ├── team-members.js            # Team members data
│   ├── publications.js            # Publications data
│   └── tech-stack.js              # Technologies used
└── hooks/
    ├── useParticles.js            # Particle animation hook
    └── useScrollReveal.js         # Scroll reveal hook
```

## Components and Interfaces

### 1. Hero Section - "HeroLab"

**Purpose**: Create an immersive first impression showcasing the lab's identity and mission.

**Design Specifications**:
```
Layout:
- Full viewport height (100vh)
- Centered content with animated background
- Layered composition (background → particles → content)

Visual Elements:
- Animated particle system (Canvas/GSAP)
- Gradient overlay (dark to transparent)
- Floating geometric shapes
- Glowing grid pattern

Typography:
- Lab name: 80px (desktop) / 40px (mobile), bold
- Tagline: 24px (desktop) / 16px (mobile), light
- Mission: 18px, regular

Animations:
- Particle float and connect on load
- Text reveal with stagger (GSAP SplitType)
- CTA button pulse effect
- Scroll indicator bounce
```

**Component Interface**:
```jsx
<HeroLab
  title="VMU Student Research Lab"
  tagline="Innovating Tomorrow's Technology"
  mission="Empowering IT students through cutting-edge research"
  ctaLabel="Explore Research"
  ctaLink="/research"
  particleCount={100}
  particleColor="#00d4ff"
/>
```

### 2. Research Projects Showcase - "ProjectsGrid"

**Purpose**: Display research projects in an interactive, filterable grid.

**Design Specifications**:
```
Layout:
- Grid: 3 columns (desktop) / 1 column (mobile)
- Gap: 32px
- Card aspect ratio: 16:9

Card Design:
- Dark background (#0a0e27)
- Neon border on hover (#00d4ff)
- Thumbnail with overlay
- Tech stack badges
- Status indicator (ongoing/completed)

Filters:
- Research area tabs
- Status toggle
- Year dropdown
- Search input

Animations:
- Cards fade-in on scroll (stagger)
- Hover: scale(1.05) + glow effect
- Click: expand to modal/detail page
```

**Component Interface**:
```jsx
<ProjectsGrid
  projects={researchProjects}
  filterOptions={{
    areas: ['AI/ML', 'Web Dev', 'IoT', 'Cybersecurity'],
    statuses: ['ongoing', 'completed'],
    years: [2024, 2023, 2022]
  }}
  columns={{ desktop: 3, tablet: 2, mobile: 1 }}
  animationDelay={0.1}
/>
```

### 3. Team Members Section - "TeamGrid"

**Purpose**: Showcase lab members with interactive profiles.

**Design Specifications**:
```
Layout:
- Grid: 4 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Organized by role hierarchy
- Alphabetical within roles

Card Design:
- Hexagonal or circular profile photo
- Name and role overlay
- Research interests tags
- Social/contact icons
- Flip animation on hover (desktop)

Role Categories:
- Lab Director (featured card)
- Faculty Advisors
- Student Researchers
- Alumni

Animations:
- Profile photos: scale + glow on hover
- Card flip: 3D transform
- Stagger reveal on scroll
```

**Component Interface**:
```jsx
<TeamGrid
  members={teamMembers}
  groupByRole={true}
  cardStyle="hexagonal"
  showSocialLinks={true}
  animationType="flip"
/>
```

### 4. Technology Stack Display - "TechStackGrid"

**Purpose**: Visual representation of technologies used in the lab.

**Design Specifications**:
```
Layout:
- Categorized sections (Frontend, Backend, AI/ML, DevOps)
- Icon grid with labels
- Hover tooltips with descriptions

Visual Style:
- Technology logos with glow effect
- Animated on scroll reveal
- Pulsing animation for featured tech
- Color-coded by category

Categories:
- Frontend: React, Next.js, Vue, etc.
- Backend: Node.js, Python, Java, etc.
- AI/ML: TensorFlow, PyTorch, etc.
- DevOps: Docker, Kubernetes, etc.
- Hardware: Arduino, Raspberry Pi, etc.

Animations:
- Icons float in on scroll
- Hover: scale + rotate + glow
- Click: expand with description
```

**Component Interface**:
```jsx
<TechStackGrid
  technologies={techStack}
  categories={['Frontend', 'Backend', 'AI/ML', 'DevOps', 'Hardware']}
  iconSize={64}
  showDescriptions={true}
  animationStyle="float"
/>
```

### 5. Particle Background - "ParticleCanvas"

**Purpose**: Create dynamic, interactive background effects.

**Design Specifications**:
```
Technical:
- HTML5 Canvas API
- GSAP for animation
- Responsive to mouse movement
- Performance optimized (60fps)

Particle Properties:
- Count: 100-150 particles
- Size: 2-4px
- Color: Neon blue (#00d4ff) with opacity
- Connection lines when close (<100px)
- Float animation with random paths

Interactions:
- Mouse attraction/repulsion
- Click creates ripple effect
- Scroll parallax movement

Performance:
- RequestAnimationFrame
- Throttled mouse events
- Reduced particles on mobile
```

**Component Interface**:
```jsx
<ParticleCanvas
  particleCount={120}
  particleColor="#00d4ff"
  connectionDistance={100}
  mouseInteraction={true}
  parallaxIntensity={0.3}
/>
```

### 6. Navigation - "LabNavigation"

**Purpose**: Modern, accessible navigation with Neo-futuristic styling.

**Design Specifications**:
```
Layout:
- Sticky header with blur backdrop
- Logo left, menu center, CTA right
- Hamburger menu on mobile

Visual Style:
- Transparent background with blur
- Neon underline on active/hover
- Smooth transitions
- Glowing logo

Menu Items:
- Home, About, Research, Team, Publications, Resources, Contact

Mobile Menu:
- Full-screen overlay
- Slide-in animation
- Large touch targets
- Close button

Animations:
- Logo glow pulse
- Menu items slide-in stagger
- Active indicator slide
- Scroll: hide/show header
```

**Component Interface**:
```jsx
<LabNavigation
  logo="/logos/lab-logo.svg"
  menuItems={navItems}
  ctaLabel="Join Lab"
  ctaLink="/contact"
  transparent={true}
  blurEffect={true}
/>
```

## Data Models

### Research Project Model

```javascript
{
  id: "project-001",
  title: "AI-Powered Maritime Route Optimization",
  slug: "ai-maritime-route-optimization",
  description: "Developing machine learning algorithms to optimize shipping routes...",
  thumbnail: "/research/project-001-thumb.jpg",
  images: ["/research/project-001-1.jpg", "/research/project-001-2.jpg"],
  researchArea: "AI/ML",
  status: "ongoing", // or "completed"
  startDate: "2024-01-15",
  endDate: null,
  techStack: ["Python", "TensorFlow", "Docker", "PostgreSQL"],
  teamMembers: ["member-001", "member-002"],
  objectives: ["Reduce fuel consumption", "Optimize delivery times"],
  methodology: "Deep reinforcement learning with real-time data",
  outcomes: ["15% fuel reduction", "Published in IEEE Conference"],
  publications: ["pub-001"],
  githubRepo: "https://github.com/vmu-lab/maritime-ai",
  demoLink: "https://demo.vmu-lab.com/maritime-ai"
}
```

### Team Member Model

```javascript
{
  id: "member-001",
  name: "Nguyen Van A",
  slug: "nguyen-van-a",
  role: "Student Researcher", // or "Lab Director", "Faculty Advisor", "Alumni"
  photo: "/team/member-001.jpg",
  email: "nguyenvana@vmu.edu.vn",
  studentId: "2021XXXX",
  major: "Computer Science",
  graduationYear: 2025,
  researchInterests: ["Machine Learning", "Computer Vision", "IoT"],
  bio: "Passionate about applying AI to solve real-world problems...",
  skills: ["Python", "TensorFlow", "React", "Docker"],
  projects: ["project-001", "project-003"],
  publications: ["pub-001"],
  socialLinks: {
    github: "https://github.com/nguyenvana",
    linkedin: "https://linkedin.com/in/nguyenvana",
    portfolio: "https://nguyenvana.dev"
  },
  achievements: ["Best Paper Award 2024", "Hackathon Winner"],
  joinDate: "2023-09-01"
}
```

### Publication Model

```javascript
{
  id: "pub-001",
  title: "Deep Learning Approaches for Maritime Route Optimization",
  authors: ["Nguyen Van A", "Tran Thi B", "Dr. Le Van C"],
  venue: "IEEE International Conference on Maritime Technology",
  year: 2024,
  type: "conference", // or "journal", "workshop", "thesis"
  abstract: "This paper presents a novel approach to maritime route optimization...",
  keywords: ["Deep Learning", "Route Optimization", "Maritime"],
  doi: "10.1109/ICMT.2024.12345",
  pdfLink: "/publications/pub-001.pdf",
  externalLink: "https://ieeexplore.ieee.org/document/12345",
  citationCount: 5,
  relatedProjects: ["project-001"]
}
```

### Technology Model

```javascript
{
  id: "tech-001",
  name: "TensorFlow",
  category: "AI/ML",
  logo: "/tech-logos/tensorflow.svg",
  description: "Open-source machine learning framework",
  website: "https://tensorflow.org",
  usedInProjects: ["project-001", "project-005"],
  proficiencyLevel: "Advanced", // or "Intermediate", "Beginner"
  learningResources: [
    { title: "Official Docs", link: "https://tensorflow.org/docs" },
    { title: "Lab Tutorial", link: "/resources/tensorflow-guide" }
  ]
}
```

## Error Handling

### Client-Side Error Handling

```javascript
// Global error boundary for React components
class LabErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Lab Component Error:', error, errorInfo);
    // Log to error tracking service
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

// Animation error handling
const safeAnimate = (element, animation) => {
  try {
    if (!element || !gsap) return;
    return gsap.to(element, animation);
  } catch (error) {
    console.warn('Animation failed:', error);
    // Fallback to CSS transitions
    element.style.transition = 'all 0.3s ease';
  }
};
```

### Data Loading States

```javascript
// Loading states for async data
const LoadingStates = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};

// Component loading pattern
function ProjectsPage() {
  const [loadingState, setLoadingState] = useState(LoadingStates.IDLE);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoadingState(LoadingStates.LOADING);
    fetchProjects()
      .then(data => {
        setProjects(data);
        setLoadingState(LoadingStates.SUCCESS);
      })
      .catch(err => {
        setError(err);
        setLoadingState(LoadingStates.ERROR);
      });
  }, []);
  
  if (loadingState === LoadingStates.LOADING) return <LoadingSpinner />;
  if (loadingState === LoadingStates.ERROR) return <ErrorMessage error={error} />;
  
  return <ProjectsGrid projects={projects} />;
}
```

### 404 and Not Found Handling

```javascript
// Custom 404 page with lab branding
export default function NotFound() {
  return (
    <div className="not-found-container">
      <ParticleCanvas particleCount={50} />
      <h1>404 - Page Not Found</h1>
      <p>The research you're looking for doesn't exist yet.</p>
      <AnimatedButton label="Back to Lab" route="/" />
    </div>
  );
}
```

## Testing Strategy

### Unit Testing

```javascript
// Component testing with React Testing Library
describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    const project = mockProjects[0];
    render(<ProjectCard project={project} />);
    
    expect(screen.getByText(project.title)).toBeInTheDocument();
    expect(screen.getByText(project.researchArea)).toBeInTheDocument();
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<ProjectCard project={mockProjects[0]} onClick={handleClick} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Animation Testing

```javascript
// GSAP animation testing
describe('HeroLab animations', () => {
  it('animates text reveal on mount', async () => {
    render(<HeroLab title="Test Lab" />);
    
    const title = screen.getByText('Test Lab');
    expect(title).toHaveStyle({ opacity: 0 });
    
    await waitFor(() => {
      expect(title).toHaveStyle({ opacity: 1 });
    }, { timeout: 2000 });
  });
});
```

### Performance Testing

```javascript
// Lighthouse CI configuration
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:3000', 'http://localhost:3000/research']
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }]
      }
    }
  }
};
```

### Accessibility Testing

```javascript
// Automated accessibility testing
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Cross-Browser Testing

```
Testing Matrix:
- Chrome (latest, latest-1)
- Firefox (latest, latest-1)
- Safari (latest, latest-1)
- Edge (latest)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 10+)

Testing Tools:
- BrowserStack for automated testing
- Manual testing on physical devices
- Responsive design testing (320px - 2560px)
```

## Design System

### Color Palette - Neo-futuristic Theme

```css
:root {
  /* Primary Colors - Dark Theme */
  --lab-bg-primary: #0a0e27;        /* Deep space blue */
  --lab-bg-secondary: #151b3d;      /* Slightly lighter blue */
  --lab-bg-tertiary: #1e2749;       /* Card backgrounds */
  
  /* Accent Colors - Neon */
  --lab-accent-cyan: #00d4ff;       /* Primary neon cyan */
  --lab-accent-purple: #b24bf3;     /* Secondary neon purple */
  --lab-accent-pink: #ff2e97;       /* Tertiary neon pink */
  --lab-accent-green: #00ff88;      /* Success/active green */
  
  /* Text Colors */
  --lab-text-primary: #ffffff;      /* Primary text */
  --lab-text-secondary: #a0aec0;    /* Secondary text */
  --lab-text-muted: #718096;        /* Muted text */
  
  /* Gradients */
  --lab-gradient-primary: linear-gradient(135deg, #00d4ff 0%, #b24bf3 100%);
  --lab-gradient-secondary: linear-gradient(135deg, #b24bf3 0%, #ff2e97 100%);
  --lab-gradient-accent: linear-gradient(135deg, #00ff88 0%, #00d4ff 100%);
  
  /* Effects */
  --lab-glow-cyan: 0 0 20px rgba(0, 212, 255, 0.5);
  --lab-glow-purple: 0 0 20px rgba(178, 75, 243, 0.5);
  --lab-glow-pink: 0 0 20px rgba(255, 46, 151, 0.5);
  
  /* Opacity Variants */
  --lab-cyan-10: rgba(0, 212, 255, 0.1);
  --lab-cyan-20: rgba(0, 212, 255, 0.2);
  --lab-cyan-50: rgba(0, 212, 255, 0.5);
  --lab-purple-10: rgba(178, 75, 243, 0.1);
  --lab-purple-20: rgba(178, 75, 243, 0.2);
}
```

### Typography System

```css
/* Font Families */
:root {
  --font-primary: 'Inter', 'Segoe UI', sans-serif;
  --font-heading: 'Space Grotesk', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

/* Font Sizes - Fluid Typography */
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.5rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.875rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2.25rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 3rem);
  --text-4xl: clamp(2.25rem, 1.8rem + 2.25vw, 3.75rem);
  --text-5xl: clamp(3rem, 2.4rem + 3vw, 4.5rem);
}

/* Font Weights */
:root {
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;  /* Circular */
}
```

### Shadows and Effects

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Neon Shadows */
  --shadow-neon-cyan: 0 0 20px var(--lab-cyan-50), 0 0 40px var(--lab-cyan-20);
  --shadow-neon-purple: 0 0 20px var(--lab-purple-50), 0 0 40px var(--lab-purple-20);
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}
```

## Animation Patterns

### Scroll Reveal Pattern

```javascript
// Reusable scroll reveal hook
export function useScrollReveal(options = {}) {
  const {
    trigger,
    start = "top 80%",
    once = true,
    stagger = 0.1,
    duration = 0.8,
    ease = "power3.out"
  } = options;
  
  useEffect(() => {
    if (!trigger) return;
    
    const elements = gsap.utils.toArray(trigger);
    
    elements.forEach((elem) => {
      gsap.fromTo(elem,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration,
          ease,
          scrollTrigger: {
            trigger: elem,
            start,
            once
          }
        }
      );
    });
    
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [trigger, start, once, duration, ease]);
}
```

### Hover Animation Pattern

```javascript
// Reusable hover animation
export function createHoverAnimation(element, options = {}) {
  const {
    scale = 1.05,
    duration = 0.3,
    glowColor = 'var(--lab-accent-cyan)',
    ease = 'power2.out'
  } = options;
  
  const tl = gsap.timeline({ paused: true });
  
  tl.to(element, {
    scale,
    boxShadow: `0 0 20px ${glowColor}`,
    duration,
    ease
  });
  
  element.addEventListener('mouseenter', () => tl.play());
  element.addEventListener('mouseleave', () => tl.reverse());
  
  return tl;
}
```

### Page Transition Pattern

```javascript
// Page transition with View Transitions API
export function usePageTransition() {
  const router = useRouter();
  
  const navigateWithTransition = (href) => {
    if (!document.startViewTransition) {
      router.push(href);
      return;
    }
    
    document.startViewTransition(() => {
      router.push(href);
    });
  };
  
  return { navigateWithTransition };
}
```

## Responsive Design Strategy

### Breakpoints

```css
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet portrait */
  --breakpoint-lg: 1024px;  /* Tablet landscape / Small desktop */
  --breakpoint-xl: 1280px;  /* Desktop */
  --breakpoint-2xl: 1536px; /* Large desktop */
}
```

### Mobile-First Approach

```css
/* Base styles (mobile) */
.project-card {
  padding: var(--space-4);
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .project-card {
    padding: var(--space-6);
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .project-card {
    padding: var(--space-8);
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Touch Optimization

```javascript
// Touch-friendly interactions
const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Adjust hover effects for touch devices
if (isTouchDevice()) {
  // Use tap instead of hover
  element.addEventListener('touchstart', handleTap);
} else {
  // Use hover
  element.addEventListener('mouseenter', handleHover);
}
```

## Performance Optimization

### Code Splitting Strategy

```javascript
// Dynamic imports for heavy components
const ParticleCanvas = dynamic(() => import('@/components/lab/ParticleCanvas'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

const ProjectModal = dynamic(() => import('@/components/lab/ProjectModal'), {
  ssr: false
});
```

### Image Optimization

```javascript
// Next.js Image with optimization
<Image
  src="/research/project-thumb.jpg"
  alt="Project thumbnail"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Animation Performance

```javascript
// Optimize GSAP animations
gsap.config({
  force3D: true,
  autoSleep: 60,
  nullTargetWarn: false
});

// Use will-change sparingly
.animated-element {
  will-change: transform, opacity;
}

// Remove will-change after animation
gsap.to(element, {
  x: 100,
  onComplete: () => {
    element.style.willChange = 'auto';
  }
});
```

## Accessibility Considerations

### Keyboard Navigation

```javascript
// Ensure all interactive elements are keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  aria-label="View project details"
>
  View Details
</button>
```

### Screen Reader Support

```jsx
// Provide meaningful ARIA labels
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/research" aria-current="page">Research</a></li>
    <li><a href="/team">Team</a></li>
  </ul>
</nav>

// Hidden text for screen readers
<span className="sr-only">Loading projects...</span>
```

### Color Contrast

```css
/* Ensure WCAG AA compliance (4.5:1 for normal text) */
.text-primary {
  color: #ffffff; /* White on dark background */
  background: #0a0e27; /* Contrast ratio: 15.3:1 ✓ */
}

.text-secondary {
  color: #a0aec0; /* Light gray on dark background */
  background: #0a0e27; /* Contrast ratio: 7.2:1 ✓ */
}
```

### Reduced Motion Support

```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## SEO Strategy

### Meta Tags Template

```jsx
// Dynamic meta tags for each page
export const metadata = {
  title: 'VMU Student Research Lab | Innovation in IT',
  description: 'Explore cutting-edge research projects by IT students at Vietnam Maritime University. Join our lab and contribute to innovative solutions.',
  keywords: ['VMU', 'research lab', 'IT students', 'computer science', 'innovation'],
  openGraph: {
    title: 'VMU Student Research Lab',
    description: 'Innovation in IT Research',
    images: ['/og-image.jpg'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMU Student Research Lab',
    description: 'Innovation in IT Research',
    images: ['/twitter-image.jpg']
  }
};
```

### Structured Data

```jsx
// JSON-LD for research organization
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "name": "VMU Student Research Lab",
  "url": "https://lab.vmu.edu.vn",
  "logo": "https://lab.vmu.edu.vn/logo.png",
  "description": "Student research lab focusing on IT innovation",
  "parentOrganization": {
    "@type": "EducationalOrganization",
    "name": "Vietnam Maritime University"
  }
}
</script>
```

## Content Management

### Data File Structure

```javascript
// research-projects.js
export const researchProjects = [
  {
    id: "project-001",
    title: "AI-Powered Maritime Route Optimization",
    // ... full project data
  },
  // ... more projects
];

// Easy to update without touching code
// Can be migrated to CMS later
```

### Content Update Workflow

```
1. Edit data file (e.g., research-projects.js)
2. Commit changes to Git
3. Push to repository
4. Automatic deployment via Vercel/Netlify
5. Changes live in minutes
```

## Migration Strategy

### Phase 1: Theme & Color Transformation
- Update color variables from VMU anniversary to Neo-futuristic
- Replace fonts if needed
- Update global styles

### Phase 2: Component Replacement
- Replace hero section with HeroLab
- Update navigation with LabNavigation
- Transform timeline to ProjectsGrid

### Phase 3: Content Migration
- Remove anniversary content
- Add research projects data
- Add team members data
- Add publications data

### Phase 4: New Features
- Implement particle effects
- Add project filtering
- Create team member profiles
- Build publications page

### Phase 5: Polish & Optimization
- Performance optimization
- Accessibility audit
- SEO optimization
- Cross-browser testing

## Summary

This design document provides a comprehensive blueprint for transforming the VMU 70th Anniversary website into a modern, Neo-futuristic Student Research Lab landing page. The design maintains the existing technical foundation (Next.js, GSAP, React) while introducing a bold new visual identity, restructured content architecture, and enhanced user experience tailored for showcasing student research and innovation.

Key design principles:
- **Neo-futuristic aesthetic** with dark themes and neon accents
- **Performance-first** approach with optimized animations
- **Accessibility** as a core requirement
- **Scalable architecture** for easy content management
- **Mobile-responsive** design for all devices
- **SEO-optimized** for discoverability

The design is ready for implementation with clear component specifications, data models, and technical patterns.
