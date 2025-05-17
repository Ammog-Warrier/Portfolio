export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];
export const myProjects = [
    {
        title: 'A Zentry Clone',
        desc: 'A clone of the Zentry landing page featuring advanced Three.js animations.',
        subdesc: 'Built to experiment with shader effects, camera motion, and layered 3D experiences.',
        href: 'https://zentry-clone-phi-ruby.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#1A1A1A',
            border: '0.2px solid #2A2A2A',
            boxShadow: '0px 0px 60px 0px #3A3A3A4D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'JavaScript',
                path: '/assets/Javascript.png',
            },
        ],
    },
    {
        title: 'Dishcovery',
        desc: 'An AI recipe generator and inventory manager.',
        subdesc: 'Suggests dishes based on what\'s in your kitchen using OpenAI, and helps manage grocery inventory.',
        href: 'https://dishcovery-five.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#FF6B6B',
            border: '0.2px solid #FF8787',
            boxShadow: '0px 0px 60px 0px #FF6B6B4D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Sentinel-Blog',
        desc: 'A minimal blog-making app using Vanilla React.',
        subdesc: 'Blogs are stored locally. For this to work, the local database must be watched/served manually.',
        href: 'https://github.com/Ammog-Warrier/Sentinel-Blog',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#2D3436',
            border: '0.2px solid #636E72',
            boxShadow: '0px 0px 60px 0px #2D34364D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: '/assets/css.png',
            },
        ],
    },
    {
        title: 'NodeJS Blogs',
        desc: 'A blogging platform built with NodeJS and ExpressJS.',
        subdesc: 'Features RESTful routes and classic server-side rendering using EJS.',
        href: 'https://github.com/Ammog-Warrier/node-blog',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#68A063',
            border: '0.2px solid #7FB069',
            boxShadow: '0px 0px 60px 0px #68A0634D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Node.js',
                path: '/assets/nodejs.png',
                style: { transform: 'scale(1.2)' }
            },
            {
                id: 2,
                name: 'Express.js',
                path: '/assets/express.png',
                style: { transform: 'scale(1.2)' }
            },
            {
                id: 3,
                name: 'CSS',
                path: '/assets/css.png',
            },
        ],
    },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};