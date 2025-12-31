import { Link } from 'react-router-dom';
import { profiles } from '../data/profileData';
import ThreeDCard from './ThreeDCard';
import { FaQrcode, FaWifi, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden font-sans">
        
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-20 overflow-hidden">
            
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-purple-600/20 rounded-full blur-[100px]" />

            {/* LEFT CONTENT */}
            <div className="md:w-1/2 z-10 text-center md:text-left pt-10 md:pt-0">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
                    <span className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase">The Future of Networking</span>
                 </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-[800] font-outfit tracking-tighter leading-[0.9] mb-6">
                    <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">Digital</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Identity</span>
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100/60 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                    Elevate your professional presence with our premium NFC & QR PVC business cards. 
                    Share your story with a single tap.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get Your Card
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                        View Demo Profile
                    </button>
                </div>
            </div>

            {/* RIGHT CONTENT - 3D CARD */}
            <div className="md:w-1/2 w-full h-[50vh] md:h-screen relative z-10 flex items-center justify-center">
                <ThreeDCard />
            </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 px-6 md:px-20 bg-black/20 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Premium <span className="text-blue-400">Technology</span></h2>
                    <p className="text-white/50 max-w-2xl mx-auto">Crafted with precision, embedded with innovation. Our cards are designed to leave a lasting impression.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard 
                        icon={<FaWifi className="text-3xl text-blue-400" />}
                        title="NFC Embedded"
                        desc="Instant sharing with a simple tap on any compatible smartphone."
                    />
                    <FeatureCard 
                        icon={<FaQrcode className="text-3xl text-purple-400" />}
                        title="Dynamic QR"
                        desc="Update your details anytime without printing a new card."
                    />
                    <FeatureCard 
                        icon={<FaLayerGroup className="text-3xl text-cyan-400" />}
                        title="Premium PVC"
                        desc="Durable, waterproof, and sleek matte finish materials."
                    />
                     <FeatureCard 
                        icon={<FaMobileAlt className="text-3xl text-pink-400" />}
                        title="Mobile Optimized"
                        desc="Your profile looks stunning on every device screen."
                    />
                </div>
            </div>
        </section>

        {/* PROFILES LIST (Hidden by default or discreet) - Keeping for navigation for now */}
        <section className="py-12 border-t border-white/5">
             <div className="max-w-4xl mx-auto px-6 text-center">
                 <p className="text-sm font-mono text-white/30 mb-6 uppercase tracking-widest">Recent Profiles</p>
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
        <footer className="py-8 text-center text-white/20 text-xs">
            © {new Date().getFullYear()} Digital Identity. All rights reserved.
        </footer>
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
