/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PostCard } from './components/PostCard';
import { CeoLetter } from './components/CeoLetter';
import { DocumentVault } from './components/DocumentVault';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { BlogDetailView } from './components/BlogDetailView';
import { BLOG_POSTS, VAULT_DOCUMENTS } from './data/posts';
import { PostAudience } from './types';

export default function App() {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [filter, setFilter] = useState<PostAudience>('all');

  // Sync with browser hash if present on mount or popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('post-')) {
        const pId = hash.replace('post-', '');
        if (BLOG_POSTS.some((p) => p.id === pId)) {
          setActivePostId(pId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '' || ['updates', 'vault', 'letter', 'about'].includes(hash)) {
        setActivePostId(null);
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const handleSelectPost = (postId: string) => {
    setActivePostId(postId);
    try {
      window.history.pushState(null, '', `#post-${postId}`);
    } catch {
      // Fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActivePostId(null);
    try {
      window.history.pushState(null, '', '#updates');
    } catch {
      // Fallback
    }
    setTimeout(() => {
      const el = document.getElementById('updates');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (activePostId !== null) {
      setActivePostId(null);
      try {
        window.history.pushState(null, '', `#${sectionId}`);
      } catch {
        // Fallback
      }
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        try {
          window.location.hash = sectionId;
        } catch {
          // Fallback
        }
      }
    }
  };

  const filteredPosts = useMemo(() => {
    if (filter === 'all') return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => {
      if (filter === 'investor') return p.audience === 'investor';
      if (filter === 'regulatory') return p.audience === 'regulatory';
      if (filter === 'public') return p.audience === 'public' || p.audience === 'culture';
      return true;
    });
  }, [filter]);

  const counts = {
    all: BLOG_POSTS.length,
    investor: BLOG_POSTS.filter((p) => p.audience === 'investor').length,
    regulatory: BLOG_POSTS.filter((p) => p.audience === 'regulatory').length,
    public: BLOG_POSTS.filter((p) => p.audience === 'public' || p.audience === 'culture').length,
  };

  const selectedPost = BLOG_POSTS.find((p) => p.id === activePostId);

  // If a blog post is actively selected, show the reusable BlogDetailView!
  if (selectedPost) {
    return (
      <div className="grain min-h-screen">
        <BlogDetailView
          post={selectedPost}
          onBack={handleBackToHome}
          onSelectPost={handleSelectPost}
          allPosts={BLOG_POSTS}
        />
      </div>
    );
  }

  // Otherwise, show the full CEO-Blog Landing Page
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111] selection:bg-[#E8FF5A] selection:text-black relative overflow-x-hidden grain">
      {/* Top Navbar */}
      <Navbar
        onNavigateSection={handleNavigateSection}
        onGoHome={handleBackToHome}
        isDetailView={false}
      />

      {/* Hero Section */}
      <Hero
        onReadLatest={() => handleNavigateSection('updates')}
        onOpenVault={() => handleNavigateSection('vault')}
        onSelectPost={handleSelectPost}
        vaultCount={VAULT_DOCUMENTS.length}
      />

      {/* Filter / Sub-nav Sticky Bar */}
      <div id="updates" className="sticky top-[64px] z-30 backdrop-blur-xl bg-[#FAF9F6]/90 border-y border-black/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-[64px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-auto no-scrollbar">
            {[
              { k: 'all' as PostAudience, label: 'All Updates', c: counts.all },
              { k: 'investor' as PostAudience, label: 'For Investors', c: counts.investor },
              { k: 'regulatory' as PostAudience, label: 'For Regulators', c: counts.regulatory },
              { k: 'public' as PostAudience, label: 'For Public', c: counts.public },
            ].map((tab) => {
              const isActive = filter === tab.k;
              return (
                <button
                  key={tab.k}
                  onClick={() => setFilter(tab.k)}
                  className={`whitespace-nowrap h-9 px-4 rounded-full border text-[13px] font-medium transition flex items-center gap-2 ${
                    isActive
                      ? 'bg-black text-white border-black shadow-[0_6px_20px_rgba(0,0,0,0.15)]'
                      : 'bg-white border-black/10 hover:bg-[#F2EDE8] text-black/70'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/15 text-white' : 'bg-black/5'
                    }`}
                  >
                    {tab.c}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-black/40">
            <div className="w-2 h-2 rounded-full bg-[#E8FF5A] border border-black/10" />
            <span>{BLOG_POSTS.length} notes • 2.1k words • sorted newest</span>
          </div>
        </div>
      </div>

      {/* Bento Grid with 3 Posts */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(0,auto)]">
          {filteredPosts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              index={index}
              onSelect={handleSelectPost}
            />
          ))}
        </div>
      </section>

      {/* CEO Letter Section */}
      <CeoLetter onOpenVault={() => handleNavigateSection('vault')} />

      {/* Document Vault Section */}
      <DocumentVault documents={VAULT_DOCUMENTS} />

      {/* About Section */}
      <AboutSection onSelectPost={handleSelectPost} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
