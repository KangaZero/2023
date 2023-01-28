'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index, url, gitUrl }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col mb-8"
  >
    <img
      src={imgUrl}
      alt={title}
      onClick={() => window.open(url, '_blank')}
      className="md:w-[270px] w-full h-[250px] rounded-[10px] object-cover logo"
    />
    <div className="w-full flex justify-center items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] pr-2">
        <div className="flex flex-row">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>

          <span className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] ml-5`}>
            <img
              onClick={() => window.open(gitUrl, '_blank')}
              src="/github.svg"
              alt="github"
              className="w-[60%] h-[60%] object-contain logo"
            />
          </span>

        </div>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-slate-500">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent shadow-md shadow-blue-300 border-[1px] border-white"
      >
        <img
          onClick={() => window.open(url, '_blank')}
          src="/enter.png"
          alt="enter"
          className="w-[60%] h-[60%] object-contain logo"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
