import { Link } from "wouter";

export default function StudyRoomGallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Study Room",
      description: "Contemporary workspace with clean design"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Home Office Study",
      description: "Professional home office setup"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Library Study Room",
      description: "Traditional study room with bookshelves"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kids Study Area",
      description: "Colorful and fun children's study space"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Compact Study Corner",
      description: "Space-efficient study corner design"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Executive Study Room",
      description: "Luxurious executive workspace"
    }
  ];

  return (
    <>
      <section className="bg-cream dark:bg-cream-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-charcoal dark:text-charcoal-light">Study Room Designs</h1>
            <p className="text-lg text-darkgray dark:text-darkgray-light max-w-2xl mx-auto mb-8">
              Design productive and inspiring study spaces that enhance focus and creativity with our thoughtful interiors.
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Love These Study Room Designs?</h2>
            <p className="text-lg mb-8">
              Get in touch with us to create a custom study room design that boosts productivity and creativity.
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