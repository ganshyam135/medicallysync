export default function About() {

  return (
    <>
      {/* About Hero Section */}
      <section className="relative py-28 md:py-36 bg-charcoal dark:bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">About R.R Interiors</h1>
            <p className="text-lg md:text-xl mb-8">
              Creating beautiful, functional spaces since 2005
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal dark:text-charcoal-light">About R.R Interiors</h2>
              <p className="text-darkgray dark:text-darkgray-light mb-6 leading-relaxed">
                Founded in 2005, R.R Interiors has been dedicated to crafting interiors that combine timeless beauty with lasting strength. Unlike mass-produced solutions, our focus has always been on handmade interiors, where every detail is thoughtfully designed and carefully built. This commitment to craftsmanship ensures that each project is not only visually appealing but also durable enough to stand the test of time.
              </p>
              <p className="text-darkgray dark:text-darkgray-light mb-6 leading-relaxed">
                At R.R Interiors, we believe that great design goes beyond appearances. A well-designed space should make everyday living more comfortable, inspiring, and meaningful. Whether it's a home, office, or commercial project, we approach each interior with a balance of creativity and practicality, ensuring that the final result reflects both style and functionality.
              </p>
              <p className="text-darkgray dark:text-darkgray-light mb-6 leading-relaxed">
                Our philosophy is simple: listen, design, and deliver. We take the time to understand your needs, preferences, and lifestyle before shaping interiors that truly represent your vision. By blending aesthetics with strength, we create spaces that you will cherish for years to come.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#mission" className="bg-charcoal text-white px-6 py-3 text-center hover:bg-gold transition-all">
                  Our Mission
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Elegant interior design work" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Beautiful custom built-in wardrobe design" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-cream dark:bg-cream-dark">
        <div className="container-custom">
          <div className="bg-white dark:bg-gray-800 p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-charcoal dark:text-charcoal-light">Our Mission & Values</h3>
              <p className="text-lg text-darkgray dark:text-darkgray-light mb-8 leading-relaxed">
                At R.R Interiors, our mission is to create exceptional spaces that inspire, comfort, and function perfectly for our clients' needs while reflecting their unique personalities and aspirations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="text-xl font-serif mb-3 text-charcoal dark:text-charcoal-light">Excellence</h4>
                  <p className="text-darkgray dark:text-darkgray-light">We are committed to excellence in every aspect of our work, from the initial concept to the final installation.</p>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-3 text-charcoal dark:text-charcoal-light">Collaboration</h4>
                  <p className="text-darkgray dark:text-darkgray-light">We believe that the best designs emerge from a collaborative process between our team and our clients.</p>
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-3 text-charcoal dark:text-charcoal-light">Innovation</h4>
                  <p className="text-darkgray dark:text-darkgray-light">We constantly seek new ideas, materials, and approaches to create unique and inspiring spaces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream dark:bg-cream-dark">
        <div className="container-custom">
          <div className="bg-charcoal dark:bg-gray-700 p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's Work Together</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Our team is here to help you create a design that perfectly reflects your style and meets your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
