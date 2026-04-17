import Image from 'next/image';
import TeamMember1 from '@/assets/images/Aj.jpg';
import TeamMember2 from '@/assets/images/Bae.webp';
import TeamMember3 from '@/assets/images/iu.jpg'; 

export const About = () => {
  const team = [
    { name: "Angelito L. Nunez Jr.", role: "Creative Director", image: TeamMember1 },
    { name: "Bhebie Jane C. Miras", role: "Event Strategist", image: TeamMember2 },
    { name: "Shaymae Jane S. Sumagang", role: "Lead Designer", image: TeamMember3 },
  ];

  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* About Content */}
        <h2 
          className="text-4xl md:text-5xl font-serif font-black tracking-[0.2em] text-[#fff2a5] mb-8"
          style={{ WebkitTextStroke: '1px black' }}
        >
          ABOUT US
        </h2>
        
        <p className="text-slate-700 leading-relaxed text-lg max-w-5xl mx-auto">
          We turn a single spark into an extraordinary reality. Driven by a fearlessly creative spirit, 
          we craft bespoke celebrations that radiate with style, heart, and innovation. We handle every 
          detail with precision so you can stay in the moment—leaving you with memories that shine 
          long after the celebration ends.
        </p>

        {/* Team Section (Directly underneath) */}
        <div className="mt-16">
          <p className="text-slate-700 text-lg italic tracking-tight font-gray mb-5">
            Meet the amazing people behind the magic.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center group w-full max-w-[280px] mx-auto md:mx-0">
                
                {/* Compact Polaroid Card */}
                <div className="bg-white p-3 shadow-xl rounded-2xl transition-all group-hover:-translate-y-2 group-hover:shadow-2xl duration-300 border border-slate-50">
                  <div className="overflow-hidden rounded-xl aspect-[5/6]">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Name & Role */}
                <h3 className="mt-6 text-lg font-bold text-slate-900 tracking-wide uppercase">
                  {member.name}
                </h3>
                <p className="text-slate-800 text-[10px] uppercase tracking-[0.5em] font-medium mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};