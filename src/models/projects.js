/**
 * NOTE: Update when necessary (when new projects are done)
 */
import { SKILLS } from "models/technical-skills" ;

export const PROJECT_TYPE = {
    EDUCATIONAL: 'Educational',
    PERSONAL: 'Personal',
    FREELANCE: 'Freelance',
};

export const PROJECTS = {
    IRELIA_BOT: { 
        name: 'Irelia Bot', 
        description: 'Custom games matchmaking bot for the online multiplayer game, League of Legends.',
        projectType: PROJECT_TYPE.PERSONAL,
        projectId: 120,
        startDate: new Date(2020, 11),
        endDate: new Date(2021, 0),
        skills: [SKILLS.JAVASCRIPT, SKILLS.DISCORD_JS, SKILLS.NODE_JS, SKILLS.AWS_EC2],
    },
    FINANCIAL_MODELING_TOOL: {
        name: 'Financial Modeling Tool',
        description: 'Models and forecasts budget and expenses for the lab at UCI\'s Stem Cell Research Center.',
        projectType: PROJECT_TYPE.EDUCATIONAL,
        projectId: 110,
        startDate: new Date(2020, 8),
        endDate: new Date(2020, 11),
        skills: [SKILLS.JAVASCRIPT, SKILLS.PYTHON, SKILLS.REACT_JS, SKILLS.FLASK, SKILLS.ELASTICSEARCH, SKILLS.KIBANA],
    },
    SPIDERSENSE: {
        name: 'SpiderSense',
        description: 'Web application that visualizes the Tarantula technique, used to assist in fault localization.',
        projectType: PROJECT_TYPE.EDUCATIONAL,
        projectId: 100,
        startDate: new Date(2020, 5),
        endDate: new Date(2020, 8),
        skills: [SKILLS.JAVASCRIPT, SKILLS.PYTHON, SKILLS.REACT_JS, SKILLS.D3_JS, SKILLS.FLASK],
    },
};