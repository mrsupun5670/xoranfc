import { Link } from 'react-router-dom';
import { profiles } from '../data/profileData';
import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import { FaQrcode, FaWifi, FaMobileAlt, FaLayerGroup, FaWhatsapp, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ThreeDCard = lazy(() => import('./ThreeDCard'));

const Home = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  useEffect(() => {
    document.title = "Xoranfc - Home";
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Live EmailJS Credentials
    const serviceId = 'service_tsajweq'; 
    const templateId = 'template_y0gxcyo';
    const publicKey = 'iv4qQnv0Eb-mejZyE';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error("EmailJS Error:", error.text);
      });
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden font-sans">
        
        {/* HEADER / LOGO BAR */}
        <header className="absolute top-0 left-0 w-full p-6 md:p-10 z-50 flex items-center">
            <img src="/x-logo.png" alt="X Logo" className="w-10 h-10 mr-3 object-contain drop-shadow-lg" />
            <h1 className="text-2xl font-black tracking-widest bg-gradient-to-br from-white via-[#cbd5e1] to-[#94a3b8] text-transparent bg-clip-text drop-shadow-md">
                ORANFC
            </h1>
        </header>

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-20 overflow-hidden pt-32 md:pt-20">
            
            {/* Background Gradients (Matching Premium Bank Card Theme) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-[#7E1025]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] min-h-[300px] bg-[#0E1A40]/40 rounded-full blur-[120px]" />

            {/* LEFT CONTENT */}
            <div className="md:w-1/2 z-10 text-center md:text-left pt-10 md:pt-0">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-[#cbd5e1]/10 border border-[#cbd5e1]/20 mb-6 backdrop-blur-md">
                    <span className="text-[#cbd5e1] text-xs font-bold tracking-[0.2em] uppercase">The Future of Networking</span>
                 </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-[800] font-outfit tracking-tighter leading-[0.9] mb-6">
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Premium</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#cbd5e1] to-[#64748b] bg-clip-text text-transparent">Identity</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300/80 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                    Elevate your professional presence with our exclusive NFC & QR PVC business cards. 
                    Share your story with a single tap.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#7E1025] to-[#5a0b1a] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(126,16,37,0.4)] border border-[#7E1025]/50 outline-none">
                        Get Your Card
                    </button>
                    <Link to="/demo" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm text-center">
                        View Demo Profile
                    </Link>
                </div>
            </div>

            {/* RIGHT CONTENT - 3D CARD */}
            <div className="md:w-1/2 w-full h-[50vh] md:h-screen relative z-10 flex items-center justify-center">
                <Suspense fallback={<div className="animate-pulse w-64 h-64 bg-slate-800 rounded-2xl shadow-2xl"></div>}>
                    <ThreeDCard />
                </Suspense>
            </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 px-6 md:px-20 bg-black/20 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Premium <span className="text-[#cbd5e1]">Technology</span></h2>
                    <p className="text-white/50 max-w-2xl mx-auto">Crafted with precision, embedded with innovation. Our cards are designed to leave a lasting impression.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard 
                        icon={<FaWifi className="text-3xl text-[#cbd5e1]" />}
                        title="NFC Embedded"
                        desc="Instant sharing with a simple tap on any compatible smartphone."
                    />
                    <FeatureCard 
                        icon={<FaQrcode className="text-3xl text-white" />}
                        title="Dynamic QR"
                        desc="Update your details anytime without printing a new card."
                    />
                    <FeatureCard 
                        icon={<FaLayerGroup className="text-3xl text-[#7E1025]" />}
                        title="Premium PVC"
                        desc="Durable, waterproof, and sleek matte finish materials."
                    />
                     <FeatureCard 
                        icon={<FaMobileAlt className="text-3xl text-blue-400" />}
                        title="Mobile Optimized"
                        desc="Your profile looks stunning on every device screen."
                    />
                </div>
            </div>
        </section>

        {/* CARD DIMENSIONS DIAGRAM SECTION */}
        <section className="py-24 px-6 md:px-20 relative z-10 bg-[#0a1120]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Perfectly <span className="text-[#cbd5e1]">Sized</span></h2>
                    <p className="text-slate-300/80 text-lg leading-relaxed mb-6">
                        Our premium NFC cards are crafted to the exact dimensions of a standard high-end credit card (CR80 standard). 
                        Designed to fit perfectly in any wallet, cardholder, or pocket while maintaining maximum durability.
                    </p>
                    <ul className="text-slate-400 space-y-3 font-mono text-sm max-w-sm mx-auto md:mx-0">
                        <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Width:</span> <span className="text-white">85.60 mm (3.37 in)</span>
                        </li>
                        <li className="flex justify-between border-b border-white/10 pb-2">
                            <span>Height:</span> <span className="text-white">53.98 mm (2.125 in)</span>
                        </li>
                        <li className="flex justify-between pb-2">
                            <span>Edges:</span> <span className="text-white">Rounded (3.18 mm radius)</span>
                        </li>
                    </ul>
                </div>

                {/* Diagram */}
                <div className="md:w-1/2 flex justify-center w-full px-4 md:px-0 mt-10 md:mt-0">
                    <div className="relative w-full max-w-[340px]">
                        {/* The Diagram Box */}
                        <div className="w-full aspect-[1.58] border-2 border-dashed border-[#64748b]/50 rounded-2xl relative flex items-center justify-center bg-[#0F172A]/50 backdrop-blur-sm">
                            <span className="text-[#64748b]/20 text-6xl md:text-8xl font-black">CR80</span>
                            
                            {/* Width Label (Top) */}
                            <div className="absolute -top-10 left-0 w-full flex items-center justify-between text-[#cbd5e1] font-mono text-xs md:text-sm">
                                <span className="w-2 h-2 border-l-2 border-t-2 border-[#cbd5e1]"></span>
                                <div className="border-t border-[#cbd5e1] w-full mx-2 flex-grow relative">
                                    <span className="absolute -top-5 md:-top-6 left-1/2 transform -translate-x-1/2 bg-[#0a1120] px-2 whitespace-nowrap">85.60 mm</span>
                                </div>
                                <span className="w-2 h-2 border-r-2 border-t-2 border-[#cbd5e1]"></span>
                            </div>

                            {/* Height Label (Right) */}
                            <div className="absolute -right-8 md:-right-12 top-0 h-full flex flex-col items-center justify-between text-[#cbd5e1] font-mono text-xs md:text-sm">
                                <span className="w-2 h-2 border-t-2 border-r-2 border-[#cbd5e1]"></span>
                                <div className="border-r border-[#cbd5e1] h-full my-2 flex-grow relative">
                                     <span className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 whitespace-nowrap bg-[#0a1120] py-1 md:py-2">53.98 mm</span>
                                </div>
                                <span className="w-2 h-2 border-b-2 border-r-2 border-[#cbd5e1]"></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* CONTACT / CTA SECTION */}
        <section className="py-24 px-6 md:px-20 relative z-10">
             <div className="absolute inset-0 bg-gradient-to-t from-[#7E1025]/10 to-transparent"></div>
             <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center lg:items-start">
                
                {/* Left Side: Text and Direct Contacts */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit mb-6">Ready to Step into the <span className="text-[#cbd5e1]">Future?</span></h2>
                    <p className="text-lg text-slate-300 md:text-xl mb-10 leading-relaxed">
                        Upgrade your networking game. Request your customized, premium Xoranfc business card today and leave a lasting impression on every client.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a 
                            href="mailto:sales@xoranfc.com" 
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 hover:border-[#cbd5e1] hover:bg-white/10 rounded-full text-lg transition-all"
                        >
                            <FaEnvelope className="text-[#cbd5e1]" />
                            <span>sales@xoranfc.com</span>
                        </a>
                        <a 
                            href="https://wa.me/94774165822" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 rounded-full text-lg transition-all text-white"
                        >
                            <FaWhatsapp className="text-[#25D366]" />
                            <span>WhatsApp Us</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: The Contact Form */}
                <div className="lg:w-1/2 w-full max-w-lg">
                    <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7E1025] via-[#cbd5e1] to-[#0E1A40]"></div>
                        
                        <h3 className="text-2xl font-bold mb-6 font-outfit">Request bringing your card to life</h3>
                        
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="flex-1">
                                    <label className="block text-sm text-slate-400 mb-2 font-medium">Your Name *</label>
                                    <input required type="text" name="user_name" placeholder="John Doe" className="w-full bg-[#0a1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#cbd5e1] focus:ring-1 focus:ring-[#cbd5e1] transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm text-slate-400 mb-2 font-medium">Business Name</label>
                                    <input type="text" name="business_name" placeholder="Acme Corp" className="w-full bg-[#0a1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#cbd5e1] focus:ring-1 focus:ring-[#cbd5e1] transition-colors" />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm text-slate-400 mb-2 font-medium">Email Address *</label>
                                <input required type="email" name="user_email" placeholder="john@example.com" className="w-full bg-[#0a1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#cbd5e1] focus:ring-1 focus:ring-[#cbd5e1] transition-colors" />
                            </div>

                            <div>
                                <label className="block text-sm text-slate-400 mb-2 font-medium">Contact Number *</label>
                                <input required type="tel" name="contact_number" placeholder="+1 (555) 000-0000" className="w-full bg-[#0a1120] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#cbd5e1] focus:ring-1 focus:ring-[#cbd5e1] transition-colors" />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={`mt-2 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#7E1025] to-[#5a0b1a] hover:scale-[1.02] shadow-[0_0_20px_rgba(126,16,37,0.4)] border border-[#7E1025]/50'}`}
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <FaPaperPlane />
                                        <span>Send Request</span>
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400 animate-fade-in">
                                    <FaCheckCircle className="text-xl flex-shrink-0" />
                                    <p className="text-sm">Thank you! Your request has been sent successfully. We will contact you soon.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm animate-fade-in">
                                    Looks like something went wrong. Please try emailing us directly or reach out on WhatsApp.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
             </div>
        </section>

        {/* PROFILES LIST (Hidden by default or discreet) - Keeping for navigation for now */}
        <section className="py-12 border-t border-white/5 relative z-10">
             <div className="max-w-4xl mx-auto px-6 text-center">
                 <p className="text-sm font-mono text-white/30 mb-6 uppercase tracking-widest">Demo Profiles</p>
                 <div className="flex flex-wrap justify-center gap-4">
                    {Object.keys(profiles).map((username) => (
                        <Link 
                            key={username}
                            to={`/${username}`}
                            className="px-4 py-2 bg-white/5 rounded-lg text-sm text-blue-200 hover:bg-white/10 transition-colors"
                        >
                            @{username}
                        </Link>
                    ))}
                 </div>
             </div>
        </section>
        
        {/* FOOTER */}
        <footer className="py-8 text-center text-white/20 text-xs relative z-10 bg-black">
            © {new Date().getFullYear()} Xoranfc. All rights reserved.
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a 
            href="https://wa.me/94774165822" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all drop-shadow-[0_0_15px_rgba(37,211,102,0.4)] flex items-center justify-center group"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
            
            {/* Tooltip prompt (optional touch) */}
            <span className="absolute right-full mr-4 bg-[#1e293b] text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md pointer-events-none font-medium">
                Chat with Sales
                <span className="absolute top-1/2 -right-1 w-2 h-2 bg-[#1e293b] transform -translate-y-1/2 rotate-45"></span>
            </span>
        </a>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default Home;
