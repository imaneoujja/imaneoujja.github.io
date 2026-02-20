"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-epfl-red/5 via-epfl-pink/5 to-epfl-red/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-epfl-red/10 to-epfl-pink/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Connect<span className="text-epfl-red">.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-epfl mb-8 mx-auto rounded-full" />

          <p className="text-epfl-dark/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborations, research projects, or just having a
            chat about <span className="text-epfl-red font-semibold">technology</span>,{" "}
            <span className="text-epfl-pink font-semibold">AI</span>, and{" "}
            <span className="text-epfl-red font-semibold">data science</span>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:i.oujja@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-epfl-white/80 backdrop-blur-sm border-2 border-epfl-red/20 hover:border-epfl-red transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-4 rounded-full bg-epfl-red/10 group-hover:bg-epfl-red/20 transition-colors">
                <Mail className="w-8 h-8 text-epfl-red" />
              </div>
              <div>
                <p className="text-sm text-epfl-dark/60 mb-1">Email</p>
                <p className="text-epfl-dark font-semibold group-hover:text-epfl-red transition-colors">
                  i.oujja@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-epfl-white/80 backdrop-blur-sm border-2 border-epfl-pink/20"
            >
              <div className="p-4 rounded-full bg-epfl-pink/10">
                <MapPin className="w-8 h-8 text-epfl-pink" />
              </div>
              <div>
                <p className="text-sm text-epfl-dark/60 mb-1">Location</p>
                <p className="text-epfl-dark font-semibold">Lausanne, Switzerland</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/imaneoujja"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full border-2 border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <Github className="w-6 h-6 text-epfl-red group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/imane-oujja-65165011a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full border-2 border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all duration-300 hover:scale-110 hover:-rotate-6"
            >
              <Linkedin className="w-6 h-6 text-epfl-red group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:i.oujja@gmail.com"
              className="group p-4 rounded-full border-2 border-epfl-red/30 hover:border-epfl-red hover:bg-epfl-red/10 transition-all duration-300 hover:scale-110 hover:rotate-6"
            >
              <Mail className="w-6 h-6 text-epfl-red group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
