import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const DropdownMenu = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <div
        className="dropdown-img"
      >
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain logo"
          onClick={() => setShowDropdown(!showDropdown)}
          onMouseEnter={() => setShowDropdown(!showDropdown)}
        />
      </div>
      { showDropdown && (
        <motion.div
          variants={fadeIn('right', 'spring', 0.3, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="inline-flex flex-col relative px-2 pt-7 text-[24px] text-slate-300 font-extrabold"
        >
          <a href="#start">Start</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
          <a href="#future">Future</a>
          <a href="#legacy">Legacy</a>
          <a href="#about">About</a>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
