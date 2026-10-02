import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane,
  FaUser, FaPhone, FaTag, FaComment
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "gufranansari.dev@gmail.com",
    sub: "Reply within 24 hours",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.25)",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Lucknow, Uttar Pradesh",
    sub: "India — Open to remote",
    color: "#14B8A6",
    glow: "rgba(20,184,166,0.20)",
  },
  {
    icon: FaClock,
    label: "Availability",
    value: "Mon – Sat, 10AM – 8PM",
    sub: "IST (UTC +5:30)",
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.20)",
  },
];

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        form.current.reset();
        toast.success("Message sent successfully! I'll get back to you soon.", { theme: "dark" });
      } else {
        toast.error("Failed to send message. Please try again.", { theme: "dark" });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.", { theme: "dark" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="seamless-section py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden"
    >
      <ToastContainer />

      {/* Background dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      />
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] bg-[#6366F1]/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-[#8B5CF6]/8 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1]/40 bg-[#6366F1]/5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]" />
            <span className="text-[#818CF8] uppercase tracking-[0.2em] text-xs font-bold">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Me</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-xl text-center text-base sm:text-lg leading-[1.8]">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* LEFT — Contact Info (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* CTA block */}
            <div className="relative rounded-2xl overflow-hidden p-6 border border-white/10 bg-gradient-to-br from-[#6366F1]/15 to-[#8B5CF6]/5 backdrop-blur-sm mb-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366F1]/20 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Let's build something amazing</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed relative z-10 mb-4">
                I'm currently open to new opportunities. Whether it's a full-stack app, Admin Panel, or a quick consultation — let's talk.
              </p>
              <div className="flex items-center gap-2 relative z-10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">Available for work</span>
              </div>
            </div>

            {/* Info cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-300 cursor-default"
                  style={{ "--glow": info.glow }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${info.color}18`,
                      border: `1px solid ${info.color}30`,
                      boxShadow: `0 0 0 0 ${info.glow}`,
                    }}
                  >
                    <Icon style={{ color: info.color }} className="text-base" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[#64748B] text-xs uppercase tracking-wider font-semibold mb-0.5">{info.label}</span>
                    <span className="text-white font-semibold text-sm sm:text-[15px] leading-snug truncate">{info.value}</span>
                    <span className="text-[#475569] text-xs mt-0.5">{info.sub}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* RIGHT — Contact Form (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 bg-gradient-to-br from-[#0F1229]/90 to-[#080A14]/90 backdrop-blur-xl p-7 sm:p-9 rounded-2xl border border-[#6366F1]/15 shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:border-[#6366F1]/30 transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-[#64748B] text-sm mb-8">Fill out the form below and I'll get back to you shortly.</p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div className="relative group/field">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569] text-sm group-focus-within/field:text-[#818CF8] transition-colors" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0A0D1C]/80 text-white border border-white/[0.08] focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/30 transition-all placeholder-[#334155] text-sm"
                />
              </div>

              {/* Phone + Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative group/field">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569] text-sm group-focus-within/field:text-[#818CF8] transition-colors" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0A0D1C]/80 text-white border border-white/[0.08] focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/30 transition-all placeholder-[#334155] text-sm"
                  />
                </div>
                <div className="relative group/field">
                  <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569] text-sm group-focus-within/field:text-[#818CF8] transition-colors" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0A0D1C]/80 text-white border border-white/[0.08] focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/30 transition-all placeholder-[#334155] text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group/field">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569] text-sm group-focus-within/field:text-[#818CF8] transition-colors" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0A0D1C]/80 text-white border border-white/[0.08] focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/30 transition-all placeholder-[#334155] text-sm"
                />
              </div>

              {/* Message */}
              <div className="relative group/field">
                <FaComment className="absolute left-4 top-4 text-[#475569] text-sm group-focus-within/field:text-[#818CF8] transition-colors" />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message..."
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0A0D1C]/80 text-white border border-white/[0.08] focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/30 transition-all placeholder-[#334155] resize-none text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED] disabled:opacity-60 disabled:cursor-not-allowed py-4 rounded-xl font-bold text-white text-base tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] border border-white/10 hover:-translate-y-0.5"
              >
                {isSending ? (
                  <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                )}
                <span>{isSending ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

