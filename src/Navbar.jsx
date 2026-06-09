import React, { useState, useEffect, useRef } from "react";

function Navbar() {
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 z-50">
            <div className="relative flex items-center justify-between px-6 md:px-12 py-4">
              
                <button
                    
                    className="flex items-center gap-2 text-white font-normal text-base tracking-wide hover:text-white/80 transition-colors"
                >
                    <img src="/assets/image.png" alt="ExamVault Logo" className="w-6 h-6" />
                    <span>MY REPO</span>
                </button>

                
                <div className="flex items-center gap-8 text-sm">
                    <button
                       
                        className="text-white/70 hover:text-white transition-colors font-light"
                    >
                        Home
                    </button>

                    <button
                        
                        className="text-white/70 hover:text-white transition-colors font-light"
                    >
                        Explore
                    </button>

                    <button
                        
                        className="text-white/70 hover:text-[#ffff] transition-colors font-light"
                    >
                        Contribute
                    </button>

                    <button
                        
                        className="text-white/70 hover:text-white transition-colors font-light"
                    >
                        Developer
                    </button>
                </div>

            </div>
        </nav>
    );
}
export default Navbar;