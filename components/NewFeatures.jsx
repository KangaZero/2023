// import React, { useState, useEffect } from 'react';

import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle, url, links }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <a href={url} target="_blank" rel="noreferrer" className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px]`}>
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain logo" />
      </a>
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-slate-500 leading-[32.4px]">
      {subtitle}
    </p>
    <p className="flex-2 mt-[16px] font-extrabold text-[22px] text-slate-400 ">
      <a className="text-link" href="mailto:samuelyongw@gmail.com">{links}</a>
    </p>
  </div>
);

export default NewFeatures;
