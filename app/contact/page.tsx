"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    investmentType: "",
    budget: "",
    subscribed: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Enquiry submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        investmentType: "",
        budget: "",
        subscribed: false,
      });

      // Redirect to Thank You page after a successful submission
      router.push("/contact/thankyou");
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 text-gray-800 max-h-[85vh] overflow-y-auto">
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
        Send Us An Enquiry
      </h3>
      <p className="text-sm md:text-base mb-4 md:mb-6 text-gray-600">
        Fill out the form below and our team will get back to you within 24 hours.
      </p>

      <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+91 1234567890"
              className="bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Investment Interest
            </label>
            <Select
              onValueChange={(value) => handleSelectChange("investmentType", value)}
              value={form.investmentType}
            >
              <SelectTrigger className="bg-gray-100 border border-gray-300 text-gray-800">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Investment Budget
            </label>
            <Select
              onValueChange={(value) => handleSelectChange("budget", value)}
              value={form.budget}
            >
              <SelectTrigger className="bg-gray-100 border border-gray-300 text-gray-800">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your investment goals and preferences..."
            className="bg-gray-100 border border-gray-300 text-gray-800 placeholder:text-gray-400 min-h-[100px]"
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="newsletter"
            name="subscribed"
            checked={form.subscribed}
            onCheckedChange={(checked: boolean) =>
              setForm((prev) => ({ ...prev, subscribed: checked }))
            }
            className="border-gray-500"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-700">
            Subscribe to our newsletter for market updates and exclusive opportunities
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-3"
        >
          Send Enquiry
        </Button>
      </form>
    </div>
  );
}
