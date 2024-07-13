import React, { useEffect, useRef, useState } from 'react';
import './TypingEffect.css';

function TypingEffect({ text }) {
  const typingTextRef = useRef(null);
  const hiddenTextRef = useRef(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const element = typingTextRef.current;

    const stepAnimateText = (element, animation) => {
      const textContent = element.innerText;
      let curr = '';
      for (let i = 0; i < textContent.length; i++) {
        const character = textContent.charAt(i);
        element.innerHTML = `${curr}<span class="${animation}" style="animation-delay: ${i * 0.04}s;">${character}</span>`;
        curr = element.innerHTML;
      }
    };

    const checkArrowsVisibility = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop + clientHeight < scrollHeight);
    };

    stepAnimateText(element, 'bounceInDown');

    element.addEventListener('scroll', checkArrowsVisibility);

    return () => {
      element.removeEventListener('scroll', checkArrowsVisibility);
    };
  }, [text]);

  useEffect(() => {
    const hiddenElement = hiddenTextRef.current;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        setCurrentIndex((prev) => prev + 1);

        // Check hidden element height against visible element height
        const { scrollHeight, clientHeight } = hiddenElement;
        if (scrollHeight > clientHeight) {
          setShowDownArrow(true);
        }
      } else {
        clearInterval(interval);
      }
    }, 35); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  const scrollUp = () => {
    const element = typingTextRef.current;
    element.scrollBy({ top: -50, behavior: 'smooth' });
  };

  const scrollDown = () => {
    const element = typingTextRef.current;
    element.scrollBy({ top: 50, behavior: 'smooth' });
    // Check if reached bottom
    const { scrollTop, scrollHeight, clientHeight } = element;
    setShowDownArrow(scrollTop + clientHeight < scrollHeight);
  };

  useEffect(() => {
    const element = typingTextRef.current;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop + clientHeight < scrollHeight);
    };
    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="typing-wrapper">
      {showUpArrow && <button className="scroll-arrow up-arrow" onClick={scrollUp}>↑</button>}
      <div id="typing-text" className="typing-text" ref={typingTextRef}>{text}</div>
      {showDownArrow && <button className="scroll-arrow down-arrow" onClick={scrollDown}>↓</button>}
      <div id="hidden-text" className="hidden-text" ref={hiddenTextRef}>{displayedText}</div>
      <div id="typing-text-copy" className="typing-text-copy">{displayedText}</div>
    </div>
  );
}

export default TypingEffect;
