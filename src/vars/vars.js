/* ============================================================================
    Images Paths
 =========================================================================== */
export const imagePaths = {
    landingPage: '/landing-page-04.jpg',
    profile: '/profile.jpg',
    ucsd: '/ucsd-01.jpg',
    sdsu: '/sdsu-01.jpg',
    uci: '/uci-01.jpg',
    boba: '/boba-01.jpg',
    gamesAnimeManga: '/anime-manga-01.jpg',
    outdoor: '/badminton-01.jpg',
    contact: '/contact-01.jpg',
};

/* ============================================================================
    Menu
 =========================================================================== */
export const NETWORKING = {
    GITHUB: 'GitHub',
    LINKEDIN: 'LinkedIn',
    EMAIL: 'Email',
    DISCORD: 'Discord',
};

export const networkingLinks = {
    email: {
        title: NETWORKING.EMAIL,
        link: 'thucnguyen0895@gmail.com',
    },
    linkedin: {
        title: NETWORKING.LINKEDIN,
        link: 'https://www.linkedin.com/in/thucnguyen95/',
    },
    github: {
        title: NETWORKING.GITHUB,
        link: 'https://github.com/thucnguyen95',
    },
    discord: {
        title: NETWORKING.DISCORD,
        link: 'thucn2#9944',
    },
};

/* ============================================================================
    About Page
 =========================================================================== */
export const aboutPageDetails = {
    description: [
        {
            yearRange: '2013 - 2017',
            content: 'It started during a study session when I was a second-year undergrad at UCSD. I watched as one of my closest friends solved a problem for by iterating through a matrix. I asked him how he was doing all of that, and he took me through the steps. From that point on, I decided that computer science and software engineering was a career I would love to pursue.',
        },
        {
            yearRange: '2017 - 2018',
            content: 'After graduating from UCSD with a Bachelor of Science in Human biology, I went to San Diego State University to complete a certificate program in Web and Mobile applications development. The program was a great experience and was an introduction to the very thing I enjoy doing the most now: developing applications for users. The platform didn\'t matter; it was the process of building something that could help or entertain others.',
        },
        {
            yearRange: '2019 - 2020',
            content: 'I then went to UCI to work towards a Master of Software Engineering degree. For the summer internship, I was given the opportunity to work as a frontend developer for the Spider Lab under Professor James A. Jones. For the capstone project in December, I worked on a team with 3 others to develop a financial modeling tool for the lab at UCI\'s Stem Cell Research Center.',
        },
    ],
    education: [
        {
            image: imagePaths.ucsd,
            institution: 'University of California, San Diego',
            location: 'San Diego, CA',
            years: '2013-2017',
            degree: 'Bachelor\'s of Science',
            major: 'Human Biology',
            gpa: 'GPA: 3.462',
        },
        {
            image: imagePaths.sdsu,
            institution: 'San Diego State University',
            location: 'San Diego, CA',
            years: '2017-2018',
            degree: 'Certificate',
            major: 'Web and Mobile Applications Development',
            gpa: 'GPA: 4.0',
        },
        {
            image: imagePaths.uci,
            institution: 'University of California, Irvine',
            location: 'Irvine, CA',
            years: '2019-2020',
            degree: 'Master of Software Engineering',
            major: 'Software Engineering',
            gpa: 'GPA: 3.975',
        },
    ],
    pastimes: {
        boba: {
            image: imagePaths.boba,
            title: 'Boba',
            description: [
                'If you haven\'t tried it, you should. It\'s pretty good. I enjoy getting boba with family and friends. I only drink teas, with the exception of milk teas that are made with soy or oat milk. I\'ve been to a lot of places, but my to-go boba place as of now is 7 Leaves. Check it out and get the Matcha Soy, with boba of course.'
            ]
        },
        games: {
            image: imagePaths.gamesAnimeManga,
            title: 'Games, Anime & Manga',
            description: [
                'Games',
                'League of Legends, JRPGs like Final Fantasy (III, VII, VIII, IX, X, XII, XIII), Nier Automata, etc. I also enjoy a few first-person shooters like Halo, BioShock, and Fallout.',
                'Anime & Manga',
                'Action, drama, thriller, romance, slice-of-life, comedy - I enjoy watching and reading most genres of anime and manga. Some favorites are Attack on Titan, Violet Evergarden, Monster, Overlord, and Gantz.'
            ]
        },
        outdoor: {
            image: imagePaths.outdoor,
            title: 'Outdoor Activities',
            description: [
                'I really enjoy eating out with friends and family. Sports include badminton, tennis, basketball (I\'m pretty bad though), and hiking.',
                'I haven\'t traveled in a while, but I have been to Vietnam, Canada (three times), and Japan.',
                'Places I would like to visit one day would be New Zealand and Salar de Uyuni in Bolivia.'
            ]
        }
    }
};

/* ============================================================================
    Contact Page
 =========================================================================== */
export const contactDetails = {
    description: 'If you have any inquiries or offers, feel free to contact me! I am on Discord most of the time. I have also pasted the link to my Github for those who want to look at the public repositories I have forked and worked with. Most of the projects I have completed must be kept private, however.',
}
