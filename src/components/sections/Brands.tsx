import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
const logos = [
  'discord',
  'openai',
  'paypal',
  'spotify',
  'youtube'
]

export const Brands: React.FC = () => {
  return (
    <section className="">
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by Industry Leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4 ">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body group"
            >
              <img
                src={`src/assets/logos/${logo}.png`}
                alt={logo}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                width="100"
                height="60"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}