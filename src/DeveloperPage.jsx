export default function DeveloperPage() {
    const developerInfo = {
        name: "Hanzalah",
        bio: "Hey!\n\nI created this PYQ Repository to help students easily access previous year question papers. With a focus on education and technology, just trying to make academic resources more accessible.\nWill be adding more features soon!\n\nFeel free to connect with me through the links below.",
        links: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/hanzalah-m/",
                icon: "👨‍💼"
            },
            {
                name: "Email",
                url: "mailto:hannzalaah@gmail.com",
                icon: "📧"
            }
        ],
        website: {
            name: "Website",
            url: "https://hanzalah.in/",
            icon: "🌐"
        }
    };

    return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-20 px-4 relative overflow-hidden pt-24 md:pt-28">
            {/* Background decorative elements - more subtle */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background:
                            'radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, rgba(37,99,235,0.1) 40%, transparent 70%)',
                        transform: 'translate(35%, -35%)',
                    }}
                ></div>

                <div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-25"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, rgba(96,165,250,0.15) 0%, rgba(147,51,234,0.1) 50%, transparent 70%)',
                        transform: 'translate(-25%, 25%)',
                    }}
                ></div>
            </div>

            <div className="max-w-2xl w-full relative z-10">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                            About the Developer
                        </h2>
                    <div className="w-16 h-0.5 bg-white/10 mx-auto rounded-full"></div>
                    </div>

                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-4xl font-semibold text-white mb-4 shadow-md ring-2 ring-white/10">
                            {developerInfo.name[0]}
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                            {developerInfo.name}
                        </h3>
                        <p className="text-white/75 text-center leading-relaxed max-w-xl text-base whitespace-pre-line">
                            {developerInfo.bio}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-6"></div>

                    {/* Links Section */}
                    <div className="space-y-3">
                        
                        
                        {/* Website Link - Full Width */}
                        <a
                            href={developerInfo.website.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 rounded-lg text-white text-base font-medium w-full shadow-md hover:shadow-lg hover:scale-[1.01] transform"
                        >
                            <span className="text-2xl">{developerInfo.website.icon}</span>
                            <span>{developerInfo.website.name}</span>
                        </a>

                        {/* Other Links - Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {developerInfo.links.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 rounded-lg text-white border border-white/10 hover:border-blue-400/30 shadow-sm hover:shadow-md hover:scale-[1.01] transform"
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    <span className="font-medium text-sm">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}