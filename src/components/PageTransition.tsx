/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, Variants } from 'framer-motion';

/**
 * Shared "launch" easing — quick lift, soft settle.
 * Use as a plain tuple so framer-motion accepts it as a cubic-bezier.
 */
export const LAUNCH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Enter/exit states for a whole view (home page / post detail page). */
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 24, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: LAUNCH_EASE },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.99,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps a full "page". The entrance plays on mount — so on every refresh —
 * and, when nested inside <AnimatePresence mode="wait">, the exit plays
 * before the next view mounts on a route/view switch.
 *
 * Always pass a unique `key` at the call site so AnimatePresence can track it.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => (
  <motion.div
    className={className}
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

type RevealMode = 'rise' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  /** Seconds to wait before this section launches. */
  delay?: number;
  /**
   * 'rise' — fade + lift (default).
   * 'fade' — opacity only; use on sticky/fixed elements so no transform is applied.
   */
  mode?: RevealMode;
  className?: string;
}

/**
 * Staggered section reveal used to build the launch sequence on the home view.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, mode = 'rise', className }) => (
  <motion.div
    className={className}
    initial={mode === 'rise' ? { opacity: 0, y: 28 } : { opacity: 0 }}
    animate={mode === 'rise' ? { opacity: 1, y: 0 } : { opacity: 1 }}
    transition={{ duration: 0.55, ease: LAUNCH_EASE, delay }}
  >
    {children}
  </motion.div>
);
