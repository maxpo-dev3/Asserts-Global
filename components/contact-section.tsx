import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#07173A]  to-[#7AB945] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Ready To Explore Premium Real Estate Opportunities? Contact Our Experts For Personalized Consultation And
            Exclusive Property Access.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{"Let's Discuss Your Investment Goals"}</h3>
            <p className="text-gray-200 mb-8">
              Our Team Of Real Estate Experts Is Ready To Help You Find The Perfect Investment Opportunity That Aligns
              With Your Financial Objectives.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-200">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-200">Invest@Assetsglobal.Com</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Office</h4>
                <p className="text-gray-200">50 2nd Floor, MM Road, Frazer Town, Bengaluru, Karnataka 560005</p>
              </div>
            </div>

            {/* Why Choose Assets Global */}
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Why Choose Assets Global?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  15+ Years Of Real Estate Expertise
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  ₹500+ Crores In Successful Transactions
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Exclusive Access To Pre-Launch Properties
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  End-To-End Investment Support
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  Legal And Documentation Assistance
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Send Us An Enquiry</h3>
            <p className="text-gray-200 mb-6">
              Fill Out The Form Below And Our Team Will Get Back To You Within 24 Hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter Your Full Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    placeholder="+91 1234567890"
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Investment Interest</label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select Investment Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="land">Land Development</SelectItem>
                      <SelectItem value="fractional">Fractional Ownership</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Investment Budget</label>
                  <Select>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select Budget Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30l-50l">₹30L - ₹50L</SelectItem>
                      <SelectItem value="50l-1cr">₹50L - ₹1Cr</SelectItem>
                      <SelectItem value="1cr-2cr">₹1Cr - ₹2Cr</SelectItem>
                      <SelectItem value="2cr+">₹2Cr+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your investment goals and preferences..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-[100px]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" className="border-white/30" />
                <label htmlFor="newsletter" className="text-sm text-gray-200">
                  Subscribe To Our Newsletter For Market Updates And Exclusive Opportunities
                </label>
              </div>

              <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3">Send Enquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
