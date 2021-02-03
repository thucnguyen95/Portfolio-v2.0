import { imagePaths, institutionKeys } from "../vars/vars"

class AssetManager {
    constructor() {

    }

    static baseDir() {
        return process.env.PUBLIC_URL;
    }

    static getLandingPageImagePath() {
        return `${AssetManager.baseDir()}${imagePaths.landingPage}`;
    }

    static getProfileImagePath() {
        return `${AssetManager.baseDir()}${imagePaths.profile}`;
    }

    static getInstitutionPath(key) {
        switch(key) {
        case institutionKeys.UCSD:
            return `${AssetManager.baseDir()}${imagePaths.ucsd}`;
        case institutionKeys.SDSU:
            return `${AssetManager.baseDir()}${imagePaths.sdsu}`;
        case institutionKeys.UCI:
            return `${AssetManager.baseDir()}${imagePaths.uci}`;
        }
        return "";
    }
}

export default AssetManager;