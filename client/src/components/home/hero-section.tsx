import { Link } from "wouter";
import { useState, useEffect } from "react";
import { scrollToElement } from "@/utils/scrollUtils";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Luxury interior design with TV unit"
    },
    {
      url: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Elegant wardrobe design"
    },
    {
      url: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Elegant bedroom interior"
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      alt: "Stylish living room design"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <section id="home" className="pt-0">
      <div className="relative h-screen max-h-[800px]">
        {/* Dark mode responsive overlay */}
        <div className="absolute inset-0 bg-charcoal dark:bg-black opacity-65 dark:opacity-75 z-10"></div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="flex h-full w-[400%] transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${currentImageIndex * 25}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-1/4 h-full flex-shrink-0">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="object-cover h-full w-full dark:brightness-75"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 py-10 bg-black bg-opacity-30 dark:bg-black dark:bg-opacity-50 rounded-lg max-w-3xl mx-auto border border-white/10 dark:border-white/20 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white dark:text-white font-serif mb-4 leading-tight shadow-text">
              Transform Your Space <br />Into a Masterpiece
            </h1>
            <p className="text-lg md:text-xl text-white dark:text-gray-100 mb-8 max-w-xl mx-auto font-light italic shadow-text">
              Timeless Interiors, Designed for Beautiful Living
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => scrollToElement('interior-gallery')} 
                className="btn-primary dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
              >
                Our Designs
              </button>
              <button 
                onClick={() => scrollToElement('footer')} 
                className="btn-secondary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
