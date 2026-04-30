import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  FaCode,
  FaGlobe
} from 'react-icons/fa';
import { profiles } from '../data/profileData';

const ProfileCard = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef(null);
  
  const profileData = profiles[username?.toLowerCase()];

  const themeStyles = {
    navy: {
      bgMain: 'bg-[#0F172A]',
      bgExpanded: 'bg-navy-900',
      bgCollapsed: 'bg-black',
      overlayExpanded: 'bg-[#0F172A]/40',
      glassPanel: 'glass-panel-navy',
      titleSub: 'text-blue-200',
      iconColor: 'text-white/90',
      bioText: 'text-blue-50/80',
      bioBorder: 'border-blue-500/30',
      sectionTitle: 'text-blue-400/70',
      cardBg: 'bg-navy-800/40',
      cardHover: 'hover:bg-navy-800/60',
      cardBorder: 'border-white/5',
      cardSub: 'text-blue-200/60',
      pillBg: 'bg-blue-500/10',
      pillText: 'text-blue-300',
      skillBg: 'bg-white/5',
      skillText: 'text-blue-100/80'
    },
    gold: {
      bgMain: 'bg-[#1A1814]',
      bgExpanded: 'bg-zinc-900',
      bgCollapsed: 'bg-black',
      overlayExpanded: 'bg-[#1A1814]/60',
      glassPanel: 'glass-panel-gold',
      titleSub: 'text-yellow-500',
      iconColor: 'text-yellow-100',
      bioText: 'text-yellow-50/90',
      bioBorder: 'border-yellow-500/30',
      sectionTitle: 'text-yellow-600/80',
      cardBg: 'bg-zinc-800/50',
      cardHover: 'hover:bg-zinc-800/70',
      cardBorder: 'border-yellow-500/20',
      cardSub: 'text-yellow-200/60',
      pillBg: 'bg-yellow-500/20',
      pillText: 'text-yellow-300',
      skillBg: 'bg-yellow-500/10',
      skillText: 'text-yellow-200/90'
    },
    magenta: {
      bgMain: 'bg-[#4a0928]',
      bgExpanded: 'bg-[#2d0518]',
      bgCollapsed: 'bg-[#1a030e]',
      overlayExpanded: 'bg-[#2d0518]/60',
      glassPanel: 'glass-panel-magenta',
      titleSub: 'text-pink-400',
      iconColor: 'text-pink-100',
      bioText: 'text-pink-50/90',
      bioBorder: 'border-pink-500/30',
      sectionTitle: 'text-pink-500/80',
      cardBg: 'bg-[#3b0720]/50',
      cardHover: 'hover:bg-[#3b0720]/70',
      cardBorder: 'border-pink-500/20',
      cardSub: 'text-pink-200/60',
      pillBg: 'bg-pink-500/20',
      pillText: 'text-pink-300',
      skillBg: 'bg-pink-500/10',
      skillText: 'text-pink-200/90'
    },
    dragon: {
      bgMain: 'bg-[#0a0a0a]',
      bgExpanded: 'bg-[#111111]',
      bgCollapsed: 'bg-black',
      overlayExpanded: 'bg-[#111111]/80',
      glassPanel: 'glass-panel-dragon',
      titleSub: 'text-orange-500',
      iconColor: 'text-orange-100/90',
      bioText: 'text-orange-50/90',
      bioBorder: 'border-orange-600/40',
      sectionTitle: 'text-orange-400/80',
      cardBg: 'bg-orange-900/10',
      cardHover: 'hover:bg-orange-900/30',
      cardBorder: 'border-orange-600/20',
      cardSub: 'text-orange-200/60',
      pillBg: 'bg-orange-700/20',
      pillText: 'text-orange-300',
      skillBg: 'bg-orange-600/10',
      skillText: 'text-orange-200/90'
    },
    purple: {
      bgMain: 'bg-[#1e102b]',
      bgExpanded: 'bg-[#150a1e]',
      bgCollapsed: 'bg-black',
      overlayExpanded: 'bg-[#150a1e]/70',
      glassPanel: 'glass-panel-purple',
      titleSub: 'text-purple-400',
      iconColor: 'text-purple-100',
      bioText: 'text-purple-50/90',
      bioBorder: 'border-purple-500/40',
      sectionTitle: 'text-purple-400/80',
      cardBg: 'bg-purple-900/20',
      cardHover: 'hover:bg-purple-900/40',
      cardBorder: 'border-purple-600/30',
      cardSub: 'text-purple-200/70',
      pillBg: 'bg-purple-600/30',
      pillText: 'text-purple-200',
      skillBg: 'bg-indigo-600/20',
      skillText: 'text-indigo-200/90'
    }
  };

  const currentTheme = themeStyles[profileData?.theme] || themeStyles.navy;

  useEffect(() => {
    if (!profileData) {
      // Handle user not found - could redirect to default or show 404
       navigate('/', { replace: true });
    } else {
      const firstName = profileData.name.split(' ')[0];
      document.title = `Xoranfc - ${firstName}`;
    }
  }, [username, profileData, navigate]);

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

  if (!profileData) return null; // Or a loading spinner

  return (
    <div className={`relative w-full h-screen overflow-hidden ${currentTheme.bgMain} text-white font-sans transition-all duration-1000 ${isExpanded ? currentTheme.bgExpanded : currentTheme.bgCollapsed}`}>
      
      {/* 
        1. BACKGROUND IMAGE 
      */}
      <img 
        src={profileData.backgroundImage}
        alt="Profile Background"
        fetchPriority="high"
        className={`absolute inset-0 w-full h-full object-cover ${profileData.imagePosition || 'object-top'} transition-all duration-1000 ease-in-out will-change-[filter,transform]`}
        style={{ 
          filter: isExpanded 
            ? 'grayscale(0%) brightness(1.0) contrast(1.1)' 
            : 'grayscale(100%) brightness(0.7) contrast(1.2)',
          transform: isExpanded ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isExpanded ? currentTheme.overlayExpanded : 'bg-black/20'}`} />

      {/* 
        2. EXPANDABLE GLASS PANEL 
        - Swipe handlers attached here
      */}
      <div 
        className={`
          absolute left-4 right-4 bottom-0 mx-auto
          md:max-w-2xl md:right-0 md:left-0 /* Desktop: Centered & wider */
          h-[96dvh] /* Fixed height for performance, dvh handles mobile bars */
          transition-[transform,border-radius] duration-700 cubic-bezier(0.4, 0, 0.2, 1)
          ${currentTheme.glassPanel} shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
          flex flex-col will-change-transform
          ${isExpanded ? 'translate-y-0 rounded-t-[40px]' : 'translate-y-[50vh] md:translate-y-[60vh] rounded-t-[30px]'}
        `}
      >
        
        {/* SWIPE ZONE (Handle + Header) - Only this area triggers swipe actions now for better UX */}
        <div 
          className="flex-shrink-0 w-full"
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
                 {profileData.name.split(' ').map((part, i) => (
                    <span key={i} className="block">{part}</span>
                 ))}
               </h1>
               <p className={`${currentTheme.titleSub} font-bold uppercase tracking-widest text-sm mt-3`}>
                 {profileData.title}
               </p>
             </div>

             {/* Social Icons - Moved to Top & Monochrome */}
             <div className="flex flex-wrap items-center justify-center gap-3 mt-1 max-w-full">
                {Object.entries(profileData.social).map(([platform, url]) => {
                  if (!url) return null;
                  const Icon = socialIcons[platform];
                  if (!Icon) return null;
                   
                  return (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                      <Icon className={`text-2xl ${currentTheme.iconColor}`} />
                    </a>
                  )
                })}
                {/* Email */}
                {profileData.email && (
                  <a href={`mailto:${profileData.email}`} className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                    <FaEnvelope className={`text-2xl ${currentTheme.iconColor}`} />
                  </a>
                )}

                {/* Website */}
                {profileData.website && (
                  <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:scale-110 transition-transform">
                    <FaGlobe className={`text-2xl ${currentTheme.iconColor}`} />
                  </a>
                )}
             </div>
             
             {/* Swipe Hint */}

          </div>
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
              <p className={`text-base md:text-lg ${currentTheme.bioText} leading-relaxed font-light border-l-2 ${currentTheme.bioBorder} pl-4`}>
                 {profileData.bio}
              </p>

              {/* COMPACT EDUCATION & TECH */}
              <div className="space-y-4">
                 <h3 className={`text-xs font-bold uppercase tracking-[0.2em] ${currentTheme.sectionTitle}`}>Education & Tech</h3>

                 <div className="grid gap-3">
                   {profileData.education && profileData.education.map((edu, idx) => (
                     <div key={idx} className={`${currentTheme.cardBg} p-3 rounded-lg border ${currentTheme.cardBorder} flex justify-between items-center ${currentTheme.cardHover} transition-colors`}>
                        <div>
                           <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                           <p className={`${currentTheme.cardSub} text-xs`}>{edu.institution}</p>
                        </div>
                        <span className={`text-[10px] font-mono ${currentTheme.pillBg} ${currentTheme.pillText} px-2 py-0.5 rounded`}>
                          {edu.year}
                        </span>
                     </div>
                   ))}
                 </div>
                 
                 {/* Tech Stack Pills - Compact */}
                 <div className="flex flex-wrap gap-1.5">
                    {/* Assuming skills are still a simple array, or update if checking against profileData.skills */}
                    {profileData.skills && profileData.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className={`px-2.5 py-1 ${currentTheme.skillBg} ${currentTheme.skillText} text-[10px] uppercase font-bold tracking-wide rounded-md border ${currentTheme.cardBorder}`}>
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
