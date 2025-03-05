import Header from "./layouts/Header/Header";
import About from "./layouts/About/About";
import Projects from "./layouts/Projects/Projects";
import Footer from "./layouts/Footer/Footer";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 1550,
          minWidth: 1000,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef}>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
