"use client"

import { motion } from "framer-motion"
import { Brain, Shield, Zap, Globe, BarChart3, MessageSquare, Lock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze every conversation in real-time, detecting sentiment, emotion, and intent across all communication channels.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC 2 Type II certified, and GDPR compliant. Your data stays secure with end-to-end encryption and role-based access controls.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process millions of messages per second with sub-100ms latency. Real-time insights delivered instantly to your team without any delays.",
  },
  {
    icon: Globe,
    title: "50+ Languages",
    description: "Analyze conversations in over 50 languages with native understanding. Perfect for global teams and multilingual customer support.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into communication patterns, team dynamics, and customer sentiment trends. Export custom reports and visualizations.",
  },
  {
    icon: MessageSquare,
    title: "Unified Platform",
    description: "Connect all your communication tools—Slack, Teams, Zoom, email, and more—into one intelligent dashboard for complete visibility.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Built with privacy by design. Full control over data retention, anonymization options, and transparent data processing policies.",
  },
  {
    icon: Sparkles,
    title: "Smart Automation",
    description: "Automate responses, categorize conversations, and trigger workflows based on tone, urgency, and context. Save hours every day.",
  },
]

export function FeaturesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-figtree text-[48px] font-medium leading-tight mb-4 text-[#202020]">
            Everything you need to understand your conversations
          </h2>
          <p className="font-figtree text-lg text-[#404040] max-w-3xl mx-auto">
            Virelia combines cutting-edge AI with enterprise-grade infrastructure to deliver insights that drive better communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#156d95] transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-[#156d95]/10 flex items-center justify-center mb-4 group-hover:bg-[#156d95] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#156d95] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-figtree text-xl font-medium mb-2 text-[#202020]">{feature.title}</h3>
                <p className="font-figtree text-sm text-[#606060] leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
