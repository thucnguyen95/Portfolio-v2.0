import { aboutPageDetails, networkingLinks, contactDetails } from "vars/vars";
import { CATEGORICAL_SKILLS } from "models/technical-skills";

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

    static getPastimes() {
        return aboutPageDetails.pastimes;
    }

    static getContactDetails() {
        return contactDetails;
    }
}
export default ContentManager;