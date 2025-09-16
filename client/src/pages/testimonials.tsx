import { Link } from "wouter";

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Hero Section */}
      <section className="relative py-28 md:py-36 bg-charcoal text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Our Performance</h1>
            <p className="text-lg md:text-xl mb-8">
              We take pride in providing exceptional interior design services to all our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Stats */}
      <section className="py-20 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal">
              Client Satisfaction
            </h2>
            <p className="text-lg text-darkgray">
              At R.R Interiors, we measure our success by the satisfaction of our clients. Here's how we're performing:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-10 shadow-lg">
              <div className="text-gold text-5xl font-bold mb-4">100%</div>
              <h3 className="text-xl font-serif mb-2 text-charcoal">Client Satisfaction</h3>
              <p className="text-darkgray">Our clients consistently rate their experience with us as excellent.</p>
            </div>
            
            <div className="bg-white p-10 shadow-lg">
              <div className="text-gold text-5xl font-bold mb-4">85%</div>
              <h3 className="text-xl font-serif mb-2 text-charcoal">Repeat Clients</h3>
              <p className="text-darkgray">Many of our clients return to us for multiple projects over the years.</p>
            </div>
            
            <div className="bg-white p-10 shadow-lg">
              <div className="text-gold text-5xl font-bold mb-4">90%</div>
              <h3 className="text-xl font-serif mb-2 text-charcoal">Referrals</h3>
              <p className="text-darkgray">A significant portion of our new clients come from referrals by satisfied customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="bg-charcoal p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience Our Exceptional Design Services</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and transform your space into something extraordinary.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
