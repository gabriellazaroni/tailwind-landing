import { ReactNode, useEffect } from "react"
import { Navbar } from "./elements/Navbar"
import { Footer } from "./elements/Footer"

interface LayoutProps {
  title: string
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title])

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}