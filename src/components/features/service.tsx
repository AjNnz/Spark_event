import { Card } from "../ui/card";
import CorporateImg from "@/assets/images/111.png";
import WeddingImg from "@/assets/images/222.png";
import PartyImg from "@/assets/images/333.png";

export const Service = () => {
  const services = [
    {
      title: "CORPORATE",
      image: CorporateImg,
    },
    {
      title: "WEDDING",
      image: WeddingImg,
    },
    {
      title: "PARTIES",
      image: PartyImg,
    },
  ];

  return (
    <section id="service" className="py-24 px-6 bg-[#FFD1D6]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-serif font-bold text-[#fff2a5]  mb-10 tracking-[0.2em] " >
          
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {services.map((s, i) => (
           <Card 
                key={i} 
                image={s.image} 
                altText={s.title} // Matches the new Card requirements
            />
          ))}
        </div>
      </div>
    </section>
  );
};