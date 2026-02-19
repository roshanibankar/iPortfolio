import { useEffect, useState } from "react"

type Props = {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function Typewriter({
  texts,
  typingSpeed = 700,
  deletingSpeed = 30,
  pauseTime = 1700,
}: Props) {
  const [displayedText, setDisplayedText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  const style: React.CSSProperties = {
    fontWeight: 700,
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  }

  return (
    <span style={style}>
      {displayedText}
      {(displayedText.length !== texts[textIndex].length || isDeleting) && (
        <span
          style={{
            display: "inline-block",
            marginLeft: 2,
            width: 10,
            animation: "blink 1s steps(2, start) infinite",
            color: "inherit",
            fontWeight:50,
          }}
        >
          |
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}</style>
        </span>
      )}
    </span>
  )
}
