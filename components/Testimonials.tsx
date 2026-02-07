"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Customer Success",
    company: "TechFlow Inc.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    quote: "Virelia transformed how our support team handles customer conversations. We've seen a 40% improvement in response quality and our CSAT scores are at an all-time high.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "DataStream Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    quote: "The AI-powered sentiment analysis is incredibly accurate. It's like having a communication expert analyzing every interaction in real-time. Game changer for our remote team.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Head of Sales",
    company: "CloudScale",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    quote: "Our sales team closed 30% more deals after implementing Virelia. Understanding client tone and emotion during calls gives us a massive competitive advantage.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Product Manager",
    company: "Innovate Labs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    quote: "The integration was seamless and the insights are actionable. We use Virelia data to improve our product messaging and customer onboarding. Absolutely essential.",
    rating: 5,
  },
  {
    name: "Lisa Johnson",
    role: "Director of Operations",
    company: "GlobalComm",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    quote: "Managing a distributed team across 15 countries became so much easier with Virelia. The multilingual support is flawless and helps us maintain consistent communication quality.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "CEO",
    company: "StartupX",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    quote: "As a founder, understanding team morale and customer sentiment is critical. Virelia gives me real-time insights that help me make better decisions every single day.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-figtree text-[48px] font-medium leading-tight mb-4 text-[#202020]">
            Trusted by teams worldwide
          </h2>
          <p className="font-figtree text-lg text-[#404040] max-w-2xl mx-auto">
            See how leading companies use Virelia to improve communication and drive results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#156d95] transition-all duration-300 hover:shadow-xl">
                <Quote className="w-10 h-10 text-[#156d95] opacity-20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#156d95] text-[#156d95]" />
                  ))}
                </div>

                <p className="font-figtree text-base text-[#404040] leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-gray-200"
                  />
                  <div>
                    <div className="font-figtree font-medium text-[#202020]">{testimonial.name}</div>
                    <div className="font-figtree text-sm text-[#606060]">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
