/**
 * NOTE: Update when necessary (when new skill obtained)
 */

export const CATEGORIES = {
    LIBRARIES_FRAMEWORKS: "Libraries/Frameworks",
    LANGUAGE: "Languages",
    OTHER: "Other"
};

export const EXPERTISE = {
    ADVANCED: "Advanced",
    PROFICIENT: "Proficient"
};

export const SKILLS = {
    JAVA: { name: 'Java', expertise: EXPERTISE.ADVANCED },
    PYTHON: { name: 'Python', expertise: EXPERTISE.ADVANCED },
    JAVASCRIPT: { name: 'JavaScript', expertise: EXPERTISE.ADVANCED },
    TYPESCRIPT: { name: 'Typescript', expertise: EXPERTISE.ADVANCED },
    HTML: { name: 'HTML', expertise: EXPERTISE.ADVANCED },
    CSS: { name: 'CSS', expertise: EXPERTISE.ADVANCED },
    SCSS: { name: 'SCSS', expertise: EXPERTISE.ADVANCED },
    SQL: { name: 'SQL', expertise: EXPERTISE.ADVANCED },
    PHP: { name: 'PHP', expertise: EXPERTISE.PROFICIENT },
    REACT_JS: { name: 'React.js', expertise: EXPERTISE.ADVANCED },
    D3_JS: { name: 'D3.js', expertise: EXPERTISE.ADVANCED },
    JQUERY: { name: 'jQuery', expertise: EXPERTISE.ADVANCED },
    DISCORD_JS: { name: 'Discord.js', expertise: EXPERTISE.ADVANCED },
    ANGULAR: { name: 'Angular', expertise: EXPERTISE.PROFICIENT },
    FLASK: { name: 'Flask', expertise: EXPERTISE.PROFICIENT },
    DJANGO: { name: 'Django', expertise: EXPERTISE.PROFICIENT },
    SELENIUM: { name: 'Selenium', expertise: EXPERTISE.PROFICIENT },
    FIREBASE: { name: 'Firebase', expertise: EXPERTISE.ADVANCED },
    MYSQL: { name: 'MySQL', expertise: EXPERTISE.ADVANCED },
    SQLITE: { name: 'SQLite', expertise: EXPERTISE.ADVANCED },
    NODE_JS: { name: 'Node.js', expertise: EXPERTISE.PROFICIENT },
    ELASTICSEARCH: { name: 'Elasticsearch', expertise: EXPERTISE.PROFICIENT },
    KIBANA: { name: 'Kibana', expertise: EXPERTISE.PROFICIENT },
    RETROFIT: { name: 'Retrofit', expertise: EXPERTISE.PROFICIENT },
    AWS_EC2: { name: 'AWS (EC2)', expertise: EXPERTISE.PROFICIENT },
};

export const CATEGORICAL_SKILLS = {
    [CATEGORIES.LANGUAGE]: [
        SKILLS.JAVA,
        SKILLS.PYTHON,
        SKILLS.JAVASCRIPT,
        SKILLS.TYPESCRIPT,
        SKILLS.HTML,
        SKILLS.CSS,
        SKILLS.SCSS,
        SKILLS.SQL,
        SKILLS.PHP,
    ],
    [CATEGORIES.LIBRARIES_FRAMEWORKS]: [
        SKILLS.REACT_JS,
        SKILLS.D3_JS,
        SKILLS.JQUERY,
        SKILLS.DISCORD_JS,
        SKILLS.ANGULAR,
        SKILLS.FLASK,
        SKILLS.DJANGO,
        SKILLS.SELENIUM,
    ],
    [CATEGORIES.OTHER]: [
        SKILLS.FIREBASE,
        SKILLS.MYSQL,
        SKILLS.SQLITE,
        SKILLS.NODE_JS,
        SKILLS.ELASTICSEARCH,
        SKILLS.KIBANA,
        // "Jira": { name: "Jira", expertise: EXPERTISE.PROFICIENT },
        SKILLS.RETROFIT,
        SKILLS.AWS_EC2,
    ],
};