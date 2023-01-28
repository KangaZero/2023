'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

import styles from '../styles';


const Start = () => (

  <div className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div id="horizon">
      <div className="glow" />
    </div>
    <div id="earth" />
    <div id="title">
      GRAVITY
    </div>
    <div id="subtitle">
      <span>
        DONT
      </span>
      <span>
        LET
      </span>
      <span>
        GO
      </span>
    </div>
  </div>
);

export default Start;

