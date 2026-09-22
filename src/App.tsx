/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { LAUNCH_EASE, PageTransition, Reveal } from './components/PageTransition';
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
  // Read the initial view from the hash synchronously so a refresh on a post
  // URL launches straight into the detail view (no home-view flash).
  const [activePostId, setActivePostId] = useState<string | null>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('post-')) {
      const pId = hash.replace('post-', '');
      if (BLOG_POSTS.some((p) => p.id === pId)) return pId;
    }
    return null;
  });
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
    }, 380); // wait for the exiting view's animation before scrolling
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
      }, 380); // wait for the exiting view's animation before scrolling
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

  const wrapperClass = selectedPost
    ? 'grain min-h-screen'
    : 'min-h-screen bg-[#FAF9F6] text-[#111] selection:bg-[#E8FF5A] selection:text-black relative overflow-x-hidden grain';

  return (
    <MotionConfig reducedMotion="user">
      <div className={wrapperClass}>
        {/* Launch animation: entrance plays on refresh (mount) and on every view switch */}
        <AnimatePresence mode="wait">
          {selectedPost ? (
            /* --- Post detail view --- */
            <PageTransition key={`post-${selectedPost.id}`}>
              <BlogDetailView
                post={selectedPost}
                onBack={handleBackToHome}
                onSelectPost={handleSelectPost}
                allPosts={BLOG_POSTS}
              />
            </PageTransition>
          ) : (
            /* --- CEO-Blog Landing Page --- */
            <PageTransition key="home">
              {/* Top Navbar */}
              <Navbar
                onNavigateSection={handleNavigateSection}
                onGoHome={handleBackToHome}
                isDetailView={false}
              />

              {/* Hero Section */}
              <Reveal delay={0.05}>
                <Hero
                  onReadLatest={() => handleNavigateSection('updates')}
                  onOpenVault={() => handleNavigateSection('vault')}
                  onSelectPost={handleSelectPost}
                  vaultCount={VAULT_DOCUMENTS.length}
                />
              </Reveal>

              {/* Filter / Sub-nav Sticky Bar (fade only — a transform would break sticky) */}
              <motion.div
                id="updates"
                className="sticky top-[64px] z-30 backdrop-blur-xl bg-[#FAF9F6]/90 border-y border-black/[0.06]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: LAUNCH_EASE, delay: 0.18 }}
              >
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
              </motion.div>

              {/* Bento Grid with 3 Posts */}
              <Reveal delay={0.22}>
                <section className="max-w-[1280px] mx-auto px-6 md:px-8 py-10 md:py-12">
                  <motion.div
                    key={filter}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[minmax(0,auto)]"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: LAUNCH_EASE }}
                  >
                    {filteredPosts.map((post, index) => (
                      <PostCard
                        key={post.id}
                        post={post}
                        index={index}
                        onSelect={handleSelectPost}
                      />
                    ))}
                  </motion.div>
                </section>
              </Reveal>

              {/* CEO Letter Section */}
              <Reveal delay={0.3}>
                <CeoLetter onOpenVault={() => handleNavigateSection('vault')} />
              </Reveal>

              {/* Document Vault Section */}
              <Reveal delay={0.36}>
                <DocumentVault documents={VAULT_DOCUMENTS} />
              </Reveal>

              {/* About Section */}
              <Reveal delay={0.42}>
                <AboutSection onSelectPost={handleSelectPost} />
              </Reveal>

              {/* Footer */}
              <Reveal delay={0.48}>
                <Footer />
              </Reveal>
            </PageTransition>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
