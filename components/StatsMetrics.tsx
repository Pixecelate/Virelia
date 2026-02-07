"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { TrendingUp, Users, MessageSquare, Globe2 } from "lucide-react"

interface StatItemProps {
  value: number
  suffix: string
  label: string
  icon: React.ElementType
  delay: number
}

function StatItem({ value, suffix, label, icon: Icon, delay }: StatItemProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(count, value, { duration: 2, delay })
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [count, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#156d95]/10 mb-4">
        <Icon className="w-8 h-8 text-[#156d95]" />
      </div>
      <div className="font-figtree text-5xl font-bold text-[#156d95] mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="font-figtree text-lg text-[#606060]">{label}</div>
    </motion.div>
  )
}

export function StatsMetrics() {
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
            The numbers speak for themselves
          </h2>
          <p className="font-figtree text-lg text-[#404040] max-w-2xl mx-auto">
            Join thousands of companies using Virelia to transform their communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem value={1000} suffix="+" label="Companies Worldwide" icon={Users} delay={0.2} />
          <StatItem value={1} suffix="B+" label="Messages Analyzed Daily" icon={MessageSquare} delay={0.3} />
          <StatItem value={50} suffix="+" label="Languages Supported" icon={Globe2} delay={0.4} />
          <StatItem value={99} suffix="%" label="Customer Satisfaction" icon={TrendingUp} delay={0.5} />
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "SOC 2 Type II", sublabel: "Certified" },
            { label: "GDPR", sublabel: "Compliant" },
            { label: "ISO 27001", sublabel: "Certified" },
            { label: "99.99%", sublabel: "Uptime SLA" },
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <div className="font-figtree text-2xl font-bold text-[#202020] mb-1">{item.label}</div>
              <div className="font-figtree text-sm text-[#606060]">{item.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
