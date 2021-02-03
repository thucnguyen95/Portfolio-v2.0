export const CATEGORIES = {
    LIBRARIES_FRAMEWORKS: "Libraries/Frameworks",
    LANGUAGE: "Languages",
    OTHER: "Other"
};

export const EXPERTISE = {
    ADVANCED: "Advanced",
    PROFICIENT: "Proficient"
};

export const TECHNICAL_SKILLS = {
    [CATEGORIES.LANGUAGE]: {
        "Java": { name: "Java", expertise: EXPERTISE.ADVANCED },
        "Python": { name: "Python", expertise: EXPERTISE.ADVANCED },
        "JavaScript": { name: "JavaScript", expertise: EXPERTISE.ADVANCED },
        "Typescript": { name: "Typescript", expertise: EXPERTISE.ADVANCED },
        "HTML": { name: "HTML", expertise: EXPERTISE.ADVANCED },
        "CSS": { name: "CSS", expertise: EXPERTISE.ADVANCED },
        "SCSS": { name: "SCSS", expertise: EXPERTISE.ADVANCED },
        "SQL": { name: "SQL", expertise: EXPERTISE.ADVANCED },
        "PHP": { name: "PHP", expertise: EXPERTISE.PROFICIENT },
    },
    [CATEGORIES.LIBRARIES_FRAMEWORKS]: {
        "React.js": { name: "React.js", expertise: EXPERTISE.ADVANCED },
        "D3.js": { name: "D3.js", expertise: EXPERTISE.ADVANCED },
        "jQuery": { name: "jQuery", expertise: EXPERTISE.ADVANCED },
        "Discord.js": { name: "Discord.js", expertise: EXPERTISE.ADVANCED },
        "Angular": { name: "Angular", expertise: EXPERTISE.PROFICIENT },
        "Flask": { name: "Flask", expertise: EXPERTISE.PROFICIENT },
        "Django": { name: "Django", expertise: EXPERTISE.PROFICIENT },
        "Selenium": { name: "Selenium", expertise: EXPERTISE.PROFICIENT },
    },
    [CATEGORIES.OTHER]: {
        "Firebase": { name: "Firebase", expertise: EXPERTISE.ADVANCED },
        "MySQL": { name: "MySQL", expertise: EXPERTISE.ADVANCED },
        "SQLite": { name: "SQLite", expertise: EXPERTISE.ADVANCED },
        "Node.js": { name: "Node.js", expertise: EXPERTISE.PROFICIENT },
        "Elasticsearch": { name: "Elasticsearch", expertise: EXPERTISE.PROFICIENT },
        "Kibana": { name: "Kibana", expertise: EXPERTISE.PROFICIENT },
        "Jira": { name: "Jira", expertise: EXPERTISE.PROFICIENT },
        "Retrofit": { name: "Retrofit", expertise: EXPERTISE.PROFICIENT },
        "AWS (EC2)": { name: "AWS (EC2)", expertise: EXPERTISE.PROFICIENT },
    }
};