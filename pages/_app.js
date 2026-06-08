import { useEffect } from "react";
import "../styles/globals.css";
import Lenis from "lenis";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
