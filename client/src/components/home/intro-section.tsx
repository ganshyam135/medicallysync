export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-charcoal dark:text-charcoal-light">Elevating Interior Design Since 2005</h2>
          <p className="text-lg text-darkgray dark:text-darkgray-light leading-relaxed">
            At R.R Interiors, we believe that your home should be a sanctuary that reflects your unique style and enhances your quality of life. With attention to detail and personalized approach, we transform ordinary spaces into extraordinary environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="gold-icon-container">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4 text-charcoal dark:text-charcoal-light">Custom Design</h3>
            <p className="text-darkgray dark:text-darkgray-light">Tailored solutions that reflect your unique style, preferences, and functional needs.</p>
          </div>
          
          <div className="text-center">
            <div className="gold-icon-container">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4 text-charcoal dark:text-charcoal-light">Full Renovations</h3>
            <p className="text-darkgray dark:text-darkgray-light">Comprehensive renovation services from concept development to final installation.</p>
          </div>
          
          <div className="text-center">
            <div className="gold-icon-container">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4 text-charcoal dark:text-charcoal-light">Luxury Experience</h3>
            <p className="text-darkgray dark:text-darkgray-light">White-glove service and premium materials for an elevated design experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
