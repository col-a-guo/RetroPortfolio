import React, { useState, useEffect } from 'react';
import { DesktopItem } from './components/DesktopItem';
import { Window } from './components/Window';
import { WindowType, WindowState } from './types';
import { PROJECTS, SOCIAL_LINKS, INTRO_TEXT } from './constants';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'about', type: WindowType.ABOUT, title: 'ABOUT_ME.TXT', isOpen: true, zIndex: 1 },
    { id: 'projects', type: WindowType.PROJECTS, title: 'PROJECTS_DIR', isOpen: false, zIndex: 0 },
    { id: 'contact', type: WindowType.CONTACT, title: 'CONTACT.EXE', isOpen: false, zIndex: 0 },
    { id: 'resume', type: WindowType.RESUME, title: 'RESUME.PDF', isOpen: false, zIndex: 0 },
    { id: 'trash', type: WindowType.TRASH, title: 'TRASH_BIN', isOpen: false, zIndex: 0 },
  ]);

  // Boot sequence effect
  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Clock effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const bringToFront = (id: string) => {
    setWindows(prev => {
      const maxZ = Math.max(...prev.map(w => w.zIndex));
      return prev.map(w => w.id === id ? { ...w, zIndex: maxZ + 1 } : w);
    });
  };

  const toggleWindow = (id: string, isOpen: boolean) => {
    setWindows(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, isOpen };
      }
      return w;
    }));
    if (isOpen) bringToFront(id);
  };

  // Content renderers
  const renderAbout = () => (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 bg-retro-dark border-2 border-retro-darkest shrink-0 overflow-hidden relative">
             <img src="/mylogo.png" alt="Avatar" className="object-cover w-full h-full grayscale contrast-125 sepia hover:scale-110 transition-transform" />
             <div className="absolute inset-0 bg-retro-lightest/20 pointer-events-none mix-blend-overlay"></div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 uppercase">Developer Profile</h2>
          <p className="text-lg leading-tight">
            Software Engineer with ML Research Background
          </p>
        </div>
      </div>
      {/* CHANGE THE SKILLS HERE HONEY <3 */}
      <div className="border-t-2 border-retro-darkest border-dashed my-2"></div>
      <div>
        <h3 className="text-lg font-bold mb-1">[ SKILLS ]</h3>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
          <li>* Python</li>
          <li>* Pytorch</li>
          <li>* C#</li>
          <li>* SQL/NoSQL</li>
          <li>* React / Next.js</li>
          <li>* Node.js</li>
          <li>* Tailwind CSS</li>
          <li>* Database Architect</li>
          <li>* Machine Learning</li>
        </ul>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      <p className="mb-4 text-center">--- C:\PROJECTS ---</p>
      {PROJECTS.map((project, idx) => (
        
        <div key={idx} className="border-2 border-retro-dark p-2 hover:bg-retro-light/20 transition-colors cursor-pointer group">
          <a href={project.link} target="_blank">
          <h3 className="font-bold text-lg group-hover:underline">{project.title}</h3>
          <p className="mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="bg-retro-dark text-retro-lightest px-1 text-sm">{t}</span>
            ))}
          </div>
          </a>
        </div>
      ))}
    </div>
  );

  const renderResume = () => (
    <div className="space-y-4">
      {/* <div className="text-center border-b-2 border-retro-darkest border-dashed pb-2">
         <h2 className="text-xl font-bold">JANE DOE</h2>
         <p>Senior Frontend Engineer</p>
      </div> */}
      {/* CHANGE EXPERIENCE HERE */}
      {/* <div className="space-y-2">
        <h3 className="bg-retro-dark text-retro-lightest px-1 inline-block">EXPERIENCE</h3>
        <div>
           <p className="font-bold flex justify-between"><span>Tech Corp.</span> <span>2021-Present</span></p>
           <p className="text-sm">Senior Developer. Led team of 5. Improved performance by 40%.</p>
        </div>
        <div>
           <p className="font-bold flex justify-between"><span>Startup Inc.</span> <span>2018-2021</span></p>
           <p className="text-sm">Full Stack Dev. Built MVP from scratch using MERN stack.</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="bg-retro-dark text-retro-lightest px-1 inline-block">EDUCATION</h3>
        <div>
           <p className="font-bold">Computer Science, BS</p>
           <p className="text-sm">University of Technology, 2018</p>
        </div>
      </div> */}
      
      <div className="text-center pt-4">
        <a href="https://drive.google.com/file/d/1WrTHwSgNyt10vIq7KCrB37RnWT_HoH8Z/view?usp=sharing"><button className="border-2 border-retro-darkest px-4 py-1 hover:bg-retro-darkest hover:text-retro-lightest transition-colors">
            DOWNLOAD_PDF
         </button></a>
         
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <h2 className="text-2xl text-center border-b-4 border-double border-retro-darkest pb-2 w-full">CONNECT</h2>
      <div className="space-y-4 w-full px-8">
        {SOCIAL_LINKS.map((link) => (
          <a 
            key={link.platform} 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center border-2 border-transparent hover:border-retro-darkest hover:bg-retro-dark hover:text-retro-lightest p-2 transition-all cursor-pointer"
          >
            <span>{link.platform}</span>
            <span>{link.username}</span>
          </a>
        ))}
        <div className="text-center mt-8">
            <p>EMAIL_ME:</p>
            <a href="mailto:swannsu@gmail.com" className="underline hover:bg-retro-darkest hover:text-retro-lightest">swannsu@gmail.com</a>
        </div>
      </div>
    </div>
  );

  if (!booted) {
    return (
      <div className="w-screen h-screen bg-retro-darkest text-retro-lightest font-pixel flex flex-col items-center justify-center p-8 cursor-wait">
        <div className="w-full max-w-2xl">
          <p>BIOS DATE 09/20/199X 14:22:56 VER 1.02</p>
          <p>CPU: NEC V20, SPEED: 8 MHz</p>
          <p className="mb-4">640K RAM SYSTEM OK</p>
          
          <div className="space-y-1">
             <p>INITIALIZING VIDEO ADAPTER...... OK</p>
             <p>CHECKING PERIPHERALS........... OK</p>
             <p>LOADING OS..................... <span className="animate-blink">_</span></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#e0e0d0] flex items-center justify-center p-2 sm:p-8 select-none">
      
      <div className="relative w-full max-w-5xl h-[800px] sm:h-auto sm:aspect-[4/3] bg-[#d0d0c0] rounded-xl shadow-[inset_-5px_-5px_10px_rgba(0,0,0,0.1),_10px_10px_20px_rgba(0,0,0,0.3)] p-3 sm:p-8 flex flex-col border border-[#b0b0a0]">
        
        {/* Decor: Brand Name */}
        <div className="absolute top-3 left-8 text-[#808070] font-bold font-sans tracking-widest text-sm sm:text-base hidden sm:block">
          Beep Boop
        </div>

        {/* Decor: Power LED */}
        <div className="absolute top-1/2 right-3 w-2 h-8 bg-gray-300 rounded-full flex flex-col justify-between p-0.5 border border-gray-400">
           <div className="w-full h-1/2 bg-red-500 rounded-full shadow-[0_0_5px_rgba(255,0,0,0.6)] animate-pulse"></div>
        </div>

        {/* The Screen Bezel */}
        <div className="bg-[#404040] w-full h-full rounded-tl-md rounded-tr-[40px] rounded-br-md rounded-bl-[40px] p-4 sm:p-10 shadow-inner relative overflow-hidden">
            
            {/* The Actual LCD Screen */}
            <div className="w-full h-full bg-retro-lightest relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border-2 border-[#303020]">
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[100] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
              
              {/* Desktop UI */}
              <div className="relative w-full h-full p-4 font-pixel text-retro-darkest flex flex-col">
                
                {/* Top Bar */}
                <div className="flex justify-between items-end border-b-2 border-retro-darkest pb-1 mb-4 shrink-0">
                  <div className="bg-retro-darkest text-retro-lightest px-2">BeepBoop_OS</div>
                  <div className="flex gap-4">
                     <span className="animate-pulse">BATTERY OK</span>
                     <span>{currentTime}</span>
                  </div>
                </div>

                {/* Desktop Icons Container
                    CHANGED: Switched from Grid to Flex Wrap to prevent cutoff on mobile.
                    Added overflow-auto just in case.
                */}
                <div className="flex flex-wrap content-start justify-center sm:justify-start gap-4 sm:gap-8 overflow-y-auto h-full pb-20">
                  <DesktopItem 
                    label="ABOUT" 
                    customIconSrc="/folder.png" 
                    onClick={() => toggleWindow('about', true)} 
                  />
                  <DesktopItem 
                    label="PROJECTS" 
                    customIconSrc="/folder.png" 
                    onClick={() => toggleWindow('projects', true)} 
                  />
                  <DesktopItem 
                    label="CONTACT" 
                    customIconSrc="/folder.png" 
                    onClick={() => toggleWindow('contact', true)} 
                  />
                  {/* CHANGED: Now using customIconSrc. Make sure to put 'resume-icon.png' in /public */}
                  <DesktopItem 
                    label="RESUME" 
                    customIconSrc="/pdf.png"
                    onClick={() => toggleWindow('resume', true)} 
                    // iconClassName="w-24 h-24"
                  />
                  
                  {/* <DesktopItem 
                    label="GITHUB" 
                    customIconSrc="/github.png" 
                    onClick={() => toggleWindow('trash', true)} 
                  /> */}
                </div>

                {/* Floating Intro Text */}
                <div className="absolute bottom-4 left-4 text-retro-dark text-lg opacity-60 hidden sm:block pointer-events-none">
                  {INTRO_TEXT}
                </div>

                {/* Windows Layer */}
                {windows.map((w) => (
                  <Window
                    key={w.id}
                    title={w.title}
                    isOpen={w.isOpen}
                    zIndex={w.zIndex + 10}
                    onClose={() => toggleWindow(w.id, false)}
                    onFocus={() => bringToFront(w.id)}
                  >
                    {w.type === WindowType.ABOUT && renderAbout()}
                    {w.type === WindowType.PROJECTS && renderProjects()}
                    {w.type === WindowType.RESUME && renderResume()}
                    {w.type === WindowType.CONTACT && renderContact()}
                  </Window>
                ))}

              </div>
            </div>
        </div>

        {/* Bottom Logo Area */}
        <div className="mt-2 text-[#808070] italic font-serif text-right px-4 text-xs sm:text-sm flex justify-between items-center w-full">
            <span className="not-italic font-sans text-gray-400">Beep Boop Machine <span className="inline-block w-2 h-2 bg-gray-400 rounded-full ml-1"></span></span>
            <span>𓇼 ⋆｡˚ 𓆝⋆｡˚ 𓇼</span>
        </div>

      </div>
    </div>
  );
};

export default App;
