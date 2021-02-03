import { aboutPageDetails } from "vars/vars";
import { TECHNICAL_SKILLS } from "models/technical-skills"

class ContentManager {
    constructor() {

    }

    static getAboutPageDescription() {
        return aboutPageDetails.description;
    }

    static getEducation() {
        return aboutPageDetails.education;
    }

    static getTechnicalSkillsAsList() {
        const list = [];
        for (const [key, value] of Object.entries(TECHNICAL_SKILLS)) {
            list.push({
                category: key,
                value: Object.values(value)
            });
        }
        return list;
    }
}
export default ContentManager;