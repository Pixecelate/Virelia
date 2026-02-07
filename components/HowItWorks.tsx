"use client"

import { motion } from "framer-motion"
import { Plug, ScanSearch, Lightbulb, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Tools",
    description: "Integrate Virelia with your favorite communication platforms in just a few clicks. Slack, Teams, Zoom, email, and more—we support them all.",
    color: "#156d95",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "AI Analyzes Everything",
    description: "Our advanced AI processes conversations in real-time, detecting sentiment, tone, emotion, and intent across every message, call, and meeting.",
    color: "#1e88e5",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Get Actionable Insights",
    description: "Receive instant notifications and detailed reports on communication patterns, team dynamics, customer sentiment, and more—all in one dashboard.",
    color: "#00897b",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Improve & Scale",
    description: "Use data-driven insights to enhance communication quality, boost team collaboration, increase customer satisfaction, and scale your operations confidently.",
    color: "#43a047",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <h2 className="font-figtree text-[48px] font-medium leading-tight mb-4 text-[#202020]">
            How Virelia Works
          </h2>
          <p className="font-figtree text-lg text-[#404040] max-w-2xl mx-auto">
            Get up and running in minutes with our simple four-step process
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#156d95] via-[#1e88e5] via-[#00897b] to-[#43a047] opacity-20" style={{ transform: "translateY(-50%)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl mb-6"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-figtree text-2xl font-medium mb-3 text-[#202020]">{step.title}</h3>
                  <p className="font-figtree text-sm text-[#606060] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#156d95] text-white rounded-full font-figtree text-lg font-medium hover:bg-[#124f6e] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </button>
          <p className="font-figtree text-sm text-[#606060] mt-4">No credit card required • 14-day free trial</p>
        </motion.div>
      </div>
    </section>
  )
}
