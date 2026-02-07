"use client"

import { motion } from "framer-motion"

const companies = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "CloudScale", logo: "CS" },
  { name: "Innovate", logo: "IN" },
  { name: "GlobalComm", logo: "GC" },
  { name: "StartupX", logo: "SX" },
  { name: "FutureAI", logo: "FA" },
  { name: "Nexus", logo: "NX" },
]

export function TrustedBy() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-figtree text-sm uppercase tracking-wide text-[#606060] mb-8">
            Trusted by leading teams worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <div className="group w-full aspect-square max-w-[80px] flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-[#156d95]/10 hover:to-[#1e88e5]/10 transition-all duration-300 border border-gray-200 hover:border-[#156d95]/30">
                  <span className="font-bold text-lg text-[#606060] group-hover:text-[#156d95] transition-colors duration-300">
                    {company.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
