import { ReactNode } from "react"

interface ParagraphProps {
  children?: ReactNode
  className?: string
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>
  )
}