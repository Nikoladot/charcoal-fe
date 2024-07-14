import React, { useEffect, useRef, useState } from 'react'

import './TypingEffect.css'
import PropTypes from 'prop-types'

function TypingEffect({ text }) {
  const typingTextRef = useRef(null)
  const hiddenTextRef = useRef(null)
  const [showUpArrow, setShowUpArrow] = useState(false)
  const [showDownArrow, setShowDownArrow] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const isBottom = (el) => {
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 1
  }

  const isTop = (el) => {
    return el.scrollTop === 0
  }

  const checkArrowsVisibility = () => {
    const hiddenElement = hiddenTextRef.current
    setShowUpArrow(!isTop(hiddenElement))
    setShowDownArrow(!isBottom(hiddenElement))
  }

  useEffect(() => {
    const element = typingTextRef.current

    const stepAnimateText = (element, animation) => {
      const textContent = element.innerText
      let curr = ''
      for (let i = 0; i < textContent.length; i++) {
        const character = textContent.charAt(i)
        element.innerHTML = `${curr}<span class="${animation}" style="animation-delay: ${i * 0.04}s;">${character}</span>`
        curr = element.innerHTML
      }
    }

    stepAnimateText(element, 'bounceInDown')

    const hiddenElement = hiddenTextRef.current
    hiddenElement.addEventListener('scroll', checkArrowsVisibility)

    // Initial check for arrow visibility
    checkArrowsVisibility()

    return () => {
      hiddenElement.removeEventListener('scroll', checkArrowsVisibility)
    }
  }, [text])

  useEffect(() => {
    const hiddenElement = hiddenTextRef.current

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex))
        setCurrentIndex((prev) => prev + 1)

        // Check hidden element height against visible element height
        const { scrollHeight, clientHeight } = hiddenElement
        if (scrollHeight > clientHeight) {
          setShowDownArrow(true)
        }

        // Update arrow visibility
        checkArrowsVisibility()
      } else {
        clearInterval(interval)
      }
    }, 35) // Adjust the speed of typing here

    return () => clearInterval(interval)
  }, [currentIndex, text])

  const syncScroll = () => {
    const typingElement = typingTextRef.current
    const hiddenElement = hiddenTextRef.current

    hiddenElement.scrollTop = typingElement.scrollTop
  }

  const scrollUp = () => {
    const element = typingTextRef.current
    element.scrollBy({ top: -50, behavior: 'smooth' })

    setTimeout(() => {
      syncScroll()
      checkArrowsVisibility()
    }, 300) // Delay to ensure visibility check after scrolling
  }

  const scrollDown = () => {
    const element = typingTextRef.current
    element.scrollBy({ top: 50, behavior: 'smooth' })

    setTimeout(() => {
      syncScroll()
      checkArrowsVisibility()
    }, 300) // Delay to ensure visibility check after scrolling
  }

  useEffect(() => {
    const hiddenElement = hiddenTextRef.current
    const handleScroll = () => {
      checkArrowsVisibility()
    }
    hiddenElement.addEventListener('scroll', handleScroll)
    return () => hiddenElement.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="typing-wrapper">
      {showUpArrow && (
        <button className="scroll-arrow up-arrow" onClick={scrollUp}>
          ↑
        </button>
      )}
      <div id="typing-text" className="typing-text" ref={typingTextRef} onScroll={syncScroll}>
        {text}
      </div>
      {showDownArrow && (
        <button className="scroll-arrow down-arrow" onClick={scrollDown}>
          ↓
        </button>
      )}
      <div id="hidden-text" className="hidden-text" ref={hiddenTextRef}>
        {displayedText}
      </div>
      <div id="typing-text-copy" className="typing-text-copy">
        {displayedText}
      </div>
    </div>
  )
}

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired
}

export default TypingEffect
