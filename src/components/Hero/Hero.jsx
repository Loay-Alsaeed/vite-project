import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero.png';
import './Hero.css';

export default function Hero() {
  return (
    <header className="relative h-screen">
              <div className="absolute inset-0">
                <img 
                  src={heroImage}
                  alt="Luxury Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-opacity-50 bg-black "/>
              </div>
              
              <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
                  Transform Your Space
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
                  Creating timeless interiors that tell your story
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-opacity-90 transition-all">
                  Explore Our Designs <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </header>
  );
}