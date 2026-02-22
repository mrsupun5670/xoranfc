import dasunBg from '../assets/profiles/IMG_1873.PNG';
import gaweshBg from '../assets/profiles/gawesh.jpeg';

export const profiles = {
  dasun: {
    // Profile Info
    name: "Dasun Danushka",
    title: "Founder of Bimzo PVT LTD",
    username: "@dassa_technic",
    bio: "Tech enthusiast creating engaging content about technology and innovation. Sharing knowledge and helping people solve technical challenges through creative storytelling.",
    
    // Profile Image
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DasunDanushka&backgroundColor=b6e3f4",
    backgroundImage: dasunBg,
    
    // Stats
    stats: {
      followers: "12.5K",
      following: "342",
      creations: "156"
    },
    
    // Contact
    email: "dassatechnic@gmail.com",
    phone: "076 286 5688",
    phone2: "076 003 4519",
    location: "Sri Lanka",
    
    // Social Media
    social: {
      facebook: "https://www.facebook.com/share/16b8uiETKH/",
      whatsapp: "https://wa.me/94760034519",
      youtube: "https://youtube.com/@dassa_technic?si=irTmzgUfvROCFlHv",
      tiktok: "https://www.tiktok.com/@dassa_technic?_r=1&_t=ZS-92dCsrFDraK",
      instagram: "",
    },
    
    // Gallery Images - Replace with your actual work
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    ],
    
    // Testimonials/Comments
    testimonials: [
      {
        name: "John Silva",
        role: "Client",
        comment: "Excellent technical support! Very knowledgeable and helpful.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
      },
      {
        name: "Sarah Fernando",
        role: "Subscriber",
        comment: "Great content creator. Always informative and engaging!",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
      }
    ],
    
    // Education
    education: [
      {
        degree: "BSc in Information Technology",
        institution: "SLIIT (Sri Lanka Institute of Information Technology)",
        year: "2020 - 2024"
      },
      {
        degree: "Diploma in Computer Hardware & Networking",
        institution: "Esoft Metro Campus",
        year: "2018"
      }
    ],

    // Experience
    experience: [
      {
        position: "Founder & Content Creator",
        company: "Dassa Technic",
        period: "2020 - Present",
        description: "Leading a tech-focused content creation platform with 12k+ followers. Specializing in hardware reviews, technical troubleshooting, and educational tech content."
      },
      {
        position: "IT Support Specialist",
        company: "Freelance",
        period: "2019 - Present",
        description: "Providing comprehensive hardware and software support, network configuration, and system optimization for individual and business clients."
      }
    ],

    // Website
    website: "https://bimzo.lk",

    // Skills
    skills: [
      "Technical Support",
      "Content Creation",
      "Video Production",
      "Social Media Marketing",
      "Hardware Troubleshooting",
      "Network Administration"
    ]
  },
  
  supun: {
    name: "Supun Gunasinghe",
    title: "Co-founder & Director at ZipZipy PVT LTD",
    username: "@supun_io", // Placeholder handle
    bio: "Software Engineer passionate about building scalable solutions.",
    website: "https://zipzipy.com", // Assumed based on company name
    
    // Using placeholders - replace these!
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Supun", 
    backgroundImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80", 
    
    stats: {
      followers: "1.2K",
      following: "50",
      creations: "20"
    },

    email: "supun@zipzipy.com", // Placeholder
    phone: "+94 7X XXX XXXX", // Placeholder
    location: "Sri Lanka",
    
    social: {
      facebook: "",
      whatsapp: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      linkedin: "",
    },
    
    skills: [
      "Software Engineering",
      "Full Stack Development",
      "Cloud Architecture",
      "React",
      "Node.js"
    ],
    
    education: [],
    experience: [],
    gallery: []
  },
  
  gawesh: {
    name: "Gawesh Shashintha",
    title: "Founder of Gold Dragon",
    username: "@mr.gaiyaaa",
    bio: "Trading strategist and digital entrepreneur creating impactful content around financial markets, smart money concepts, and wealth-building strategies. I share high-quality trading signals, market insights, and practical knowledge to help individuals grow with discipline and confidence. Through creative storytelling and powerful social media content, I aim to educate, inspire, and build a strong community focused on financial freedom and smart investing.",
    website: "https://youtube.com/@mr.gaiyaaa?si=0cFVmlPsvTyS-Vch", 
    
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gawesh&backgroundColor=e30b0b",
    backgroundImage: gaweshBg, 
    
    theme: "dragon",

    stats: {
      followers: "50K+",
      following: "120",
      creations: "300+"
    },

    email: "gawesh30shashintha@gmail.com",
    phone: "+94 72 293 5753",
    location: "Sri Lanka",
    
    social: {
      facebook: "https://www.facebook.com/share/17EVx5LhHb/?mibextid=wwXIfr",
      whatsapp: "https://wa.me/94722935753", 
      youtube: "https://youtube.com/@gaiyafx?si=YYAegS9zHILSxjRs",
      tiktok: "https://www.tiktok.com/@gaiya_forex_0?_r=1&_t=ZS-943TLPzSHkS",
      instagram: "https://www.instagram.com/gawess_?igsh=MTZ4bmNybjU3ZWkyZg==",
      linkedin: "",
    },
    
    skills: [
      "Financial Markets",
      "Smart Money Concepts",
      "Trading Signals",
      "Wealth-building",
      "Content Creation"
    ],
    
    education: [
      {
        degree: "Bachelor (Hons) Technology Management",
        institution: "NSBM Green University",
        year: "2022 - Present"
      }
    ],
    experience: [],
    gallery: []
  },
  
  /* 
  // ==========================================
  // TYPE NEW PROFILE DATA BELOW
  // NAMING CONVENTION:
  // 1. Use "firstname" (e.g., dasun)
  // 2. If taken, use "firstname_surname" (e.g., dasun_bandara)
  // ==========================================
  
  username_here: {
    name: "Client Name",
    title: "Designation / Job Title",
    username: "@social_handle",
    bio: "Short bio or description goes here.",
    website: "https://website.com",
    
    // Images (Put images in src/assets/profiles folder)
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ClientName",
    backgroundImage: "https://images.unsplash.com/photo-1234...", // OR import from assets
    
    social: {
      facebook: "",
      whatsapp: "",
      youtube: "",
      tiktok: "",
      instagram: "",
      linkedin: "",
    },
    
    // ... copy other sections as needed
  },
  */
};
