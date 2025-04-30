import { ReactNode } from "react"

interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={` mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
      {children}
    </div>
  )
}