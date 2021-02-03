/* ============================================================================
    Images Paths
 =========================================================================== */

export const imagePaths = {
    landingPage: "/images/landing-page-04.jpg",
    profile: "/images/profile.jpg",
    ucsd: "/images/ucsd-01.jpg",
    sdsu: "/images/sdsu-01.jpg",
    uci: "/images/uci-01.jpg",
};

export const institutionKeys = {
    UCSD:"UCSD",
    SDSU: "SDSU",
    UCI: "UCI",
}

export const aboutPageDetails = {
    description: [
        {
            yearRange: "2013 - 2017",
            content: "It started during a study session when I was a second-year undergrad at UCSD. I watched as one of my closest friends solved a problem for by iterating through a matrix. I asked him how he was doing all of that, and he took me through the steps. From that point on, I decided that computer science and software engineering was a career I would love to pursue.",
        },
        {
            yearRange: "2017 - 2018",
            content: "After graduating from UCSD with a Bachelor of Science in Human biology, I went to San Diego State University to complete a certificate program in Web and Mobile applications development. The program was a great experience and was an introduction to the very thing I enjoy doing the most now: developing applications for users. The platform didn't matter; it was the process of building something that could help or entertain others.",
        },
        {
            yearRange: "2019 - 2020",
            content: "I then went to UCI to work towards a Master of Software Engineering degree. For the summer internship, I was given the opportunity to work as a frontend developer for the Spider Lab under Professor James A. Jones. For the capstone project in December, I worked on a team with 3 others to develop a financial modeling tool for the lab at UCI's Stem Cell Research Center.",
        },
    ],
    education: [
        {
            image: "",
            institutionKey: institutionKeys.UCSD,
            institution: "University of California, San Diego",
            location: "San Diego, CA",
            years: "2013-2017",
            degree: "Bachelor\'s of Science",
            major: "Human Biology",
            gpa: "GPA: 3.462",
        },
        {
            image: "",
            institutionKey: institutionKeys.SDSU,
            institution: "San Diego State University",
            location: "San Diego, CA",
            years: "2017-2018",
            degree: "Certificate",
            major: "Web and Mobile Applications Development",
            gpa: "GPA: 4.0",
        },
        {
            image: "",
            institutionKey: institutionKeys.UCI,
            institution: "University of California, Irvine",
            location: "Irvine, CA",
            years: "2019-2020",
            degree: "Master of Software Engineering",
            major: "Software Engineering",
            gpa: "GPA: 3.975",
        },
    ]
}
