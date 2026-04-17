import Image from 'next/image';
import Logo from '@/assets/images/logo.png'; // Importing the image directly

export const Navbar = () => (
  <nav className="fixed top-0 w-full bg-[#FFB0C0]  z-50 py-3 px-8 flex justify-between items-center">
    {/* Replacing the text with the Logo */}
    <a href="#home" className="hover:opacity-80 transition-opacity">
      <Image 
        src={Logo} 
        alt="Spark Event Logo" 
        width={180}      // Adjust width as needed
        height={90}      // Adjust height as needed
        className="object-contain"
        priority         // This ensures the logo loads instantly
      />
    </a>

    <div className="hidden md:flex space-x-8 text-sm font-bold uppercase">
      <a href="#home" className="hover:text-[#fff2a5] transition-colors duration-300">Home</a>
      <a href="#service" className="hover:text-[#fff2a5] transition-colors duration-300">Services</a>
      <a href="#about" className="hover:text-[#fff2a5] transition-colors duration-300">About</a>
      <a href="#contact" className="hover:text-[#fff2a5] transition-colors duration-300">Contact</a>
    </div>
  </nav>
);