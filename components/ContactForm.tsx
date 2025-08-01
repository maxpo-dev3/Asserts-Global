"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactForm() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 text-black " id="contactUs">
      <h3 className="text-xl md:text-2xl font-bold mb-2">Send Us An Enquiry</h3>
      <p className="text-sm md:text-base mb-4 md:mb-6">
        Fill Out The Form Below And Our Team Will Get Back To You Within 24 Hours.
      </p>

      <form className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <Input
              placeholder="Enter Your Full Name"
              className="bg-white/20 border-white/30 text-black placeholder:text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <Input
              placeholder="+91 1234567890"
              className="bg-white/20 border-white/30 text-black placeholder:text-gray-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address *</label>
          <Input
            type="email"
            placeholder="your.email@example.com"
            className="bg-white/20 border-white/30 text-black placeholder:text-gray-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Investment Interest</label>
            <Select>
              <SelectTrigger className="bg-white/20 border-white/30 text-black">
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
            <label className="block text-sm font-medium mb-1">Investment Budget</label>
            <Select>
              <SelectTrigger className="bg-white/20 border-white/30 text-black">
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
          <label className="block text-sm font-medium mb-1">Message</label>
          <Textarea
            placeholder="Tell us about your investment goals and preferences..."
            className="bg-white/20 border-white/30 text-black placeholder:text-gray-500 min-h-[100px]"
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="newsletter" className="border-black" />
          <label htmlFor="newsletter" className="text-sm">
            Subscribe To Our Newsletter For Market Updates And Exclusive Opportunities
          </label>
        </div>

        <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3">
          Send Enquiry
        </Button>
      </form>
    </div>
  )
}
