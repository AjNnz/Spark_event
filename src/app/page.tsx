import { HomeSection } from '@/components/features/home'
import { Service } from '@/components/features/service'
import { About } from '@/components/features/about'
import { Contact } from '@/components/features/contact'

export default function Page() {
  return (
    <main>
      <HomeSection />
      <Service />
      <About />
      <Contact />
    </main>
  )
}