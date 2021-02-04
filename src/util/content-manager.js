import { aboutPageDetails, networkingLinks, contactDetails } from "vars/vars";
import { TECHNICAL_SKILLS } from "models/technical-skills";

class ContentManager {
    constructor() {

    }

    static getLinks() {
        return networkingLinks;
    }

    static getLinksAsList() {
        return Object.values(networkingLinks);
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

    static getPastimes() {
        return aboutPageDetails.pastimes;
    }

    static getContactDetails() {
        return contactDetails;
    }
}
export default ContentManager;