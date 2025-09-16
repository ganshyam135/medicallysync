import { Testimonial } from "@shared/schema";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg key={i} className="h-5 w-5 fill-current" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="h-5 w-5 fill-current text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      }
    }
    
    return stars;
  };
  
  return (
    <div className="bg-white p-8 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="text-gold flex">
          {renderStars(testimonial.rating)}
        </div>
      </div>
      <p className="text-darkgray mb-6 italic">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        {testimonial.imageUrl && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.clientName} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="text-lg font-semibold text-charcoal">{testimonial.clientName}</h4>
          <p className="text-sm text-darkgray">{testimonial.clientType}</p>
        </div>
      </div>
    </div>
  );
}
