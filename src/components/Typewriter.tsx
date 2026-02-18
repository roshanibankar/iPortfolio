import { useEffect, useState } from "react"

type Props = {
  texts: string[]        // phrases to loop through
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function Typewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1500,
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

  return <span>{displayedText}</span>
}
