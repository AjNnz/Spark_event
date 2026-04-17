import Image from 'next/image'
import { Button } from '../ui/button'
import HeroImg from '@/assets/images/img 1.jpg' // Using your Aj.jpg from the sidebar

export const HomeSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title with Gold Stroke Effect */}
        <h1 className="text-5xl md:text-7xl font-serif font-black tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-[#fff2a5] to-[#f0d78c] drop-shadow-sm mb-2" 
            style={{ WebkitTextStroke: '1px #f0d78c' }}>
          SPARK EVENTS
        </h1>
        
        <p className="italic text-slate-400 text-lg md:text-xl tracking-widest mb-10 font-light">
          Where Every Celebration Sparkles.
        </p>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-9 mt-10">
          {/* Image with Rounded Corners */}
          <div className="w-full md:w-1/2 max-w-xl">
            <Image 
              src={HeroImg} 
              alt="Celebration" 
              className="rounded-[2rem] shadow-lg object-cover"
              priority
            />
          </div>

          {/* Description Text */}
          <div className="w-full md:w-1/2 max-w-lg text-left">
            <p className="text-slate-700 leading-relaxed text-lg mb-8">
              At Spark Events, we make every moment shine. From intimate weddings to 
              grand celebrations, we handle every detail so you can enjoy the magic. 
              Let’s turn your vision into an unforgettable masterpiece.
            </p>
            
            {/* Custom Styled Link to Contact Section */}
            <a href="#contact" className="bg-[#FFB0C0] text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-[#ff9aad] transition-all shadow-md active:scale-95 inline-block">
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}