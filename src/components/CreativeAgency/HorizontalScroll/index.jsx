import React, { useEffect, useRef } from 'react';
import Intro from './Intro';
import Awards from './Awards';
import CallToAction from './CallToAction';

function HzScroll({ lightMode }) {
  const tweenRef = useRef(null);
  const resizeTimerRef = useRef(null);

  const killHzScroll = () => {
    try {
      tweenRef.current?.scrollTrigger?.kill(true);
      tweenRef.current?.kill();
    } catch (e) { }
    tweenRef.current = null;
  };

  const initHzScroll = () => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 991) {
      killHzScroll();
      return;
    }

    killHzScroll();

    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('.panel');
    const container = document.querySelector('.thecontainer');
    if (!container || sections.length < 2) return;

    tweenRef.current = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        id: 'hzScroll',
        trigger: container,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => `+=${container.offsetWidth}`,
      },
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    setTimeout(() => ScrollTrigger.refresh(), 250);
  };

  useEffect(() => {
    initHzScroll();

    const onLoad = () => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = window.setTimeout(() => {
        initHzScroll();
      }, 150);
    };

    window.addEventListener('load', onLoad);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('load', onLoad);
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(resizeTimerRef.current);
      killHzScroll();
    };
  }, []);

  return (
    <section className="thecontainer ontop">
      <Intro />
      <Awards lightMode={lightMode} />
      <CallToAction lightMode={lightMode} />
    </section>
  )
}

export default HzScroll