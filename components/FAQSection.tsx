"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
type FAQItem = {
  question: string
  answer: string
}
type FAQSectionProps = {
  title?: string
  faqs?: FAQItem[]
}
const defaultFAQs: FAQItem[] = [
  {
    question: "What is Virelia and how does it work?",
    answer:
      "Virelia is an AI-powered intelligence layer that connects all your communication tools—calls, chats, and meetings—into a unified system. It analyzes conversations in real-time to provide insights on sentiment, tone, team alignment, and collaboration patterns. Simply integrate Virelia with your existing tools like Slack, Zoom, or Microsoft Teams, and start gaining actionable insights immediately.",
  },
  {
    question: "How secure is my data with Virelia?",
    answer:
      "Security is our top priority. Virelia uses bank-grade encryption, is SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. All data is encrypted end-to-end and processed in compliance with enterprise-grade security standards. Your data is never shared with third parties, and you maintain complete control over what gets analyzed and stored. We also offer on-premise deployment options for enterprises with strict data residency requirements.",
  },
  {
    question: "What communication platforms does Virelia integrate with?",
    answer:
      "Virelia integrates seamlessly with over 50+ communication platforms including Slack, Microsoft Teams, Zoom, Google Meet, email systems, customer support tools like Zendesk and Intercom, and many more. Our API also allows for custom integrations. New integrations are added regularly based on customer feedback.",
  },
  {
    question: "How does Virelia handle multilingual conversations?",
    answer:
      "Virelia supports 50+ languages with native understanding. Our AI can detect sentiment, tone, and emotion accurately across multiple languages, making it perfect for global teams and international customer support. The system automatically detects the language being used and applies the appropriate analysis models.",
  },
  {
    question: "How do I get started with Virelia and what are the pricing options?",
    answer:
      "Getting started is simple: sign up for a 14-day free trial, connect your communication tools in a few clicks, and start analyzing within minutes. We offer flexible pricing tiers: Starter ($29/month), Professional ($99/month), and Enterprise (custom pricing). All plans include core features like sentiment analysis and real-time insights. No credit card required for the trial, and you can cancel anytime. Contact our sales team for volume discounts and custom enterprise solutions.",
  },
  {
    question: "Can I customize the AI models to fit my organization's needs?",
    answer:
      "Yes! Enterprise customers can train custom AI models tailored to their specific industry, terminology, and communication patterns. This includes custom sentiment categories, specialized tone detection, and organization-specific insights. Our team works closely with you to ensure the AI understands your unique context and delivers the most relevant insights.",
  },
  {
    question: "What kind of insights and analytics does Virelia provide?",
    answer:
      "Virelia provides comprehensive insights including: real-time sentiment analysis, emotion detection, tone analysis, team collaboration patterns, customer satisfaction metrics, communication bottlenecks, meeting effectiveness scores, response time analytics, and trend analysis over time. All insights are presented in intuitive dashboards with customizable reports that you can export and share with your team.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Absolutely! We offer a 14-day free trial with full access to all Pro features—no credit card required. You can connect your tools, invite your team, and experience the full power of Virelia risk-free. After the trial, you can choose the plan that best fits your needs or contact us for a custom enterprise solution.",
  },
]
export const FAQSection = ({ title = "Frequently asked questions", faqs = defaultFAQs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <section className="w-full py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2
              className="text-[40px] leading-tight font-normal text-[#202020] tracking-tight sticky top-24"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
                fontWeight: "400",
                fontSize: "40px",
              }}
            >
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between py-6 text-left group hover:opacity-70 transition-opacity duration-150"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className="text-lg leading-7 text-[#202020] pr-8"
                      style={{
                        fontFamily: "var(--font-figtree), Figtree",
                        fontWeight: "400",
                      }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openIndex === index ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="flex-shrink-0"
                    >
                      <Plus className="w-6 h-6 text-[#202020]" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <p
                            className="text-lg leading-6 text-[#666666]"
                            style={{
                              fontFamily: "var(--font-figtree), Figtree",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
