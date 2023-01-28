const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8`}
  >
    <div className="absolute w-[80%] inset-0 gradient-01" />
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
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;