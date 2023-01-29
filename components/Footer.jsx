'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-end flex-wrap gap-5">

        <a
          href="#start" className="font-bold md:text-[64px] text-[44px] me-text me-link"
        >
          Time Loop
        </a>

      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            KANGAWORKS
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © {new Date().getFullYear()} KangaWorks
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.profile} rel="noreferrer" target="_blank">
                <img
                  key={social.id}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer logo"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
