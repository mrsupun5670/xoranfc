import { useState, useRef } from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok,
  FaEnvelope, 
  FaPhone,
  FaWhatsapp,
  FaChevronUp,
  FaChevronDown,
  FaGraduationCap,
  FaCode
} from 'react-icons/fa';
import { profileData } from '../data/profileData';
import bgImage from '../assets/IMG_1873.PNG';

const ProfileCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef(null);
  
  // Touch Handling State
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && !isExpanded) {
      setIsExpanded(true);
    }
    
    if (isDownSwipe && isExpanded) {
      if (scrollRef.current && scrollRef.current.scrollTop > 0) {
        return;
      }
      setIsExpanded(false); 
    }
  };

  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
    youtube: FaYoutube,
    tiktok: FaTiktok,
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-[#0F172A] text-white font-sans transition-all duration-1000 ${isExpanded ? 'bg-navy-900' : 'bg-black'}`}>
      
      {/* 
        1. BACKGROUND IMAGE 
      */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          filter: isExpanded 
            ? 'grayscale(0%) brightness(1.0) contrast(1.1)' 
            : 'grayscale(100%) brightness(0.7) contrast(1.2)',
          transform: isExpanded ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isExpanded ? 'bg-[#0F172A]/40' : 'bg-black/20'}`} />

      {/* 
        2. EXPANDABLE GLASS PANEL 
        - Swipe handlers attached here
      */}
      <div 
        className={`
          absolute left-4 right-4 bottom-0 mx-auto
          md:max-w-2xl md:right-0 md:left-0 /* Desktop: Centered & wider */
          transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
          glass-panel-navy shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
          flex flex-col
          ${isExpanded ? 'h-[97vh] rounded-t-[40px]' : 'h-[50vh] md:h-[40vh] rounded-t-[30px]'}
        `}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        
        {/* DRAG HANDLE AREA - Click to Toggle or Swipe */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex justify-center pt-3 pb-1 cursor-pointer active:scale-95 transition-transform z-50"
        >
           <div className="w-16 h-1.5 bg-white/30 rounded-full shadow-sm" />
        </div>

        {/* HEADER AREA - Always Visible */}
        <div className="px-8 pt-6 pb-2 flex-shrink-0 relative z-20 group text-left">
          <div className="flex flex-col gap-2">
             {/* Name & Title */}
             <div className="mb-2">
               <h1 className="text-5xl md:text-6xl font-[800] text-white leading-[0.9] tracking-tight font-outfit">
                 <span className="block">Dasun</span>
                 <span className="block">Danushka</span>
               </h1>
               <p className="text-blue-200 font-bold uppercase tracking-widest text-sm mt-3">
                 Entrepreneur
               </p>
             </div>

             {/* Social Icons - Moved to Top & Monochrome */}
             <div className="flex items-center gap-4 mt-1">
                {/* Facebook */}
                <a href={profileData.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                  <FaFacebook className="text-2xl text-white/90" />
                </a>
                {/* WhatsApp */}
                <a href={profileData.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-2xl text-white/90" />
                </a>
                {/* YouTube */}
                <a href={profileData.social.youtube} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                  <FaYoutube className="text-2xl text-white/90" />
                </a>
                {/* TikTok */}
                <a href={profileData.social.tiktok} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                  <FaTiktok className="text-2xl text-white/90" />
                </a>
                {/* Email */}
                <a href={`mailto:${profileData.email}`} className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                  <FaEnvelope className="text-2xl text-white/90" />
                </a>
             </div>
             
             {/* Swipe Hint */}

          </div>
        </div>

        {/* 
          HIDDEN CONTENT - SCROLLABLE 
          Only visible when expanded
        */}
        <div className={`
           flex-grow px-8 pb-8 overflow-y-auto no-scrollbar 
           transition-all duration-500 delay-100
           ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        ref={scrollRef}
      >
           
           <div className="space-y-6 max-w-2xl mx-auto pt-4">
              
              {/* COMPACT BIO */}
              <p className="text-base md:text-lg text-blue-50/80 leading-relaxed font-light border-l-2 border-blue-500/30 pl-4">
                 {profileData.bio}
              </p>

              {/* COMPACT EDUCATION & TECH */}
              <div className="space-y-4">
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400/70">Education & Tech</h3>

                 <div className="grid gap-3">
                   {profileData.education && profileData.education.map((edu, idx) => (
                     <div key={idx} className="bg-navy-800/40 p-3 rounded-lg border border-white/5 flex justify-between items-center hover:bg-navy-800/60 transition-colors">
                        <div>
                           <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                           <p className="text-blue-200/60 text-xs">{edu.institution}</p>
                        </div>
                        <span className="text-[10px] font-mono bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded">
                          {edu.year}
                        </span>
                     </div>
                   ))}
                 </div>
                 
                 {/* Tech Stack Pills - Compact */}
                 <div className="flex flex-wrap gap-1.5">
                    {["Business Strategy", "Content Creation", "Social Media", "Tech Innovation"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-white/5 text-blue-100/80 text-[10px] uppercase font-bold tracking-wide rounded-md border border-white/5">
                        {skill}
                      </span>
                    ))}
                 </div>
              </div>

           </div>
        </div>

      </div>

    </div>
  );
};

export default ProfileCard;
