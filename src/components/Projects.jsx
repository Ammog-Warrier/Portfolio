import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    useGSAP(() => {
        gsap.fromTo(
            `.animatedText`,
            { opacity: 0 },
            { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
        );
    }, [selectedProjectIndex]);

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section id="projects" className="c-space my-20">
            <p className="head-text">My Selected Work</p>

            <div className="mt-12 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-xl bg-black-300">
                    <div className="absolute top-0 right-0 pointer-events-none">
                        <img
                            src={currentProject.spotlight}
                            alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"
                        />
                    </div>

                    <div
                        className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg relative z-10"
                        style={currentProject.logoStyle}
                    >
                        <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5 relative z-10">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5 relative z-10">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} style={tag.style} />
                                </div>
                            ))}
                        </div>

                        <a
                            href={currentProject.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white-600 hover:text-white transition-colors duration-300 cursor-pointer relative z-10"
                        >
                            <span>Check Live Site</span>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
