import { ReactNode } from "react"

interface ButtonProps {
  className?: string
  children?: ReactNode
  onClick?: VoidFunction
}

export const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative 
    overflow-hidden border border-transparent bg-violet-600 ${className}`}
    >
      {children}
    </button>
  )
}