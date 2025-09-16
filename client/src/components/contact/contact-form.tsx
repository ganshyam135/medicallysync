import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { InsertContactSubmission } from "@shared/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(2, "Please select a service"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });
  
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Could not submit your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-cream p-8">
        <h3 className="text-2xl font-serif mb-6 text-charcoal">Request a Consultation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-charcoal">Name *</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="w-full p-3 border border-gray-300 focus:border-gold outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-charcoal">Email *</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email"
                    className="w-full p-3 border border-gray-300 focus:border-gold outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-charcoal">Phone</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="tel"
                  className="w-full p-3 border border-gray-300 focus:border-gold outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-charcoal">Service Interested In *</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full p-3 border border-gray-300 focus:border-gold outline-none">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="new-property">New Property Design</SelectItem>
                  <SelectItem value="renovation">Renovation</SelectItem>
                  <SelectItem value="interior-styling">Interior Styling</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel className="text-charcoal">Message *</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  rows={5}
                  className="w-full p-3 border border-gray-300 focus:border-gold outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gold text-white py-3 px-8 hover:bg-opacity-90 transition-all"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
