'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styles from '../styles';
import { navVariants, fadeIn } from '../utils/motion';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className={`${styles.xPaddings} py-8`}
      id="start"
    >
      <div className="absolute overflow-hidden w-[200%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <button
          type="button"
          className="logo"
        >
          <img
            src="/light-mode.png"
            alt="toggle theme switch"
            className="w-[30px] h-[30px] object-contain"
          />
        </button>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          Portfolio
        </h2>
        <div
          className="dropdown-img"
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain logo"
            onClick={() => setShowDropdown(!showDropdown)}
            onMouseEnter={() => setShowDropdown(true)}
          />
        </div>
      </div>
      { showDropdown && (
        <motion.div
          variants={fadeIn('left', 'spring', 0.3, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="dropdown-menu z-20 flex flex-col items-end relative px-2 pt-7 text-[24px] text-slate-300 font-extrabold"
        >
          {/* Explore */}
          <a href="#works">Works</a>
          {/* WhatsNew */}
          <a href="#contact">Contact</a>
          {/* World */}
          <a href="#future">Future</a>
          {/* Insights */}
          <a href="#legacy">Legacy</a>
          {/* Feedback */}
          <a href="#about">About</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
