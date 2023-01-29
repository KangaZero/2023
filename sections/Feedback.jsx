'use client';

import { motion } from 'framer-motion';
import Draggable from 'react-draggable';

import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { fadeIn, slideIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />
      <TitleText title={<>The Developer</>} textStyles="me-text text-center" />
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="h-[650px] mt-[50px] flex-[0.5] lg:max-w-[400px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        id="about"
      >
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-slate-500">
            Samuel Wai Weng Yong
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-gray-400">
            FullStack Web Developer
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] me-text2">
          Hi there! I just completed my bootcamp course by the <strong>University of Sydney</strong>.
          I may be new to the world of web development, but I am always eager to learn and improve!
        </p>
      </motion.div>

      <motion.div
        variants={slideIn('up', 'tween', 0.5, 1)}
        className="h-[650px] relative flex-0.5 flex justify-center items-center"
      >
        <img
          src="/me.png"
          alt="hey it's me!"
          className="mt-[50px] w-[80%] lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="h-[650px] mt-[50px] flex-[0.5] lg:max-w-[400px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div>
          <motion.div
            variants={fadeIn('down', 'tween', 0.3, 1)}
            className="flex flex-row mx-auto w-[200px] h-[200px] bg-transparent"
          >

            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/javascript.gif"
                  alt="Javascript"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>
            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/react.gif"
                  alt="react"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>
            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/python.gif"
                  alt="python"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>
            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/database.gif"
                  alt="database"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>

          </motion.div>
          <h4 className="-mt-[60px] font-bold text-center sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-slate-500">
            Skills
          </h4>
        </div>
        <ul className="mt-[24px] text-center font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] me-text">
          <li>
            <motion.p
              variants={fadeIn('right', 'tween', 0.3, 1)}
              whileHover="hidden"
            >
              Open my <strong>Github</strong>
            </motion.p>
            <a href="https://github.com/KangaZero" target="_blank" rel="noreferrer">
              <img
                height={60}
                width={60}
                src="/github.svg"
                alt="github profile"
                className="logo mx-auto"
              />
            </a>
          </li>
        </ul>
        <div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 1)}
            className="flex flex-row mx-auto w-[200px] h-[200px] bg-transparent"
          >

            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/graphql.svg"
                  alt="Graphql"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>
            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/mongodb.svg"
                  alt="mongodb"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>
            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/mysql.svg"
                  alt="mysql"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>
            <Draggable>
              <div className="min-w-[60px] min-h-[60px]">
                <img
                  src="/apollo.svg"
                  alt="apollo"
                  className="logo w-[65%] h-[65%] object-contain"
                />
              </div>
            </Draggable>

          </motion.div>
          <h4 className="-mt-[60px] font-bold text-center sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-slate-500">
            Socials
          </h4>
        </div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="flex flex-row justify-center mx-auto w-[200px] h-[200px] bg-transparent"
        >
          <div className="mt-[50px]">
            <a href="https://github.com/KangaZero" target="_blank" rel="noreferrer">
              <img
                height={60}
                width={60}
                src="/linkedin.svg"
                alt="linkedin profile"
                className="logo mx-auto"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
