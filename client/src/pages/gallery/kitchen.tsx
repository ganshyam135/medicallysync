import { Link } from "wouter";

export default function KitchenGallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Kitchen Design",
      description: "Contemporary kitchen with sleek finishes"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Traditional Kitchen",
      description: "Classic kitchen with warm wooden elements"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Kitchen",
      description: "High-end kitchen with premium appliances"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556909114-4f5ba4e1-e3c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Compact Kitchen",
      description: "Space-efficient kitchen design"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1556185781-a47769c34096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Open Kitchen",
      description: "Open concept kitchen with island"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modular Kitchen",
      description: "Flexible modular kitchen design"
    }
  ];

  return (
    <>
      <section className="bg-cream dark:bg-cream-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal dark:text-charcoal-light">Kitchen Designs</h1>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto mb-8">
              Discover our stunning kitchen designs that combine functionality with beauty, creating the heart of your home.
            </p>
            <Link href="/" className="text-gold hover:text-charcoal dark:hover:text-charcoal-light font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div key={image.id} className="group relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-charcoal dark:text-charcoal-light mb-2">{image.title}</h3>
                  <p className="text-darkgray dark:text-darkgray-light">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal dark:bg-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Love These Kitchen Designs?</h2>
            <p className="text-lg mb-8">
              Get in touch with us to create a custom kitchen design that perfectly fits your cooking needs and lifestyle.
            </p>
            <div className="inline-flex items-center space-x-2 text-gold border-b-2 border-gold pb-1">
              <span className="text-lg font-medium">Contact details below</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}