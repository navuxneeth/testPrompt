import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Zap, Palette, BarChart3, Shield } from 'lucide-react';
import Hls from 'hls.js';
import { BlurText } from './components/BlurText';
import './index.css';

// HLS Video Component
const HLSVideo: React.FC<{
  src: string;
  className?: string;
  desaturated?: boolean;
}> = ({ src, className = '', desaturated = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={className}
      style={desaturated ? { filter: 'saturate(0)' } : {}}
    />
  );
};

// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-heading italic text-2xl">Neural</div>

        <div className="liquid-glass rounded-full px-6 py-3 flex items-center gap-8">
          <a href="#home" className="text-sm font-medium text-foreground/90 font-body hover:text-foreground transition">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-foreground/90 font-body hover:text-foreground transition">
            Services
          </a>
          <a href="#work" className="text-sm font-medium text-foreground/90 font-body hover:text-foreground transition">
            Work
          </a>
          <a href="#process" className="text-sm font-medium text-foreground/90 font-body hover:text-foreground transition">
            Process
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/90 font-body hover:text-foreground transition">
            Pricing
          </a>
          <button className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-2 hover:bg-white/90 transition">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-visible h-[1000px] bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute top-[20%] w-full h-auto object-contain z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/5 z-0" />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-[300px]"
        style={{
          background: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[150px] flex flex-col items-center text-center min-h-[1000px]">
        {/* Badge */}
        <div className="liquid-glass rounded-full px-3.5 py-1 inline-flex items-center gap-2 mb-8">
          <span className="bg-white text-black rounded-full px-2 py-0.5 text-xs font-medium font-body">
            New
          </span>
          <span className="text-xs font-medium text-white font-body">
            Introducing neural interface design systems
          </span>
        </div>

        {/* Heading with BlurText */}
        <BlurText
          text="The Neural Interface Your Mind Deserves"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] mb-6"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body font-light text-white/60 text-sm max-w-2xl mb-8"
        >
          Revolutionary design. Seamless connectivity. Built by AI, refined by neuroscience.
          This is brain-computer interface design, wildly reimagined.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-center gap-4"
        >
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2 hover:backdrop-blur-[60px] transition">
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="text-sm font-medium text-white font-body flex items-center gap-2 hover:text-white/80 transition">
            Watch the Film
            <Play className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Partners Bar */}
        <div className="mt-auto pb-8 pt-16 flex flex-col items-center">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">
            Trusted by the teams behind
          </div>
          <div className="flex items-center gap-12 flex-wrap justify-center">
            {['Neuralink', 'OpenBCI', 'Kernel', 'Emotiv', 'Paradromics'].map((partner) => (
              <span key={partner} className="text-2xl md:text-3xl font-heading italic text-white">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="relative min-h-[700px] py-32 px-6 md:px-16 lg:px-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <HLSVideo
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover"
        />
        {/* Top Fade */}
        <div
          className="absolute top-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to top, black, transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[500px]">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          You dream it. We build it.
        </h2>
        <p className="font-body font-light text-white/60 text-sm max-w-2xl mb-8">
          Share your vision. Our AI analyzes neural patterns, designs intuitive interfaces,
          generates adaptive code, and deploys seamlessly. All in days, not quarters.
        </p>
        <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

// Features Chess Section
const FeaturesChess: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Pro features. Zero complexity.
          </h2>
        </div>

        {/* Row 1 - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-[0.9] mb-4">
              Designed to connect. Built to adapt.
            </h3>
            <p className="font-body font-light text-white/60 text-sm mb-6">
              Every synapse is intentional. Our AI studies neural signals across thousands of
              BCI sessions—then builds your interface to outperform them all.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
              Learn more
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video bg-white/5" />
          </div>
        </div>

        {/* Row 2 - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-heading italic text-white tracking-tight leading-[0.9] mb-4">
              It gets smarter. Automatically.
            </h3>
            <p className="font-body font-light text-white/60 text-sm mb-6">
              Your interface evolves on its own. AI monitors every thought pattern, gesture,
              and interaction—then optimizes in real time. No manual updates. Ever.
            </p>
            <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
              See how it works
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Grid Section
const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Days, Not Months',
      description: 'Concept to deployment at a pace that redefines fast.',
    },
    {
      icon: Palette,
      title: 'Obsessively Crafted',
      description: 'Every detail considered. Every element refined.',
    },
    {
      icon: BarChart3,
      title: 'Built to Perform',
      description: 'Layouts informed by data. Decisions backed by neuroscience.',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Medical-grade protection comes standard.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            Why Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="liquid-glass rounded-2xl p-6">
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-heading italic text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const Stats: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Interfaces deployed' },
    { value: '99%', label: 'Signal accuracy' },
    { value: '10x', label: 'Faster adaptation' },
    { value: '3 days', label: 'Average delivery' },
  ];

  return (
    <section className="relative py-32 px-6 md:px-16 lg:px-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <HLSVideo
          src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
          className="w-full h-full object-cover"
          desaturated
        />
        {/* Top Fade */}
        <div
          className="absolute top-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to top, black, transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-body font-light text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'A complete rebuild in five days. Our neural interface went from concept to clinical trials faster than we thought possible. The AI understood our vision immediately.',
      name: 'Dr. Sarah Chen',
      role: 'CEO, Luminary Neuroscience',
    },
    {
      quote: 'Signal quality up 4x in the first month. The adaptive algorithms learned our users\' patterns and optimized the interface automatically. Unprecedented results.',
      name: 'Marcus Webb',
      role: 'Head of Engineering, Arcline BCI',
    },
    {
      quote: 'They didn\'t just design our interface. They reimagined how humans interact with machines. Every detail speaks to deep understanding of both design and neuroscience.',
      name: 'Dr. Elena Voss',
      role: 'Research Director, Helix Labs',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="liquid-glass rounded-2xl p-8">
              <p className="text-white/80 font-body font-light text-sm italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="text-white font-body font-medium text-sm mb-1">
                {testimonial.name}
              </div>
              <div className="text-white/50 font-body font-light text-xs">
                {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Footer Section
const CTAFooter: React.FC = () => {
  return (
    <section id="pricing" className="relative py-32 px-6 md:px-16 lg:px-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <HLSVideo
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="w-full h-full object-cover"
        />
        {/* Top Fade */}
        <div
          className="absolute top-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to bottom, black, transparent)',
          }}
        />
        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[200px]"
          style={{
            background: 'linear-gradient(to top, black, transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
          Your next interface starts here.
        </h2>
        <p className="font-body font-light text-white/60 text-sm max-w-2xl mx-auto mb-8">
          Book a free consultation. See what AI-powered neural interface design can do.
        </p>
        <div className="flex items-center gap-4 justify-center mb-32">
          <button className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white font-body flex items-center gap-2">
            Book a Call
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body flex items-center gap-2 hover:bg-white/90 transition">
            View Pricing
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-xs font-body">
            © 2026 Neural Interface Studio
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-white/40 text-xs font-body hover:text-white/60 transition">
              Privacy
            </a>
            <a href="#terms" className="text-white/40 text-xs font-body hover:text-white/60 transition">
              Terms
            </a>
            <a href="#contact" className="text-white/40 text-xs font-body hover:text-white/60 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CTAFooter />
    </div>
  );
}

export default App;
