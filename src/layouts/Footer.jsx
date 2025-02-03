import React, { useEffect, useRef } from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.3;

  const targetMaskSize = 120;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * (getScrollProgress() + 0.005);

    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);

    return scrollProgress;
  };

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div className={styles.stickyMask} ref={stickyMask}>
          <video autoPlay muted loop>
            <source
              src="/images/videos/footer-background.mp4"
              type="video/mp4"
              loading="lazy"
            />
          </video>
        </div>
      </div>
    </main>
  );
};

export default Footer;
