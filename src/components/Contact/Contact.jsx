import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSent(true);
        form.current.reset();
        toast.success("Message sent successfully!", { theme: "dark" });
      } else {
        toast.error("Failed to send message. Try again.", { theme: "dark" });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Try again later.", { theme: "dark" });
    }
  };

  return (
    <section 
      id='contact' 
      className='py-24 px-4 sm:px-6 md:px-[5vw] lg:px-[10vw] font-sans relative overflow-hidden bg-gradient-to-b from-[#000428] to-black border-t border-white/[0.05]'
    >
      <ToastContainer />

      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%238B5CF6'/%3E%3C/svg%3E\")" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-16 text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366F1] bg-[#6366F1]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse shadow-[0_0_8px_#14B8A6]"></span>
            <span className="text-[#818CF8] uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold">Get in Touch</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            <span className="text-white">Contact </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] to-[#6366F1]">Me</span>
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-2xl text-center text-base sm:text-lg leading-[1.8]">
            Let's connect and discuss opportunities or collaborations
          </p>
        </motion.div>

        {/* Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch'>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-gradient-to-br from-[#12162B]/90 to-[#080A14]/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-[#6366F1]/15
                       transition-all duration-300 hover:border-[#6366F1]/40 hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]'
          >
            <h3 className='text-2xl font-bold text-[#E2E8F0] tracking-tight mb-8'>
              Send a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className='space-y-5'>
              <div>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Your Name'
                  required
                  className='w-full p-4 rounded-xl bg-[#0A0D1C]/80 text-white border border-[#6366F1]/20 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/50 transition-all placeholder-[#475569]'
                />
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone'
                  required
                  className='w-full p-4 rounded-xl bg-[#0A0D1C]/80 text-white border border-[#6366F1]/20 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/50 transition-all placeholder-[#475569]'
                />
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                  className='w-full p-4 rounded-xl bg-[#0A0D1C]/80 text-white border border-[#6366F1]/20 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/50 transition-all placeholder-[#475569]'
                />
              </div>
              
              <div>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Your Email'
                  required
                  className='w-full p-4 rounded-xl bg-[#0A0D1C]/80 text-white border border-[#6366F1]/20 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/50 transition-all placeholder-[#475569]'
                />
              </div>

              <div>
                <textarea
                  name='message'
                  rows='4'
                  placeholder='Message'
                  required
                  className='w-full p-4 rounded-xl bg-[#0A0D1C]/80 text-white border border-[#6366F1]/20 focus:outline-none focus:border-[#818CF8] focus:ring-1 focus:ring-[#818CF8]/50 transition-all placeholder-[#475569] resize-none'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#4F46E5] hover:to-[#7C3AED]
                           py-4 rounded-xl font-bold text-white text-base tracking-wide
                           transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]
                           border border-white/10 hover:border-white/20 hover:-translate-y-0.5'
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className='bg-gradient-to-br from-[#12162B]/90 to-[#080A14]/90 backdrop-blur-xl p-2 rounded-2xl shadow-2xl border border-[#6366F1]/15
                       transition-all duration-300 hover:border-[#6366F1]/40 hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]'
          >
            <div className="w-full h-full rounded-xl overflow-hidden min-h-[400px]">
              <iframe
                title='map'
                src='https://www.google.com/maps?q=Lucknow,+Uttar+Pradesh,+India&output=embed'
                className='w-full h-full'
                loading='lazy'
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
