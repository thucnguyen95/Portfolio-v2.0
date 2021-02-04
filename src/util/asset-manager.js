import { imagePaths, institutionKeys } from "../vars/vars"

class AssetManager {
    constructor() {

    }

    static baseDir() {
        return process.env.PUBLIC_URL;
    }

    static imagesDir() {
        return `${AssetManager.baseDir()}/images`;
    }

    static getLandingPageImagePath() {
        return `${AssetManager.imagesDir()}${imagePaths.landingPage}`;
    }

    static getProfileImagePath() {
        return `${AssetManager.imagesDir()}${imagePaths.profile}`;
    }

    static buildFullImagePath(imagePath) {
        return `${AssetManager.imagesDir()}${imagePath}`;
    }

    static getContactImagePath() {
        return `${AssetManager.imagesDir()}${imagePaths.contact}`;
    }
}

export default AssetManager;