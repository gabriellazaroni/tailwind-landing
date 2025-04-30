import { ReactNode } from "react"

interface TitleProps {
  children?: ReactNode
  className?: string
}

export const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`}>{children}</h1>
  )
}