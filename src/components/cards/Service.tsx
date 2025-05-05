import { ReactNode } from "react"
import { Paragraph } from "../shared/Paragraph"

interface ServiceCardProps {
  title?: string
  description?: string
  icon?: ReactNode
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl
                    bg-box-bg shadow-lg box-shadow relative overflow-hidden"
    >
      <div className="rounded-xl bg-body dark:bg-gray-950 p-3 text-heading-1 w-max relative">
        {icon}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
        <Paragraph>
          {description}
        </Paragraph>
      </div>
    </div>
  )
}