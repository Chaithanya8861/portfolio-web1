"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [galleryType, setGalleryType] = useState("hackathon");

  const hackathonGallery = [
    { src: "/images/hackathon/certificate.jpg", title: "Hackathon Certificate" },
    { src: "/images/hackathon/proof1.jpg", title: "Hackathon -Leads" },
    { src: "/images/hackathon/proof2.jpg", title: "Hackathon Team Photo" },
  ];

  const jamboreeGallery = [
    { src: "/images/jamboree/jamboree1.jpg", title: "Certificate" },
    { src: "/images/jamboree/jamboree2.jpg", title: "Jamboree Event Participation" },
    { src: "/images/jamboree/jamboree3.jpg", title: "Jamboree Cultural Exchange" },
  ];

  const gallery = galleryType === "hackathon" ? hackathonGallery : jamboreeGallery;

  // small accessibility: close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setShowGallery(false);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery.length]);

  return (
    <div className="bg-gray-900 text-white min-h-screen scroll-smooth selection:bg-blue-400 selection:text-gray-900">
      {/* Navigation */}
      <header className="fixed w-full bg-gray-900 bg-opacity-60 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="/images/chaithanya.jpg"
                alt="Chaithanya"
                className="w-12 h-12 rounded-full ring-2 ring-blue-400 object-cover shadow-lg transform transition-transform duration-700 hover:scale-110 animate-float"
              />
              <span className="absolute -right-2 -top-2 bg-blue-500 px-2 py-1 rounded-full text-xs font-medium animate-ping-slow">🎓</span>
            </div>

            <div className="text-lg font-semibold text-blue-300">Hey there 👋</div>
          </div>

          <nav>
            <ul className="flex space-x-6 text-gray-300">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center min-h-[75vh] text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight gradient-text animate-gradient drop-shadow-lg">
            Hi, I’m <span className="text-blue-300 animate-bounce text-pink-400">Chaithanya</span>
          </h1>
          

          <p className="mt-2 text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed hero-subtitle">
            MCA Student · BCA Graduate · UI/UX Enthusiast 
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/chaithanya-094a71322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition shadow-md transform hover:-translate-y-1"
            >
              View my LinkedIn
            </a>

            <a
              href="https://youtube.com/@chaithanya_shettigar?si=7e5PspPuUBK_Uign"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition transform hover:-translate-y-1"
            >
              My YouTube Channel
            </a>

            {/* New: Quiz Master link */}
            <a
              href="https://quizmaster-801c1.web.app/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-700 hover:to-sky-600 transition shadow-lg transform hover:-translate-y-1"
              title="Visit my mini project - Quiz Master"
            >
              Quiz Master (Mini Project)
            </a>
          </div>

          {/* Animated down arrow */}
          <div className="mt-8 animate-bounce text-gray-400">⬇️</div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img
              src="/images/chaithanya-large.jpg"
              alt="Chaithanya portrait"
              className="w-44 h-44 rounded-full object-cover ring-4 ring-blue-400 shadow-2xl animate-float"
            />

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                As a MCA student, I am passionate about technology and eager to start my career in IT.  I look forward to contributing to innovative projects and making a positive impact in the tech industry.I also
                create art and share process videos on my YouTube channel (Chaithu's Art Gallery).
              </p>

              <p className="mt-3 text-gray-400 italic">(About text mirrors my LinkedIn summary.)</p>

              {/* Buttons for separate experiences */}
              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => { setGalleryType("hackathon"); setActiveIndex(0); setShowGallery(true); }}
                  className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition shadow-md transform hover:scale-105"
                >
                  Show Hackathon Experience

                </button>
                  

                <button
                  onClick={() => { setGalleryType("jamboree"); setActiveIndex(0); setShowGallery(true); }}
                  className="px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition shadow-md transform hover:scale-105"
                >
                  Show Jamboree Experience
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['HTML', 'CSS', 'JavaScript', 'PHP', 'Photography', 'Videography'].map((s, idx) => (
                <div key={s} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition">
                  <div className="text-lg font-medium text-gray-100 flex items-center justify-between">
                    <span>{s}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${idx % 2 === 0 ? 'bg-blue-600' : 'bg-indigo-600'} text-white animate-pulse`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]">
                <img src="/projects/recipe-app.png" alt="" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
                  <p className="text-gray-300 mb-4">A responsive portfolio built with React and Tailwind CSS.</p>
                  <a href="#" className="text-blue-400 hover:underline">View Project →</a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]">
                <img src="/projects/shopping-list.png" alt="QuizMaster" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2"> Mini Project</h3>
                  <p className="text-gray-300 mb-4">An educational mini-project developed in Java to manage quizzes and evaluate user performance.</p>
                  <a href="#" className="text-blue-400 hover:underline">View Project →</a>
                </div>
              </div>

            </div>

            {/* Small animated note and callout for Quiz Master */}
            <div className="mt-8 text-center text-gray-300">
              <div className="inline-block px-4 py-2 rounded-lg border border-dashed border-gray-600 hover:border-blue-400 transition transform hover:-translate-y-1">
                <strong>Try my interactive mini project:</strong> <a href="/projects/quiz-master/index.html" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">Quiz Master</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Me</h2>
            <p className="text-gray-300 mb-4">I’d love to hear from you! You can reach me at:</p>
            <a href="mailto:chaithanya8861@gmail.com" className="text-blue-400 text-lg hover:underline">chaithanya8861@gmail.com</a>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="https://github.com/Chaithanya8861" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">GitHub</a>
              <a href="https://www.linkedin.com/in/chaithanya-094a71322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="https://youtube.com/@chaithanya_shettigar?si=7e5PspPuUBK_Uign" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">YouTube</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-8">
        <div className="max-w-4xl mx-auto">
          &copy; {new Date().getFullYear()} Chaithanya. Built with Next.js & Tailwind.
        </div>
      </footer>

      {/* GALLERY / LIGHTBOX */}
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setShowGallery(false)}
              className="absolute right-2 top-2 text-gray-300 bg-gray-900/60 px-3 py-1 rounded-md hover:bg-gray-800"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img src={gallery[activeIndex].src} alt={gallery[activeIndex].title} className="w-full h-[420px] object-contain bg-black" />

              <div className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{gallery[activeIndex].title}</div>
                  <div className="text-sm text-gray-400">Use ← → keys or click arrows to navigate</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length)}
                    className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
                    aria-label="Previous"
                  >
                    ←
                  </button>

                  <button
                    onClick={() => setActiveIndex((i) => (i + 1) % gallery.length)}
                    className="px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
                    aria-label="Next"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="bg-gray-900/60 p-3 flex items-center justify-between">
                <div className="text-sm text-gray-400">{activeIndex + 1} of {gallery.length}</div>
                <div className="space-x-2">
                  <a href={gallery[activeIndex].src} download className="text-sm text-blue-300 hover:underline">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROFESSIONAL ANIMATIONS */}
      <style jsx global>{`
        .gradient-text{
          background: linear-gradient(90deg,#60a5fa,#7c3aed,#06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% 200%;
        }

        .animate-gradient{
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }

        .hero-subtitle{
          opacity:0;
          transform:translateY(8px);
          animation: fadeUp 1s 0.25s forwards;
        }

        @keyframes fadeUp{
          to{opacity:1; transform:none}
        }

        .animate-float{
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float{
          0%{transform:translateY(0)}
          50%{transform:translateY(-6px)}
          100%{transform:translateY(0)}
        }

        .animate-ping-slow{animation: ping 2.5s cubic-bezier(.4,0,.6,1) infinite}

      `}</style>
    </div>
  );
}