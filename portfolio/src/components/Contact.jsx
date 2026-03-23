import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setSnackbarMsg(`${type} copied to clipboard!`);
    setTimeout(() => setSnackbarMsg(''), 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMsg('');

    const serviceID = 'service_s8sgqzo';
    const templateID_notify = 'template_epk5hvb';
    const templateID_reply = 'template_7d42ktf';
    const publicKey = 'uz6YLp6waLp9IPmTz'; // Replace with your actual public key

    // 1. Send notification to owner
    emailjs.sendForm(serviceID, templateID_notify, formRef.current, publicKey)
      .then(() => {
          // 2. Send auto-reply to user
          emailjs.sendForm(serviceID, templateID_reply, formRef.current, publicKey)
            .then(() => {
                setIsSending(false);
                setSuccessMsg('Message sent successfully!');
                formRef.current.reset();
                setTimeout(() => setSuccessMsg(''), 5000);
            }, (error) => {
                console.error("Auto-reply failed...", error.text);
                setIsSending(false);
                setSuccessMsg('Message sent successfully!');
                formRef.current.reset();
                setTimeout(() => setSuccessMsg(''), 5000);
            });
      }, (error) => {
          console.error("Notification failed...", error.text);
          setIsSending(false);
          setSuccessMsg('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="relative py-20 px-5 sm:px-10 flex flex-col items-center bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FFC300] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Contact <span className="text-[#FFC300]">Me</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Feel free to reach out
        </p>
      </motion.div>

      {/* Content Wrapper */}
      <div className="z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center">
        
        {/* Form Container (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-3/5"
        >
          <div className="h-full p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              {/* Name Input */}
              <div className="flex flex-col group">
                <label htmlFor="user_name" className="text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#FFC300]">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  id="user_name" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] transition-colors"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col group">
                <label htmlFor="user_email" className="text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#FFC300]">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  id="user_email" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] transition-colors"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col group">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-[#FFC300]">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FFC300] focus:ring-1 focus:ring-[#FFC300] transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSending}
                className={`mt-2 w-full py-4 rounded-xl font-bold text-lg bg-[#FFC300] text-[#0a0a0a] transition-all duration-300 ${isSending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-transparent hover:text-[#FFC300] border-2 border-transparent hover:border-[#FFC300] hover:shadow-[0_0_20px_rgba(255,195,0,0.4)]'}`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {successMsg && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-2"
                >
                  <p className={`font-medium ${successMsg.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
                    {successMsg}
                  </p>
                </motion.div>
              )}

            </form>
          </div>
        </motion.div>

        {/* Contact Info Card (Right) */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="w-full lg:w-2/5 flex flex-col gap-6 sm:gap-8 justify-center"
        >
          {/* Signal Collaboration Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full relative group"
          >
            {/* Ambient Background Glow (Behind Card) */}
            <div className="absolute inset-0 bg-[#FFC300]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

            {/* Glassmorphism Container */}
            <div className="w-full p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-500 transform group-hover:scale-[1.03] group-hover:border-[#FFC300]/40 z-10">
              
              {/* Subtle Dark Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#0a0a0a]/50 to-transparent z-0"></div>

              {/* Text Content */}
              <div className="relative z-10">
                <p className="text-[11px] tracking-[0.3em] text-gray-400 mb-3 font-semibold uppercase group-hover:text-[#FFC300] transition-colors duration-300">
                  Signal
                </p>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-sm">
                  Let's design something precise.
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-medium">
                  I'm open to collaborations, product builds, and long-term engineering support.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <div className="w-full p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="flex flex-col gap-6">
            
            {/* Github */}
            <a href="https://github.com/ayush-6338" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -m-3 rounded-xl hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,195,0,0.1)] border border-transparent hover:border-[#FFC300]/20">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FFC300] group-hover:bg-[#FFC300] group-hover:text-[#0a0a0a] transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 font-medium pb-1">GitHub</p>
                <p className="text-white font-medium group-hover:text-[#FFC300] transition-colors truncate">github.com/ayush-6338</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/07ayushraj/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 -m-3 rounded-xl hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,195,0,0.1)] border border-transparent hover:border-[#FFC300]/20">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FFC300] group-hover:bg-[#FFC300] group-hover:text-[#0a0a0a] transition-colors shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 font-medium pb-1">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-[#FFC300] transition-colors truncate">linkedin.com/in/07ayushraj/</p>
              </div>
            </a>

            {/* Email */}
            <button onClick={(e) => { e.preventDefault(); handleCopy('ayushraj6338@gmail.com', 'Email'); }} className="flex items-center gap-4 group p-3 -m-3 rounded-xl hover:bg-white/5 transition-all duration-300 w-full text-left hover:shadow-[0_0_15px_rgba(255,195,0,0.1)] border border-transparent hover:border-[#FFC300]/20">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FFC300] group-hover:bg-[#FFC300] group-hover:text-[#0a0a0a] transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 font-medium pb-1">Email</p>
                <p className="text-white font-medium group-hover:text-[#FFC300] transition-colors truncate">ayushraj6338@gmail.com</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-[#FFC300]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012 2v2z" /></svg>
              </div>
            </button>

            {/* Phone */}
            <button onClick={(e) => { e.preventDefault(); handleCopy('+91 9934420315', 'Phone'); }} className="flex items-center gap-4 group p-3 -m-3 rounded-xl hover:bg-white/5 transition-all duration-300 w-full text-left hover:shadow-[0_0_15px_rgba(255,195,0,0.1)] border border-transparent hover:border-[#FFC300]/20">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FFC300] group-hover:bg-[#FFC300] group-hover:text-[#0a0a0a] transition-colors shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 font-medium pb-1">Phone</p>
                <p className="text-white font-medium group-hover:text-[#FFC300] transition-colors truncate">+91 9934420315</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-[#FFC300]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012 2v2z" /></svg>
              </div>
            </button>

          </div>
          </div> {/* End of Social Links Card */}
        </motion.div>
      </div>

      {/* Snackbar */}
      <AnimatePresence>
        {snackbarMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-50 px-6 py-3 bg-[#0a0a0a] text-[#FFC300] border border-[#FFC300]/30 rounded-full shadow-[0_5px_20px_rgba(255,195,0,0.2)] font-medium flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            {snackbarMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
