// import React, { useState, useEffect } from 'react';

import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <button
        type="button"
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px]`}
      >
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain logo" />
      </button>
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-slate-500 leading-[32.4px]">
      {subtitle}
    </p>
  </div>;
};

export default NewFeatures;

// const [deferredPrompt, setDeferredPrompt] = useState(null);
// const [showButton, setShowButton] = useState(true);

// useEffect(() => {
//   window.addEventListener('beforeinstallprompt', (event) => {
//     setDeferredPrompt(event);
//     setShowButton(true);
//   });

//   window.addEventListener('appinstalled', (event) => {
//     setDeferredPrompt(null);
//   });
// }, []);

// const handleClick = async () => {
//   if (!deferredPrompt) {
//     return;
//   }

//   deferredPrompt.prompt();
//   setDeferredPrompt(null);
//   setShowButton(false);
// };

// return ()
