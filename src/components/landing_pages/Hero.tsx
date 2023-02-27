import React, { useEffect, useRef } from 'react'
import './Home.css'
const Hero = () => {
    const textArray = ["E-Commerce","Add to Cart", "Place Order"];
    const span = useRef<HTMLSpanElement>(null);
    const cursorSpan = useRef<HTMLSpanElement>(null);
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
  
    useEffect(() => {
      setTimeout(() => {
        typing();
      }, 1000);
    }, []);
  
    const typing = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.current!.classList.contains("typing"))
          cursorSpan.current!.classList.add("typing");
        span.current!.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, typingDelay);
      } else {
        cursorSpan.current!.classList.remove("typing");
        setTimeout(erasing, newTextDelay);
      }
    };
  
    const erasing = () => {
      if (charIndex > 0) {
        if (!cursorSpan.current!.classList!.contains("typing"))
          cursorSpan.current!.classList.add("typing");
        span.current!.textContent = textArray[textArrayIndex].substring( 0,charIndex - 1);
        charIndex--;
        setTimeout(erasing, erasingDelay);
      } else {
        cursorSpan.current!.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
          textArrayIndex = 0;
        }
        setTimeout(typing, typingDelay + 1100);
      }
    };
  return (
    <section id="hero-section" className="ag-maecenas_title grediant d-flex align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
      <p className="prefix-text ">
        Lets Get {" "}
        <span className="typed-text text-warning " ref={span}>
        </span>
        <span className="cursor"  ref={cursorSpan}>
          &nbsp;
        </span>
      </p>
    </section>
  )
}

export default Hero