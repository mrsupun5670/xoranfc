import { useState } from 'react';
import { 
  FaFacebook, 
  FaInstagram,
  FaTiktok, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaChevronDown
} from 'react-icons/fa';
import { profileData } from '../data/profileData';

const ProfileCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube,
    tiktok: FaTiktok,
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fixed Background Image - Always Visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ 
          backgroundImage: `url(${profileData.backgroundImage})`,
          filter: isExpanded ? 'blur(8px) brightness(0.4)' : 'blur(0px) brightness(0.6)',
        }}
      />

      {/* Main Content - Bottom Half */}
      <div className={`absolute inset-0 flex flex-col justify-end transition-all duration-700 ${
        isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        {/* Name & Bio Glass Card */}
        <div className="mx-4 mb-6">
          <div className="glass-card-main p-6 text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {profileData.shortBio}
            </p>
          </div>
        </div>

        {/* Social Icons at Bottom */}
        <div className="glass-bottom px-6 py-5 flex justify-center items-center gap-5">
          {Object.entries(profileData.social).map(([platform, url]) => {
            const Icon = socialIcons[platform];
            if (!url || !Icon) return null;
            
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-bw"
                aria-label={platform}
              >
                <Icon className="text-xl" />
              </a>
            );
          })}
          
          {/* Swipe Up Indicator */}
          <button
            onClick={toggleExpand}
            className="ml-auto social-icon-bw"
            aria-label="Expand details"
          >
            <FaChevronDown className={`text-lg transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`} />
          </button>
        </div>
      </div>

      {/* Expanded Details Panel - Slides Up */}
      <div 
        className={`absolute inset-0 transition-transform duration-700 ease-out ${
          isExpanded ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="h-full glass-panel-full overflow-y-auto overflow-x-hidden">
          {/* Close Button */}
          <button
            onClick={toggleExpand}
            className="sticky top-4 left-full -ml-14 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/30 
                     flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <FaChevronDown className="text-lg" />
          </button>

          <div className="px-6 py-8 space-y-6">
            {/* Header */}
            <div className="text-center space-y-3 pb-4 border-b border-white/10">
              <h2 className="text-3xl font-bold text-white">{profileData.name}</h2>
              <p className="text-lg text-gray-300 font-light">{profileData.title}</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
              <div className="space-y-2 text-sm">
                {profileData.contact.email && (
                  <a href={`mailto:${profileData.contact.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaEnvelope className="text-white/60" />
                    <span>{profileData.contact.email}</span>
                  </a>
                )}
                {profileData.contact.phone && (
                  <a href={`tel:${profileData.contact.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaPhone className="text-white/60" />
                    <span>{profileData.contact.phone}</span>
                  </a>
                )}
                {profileData.contact.phone2 && (
                  <a href={`tel:${profileData.contact.phone2}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <FaPhone className="text-white/60" />
                    <span>{profileData.contact.phone2}</span>
                  </a>
                )}
                {profileData.contact.location && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaMapMarkerAlt className="text-white/60" />
                    <span>{profileData.contact.location}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(profileData.social).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  if (!url || !Icon) return null;
                  
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 
                               text-gray-300 text-sm hover:bg-white/20 transition-all"
                    >
                      <Icon />
                      <span className="capitalize">{platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* About */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{profileData.extendedBio}</p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>
              <div className="space-y-4">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="detail-item">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                      <span className="text-xs text-gray-500">{edu.year}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-1">{edu.field}</p>
                    <p className="text-gray-400 text-xs">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <FaBriefcase /> Experience
              </h3>
              <div className="space-y-4">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="detail-item">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-semibold text-sm">{exp.position}</h4>
                      <span className="text-xs text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-xs mb-2">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs text-gray-400 flex gap-2">
                            <span className="text-white/40">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {profileData.certifications && profileData.certifications.length > 0 && (
              <div className="space-y-3 pb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <FaAward /> Certifications
                </h3>
                <ul className="space-y-2">
                  {profileData.certifications.map((cert, index) => (
                    <li key={index} className="text-gray-300 text-xs flex gap-2">
                      <span className="text-white/40">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
