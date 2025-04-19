
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from 'lucide-react'

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6 space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-secondary">
                <Mail className="w-5 h-5" />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary">
                <Phone className="w-5 h-5" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
