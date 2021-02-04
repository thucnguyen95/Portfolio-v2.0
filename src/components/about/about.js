import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

import AssetManager from "util/asset-manager";
import ContentManager from "util/content-manager";
import { EXPERTISE } from "models/technical-skills";
import './about.scss';

class About extends Component {
    /** =======================================================================
     * Lifecycle
     ======================================================================= */
    constructor(props) {
        super(props);

        // Retrieve constants from Asset- and ContentManager
        this.LANDING_PAGE_COVER_IMAGE = AssetManager.getLandingPageImagePath();
        this.PROFILE_IMAGE = AssetManager.getProfileImagePath();
        this.DESCRIPTION = ContentManager.getAboutPageDescription();
        this.EDUCATION = ContentManager.getEducation();
        this.SKILLS = ContentManager.getTechnicalSkillsAsList();
        this.PASTIMES = ContentManager.getPastimes();
    }

    /** =======================================================================
     * Render
     ======================================================================= */
    render() {
        return (
            <div id="about">
                <div className="cover-image-wrapper">
                    <img src={this.LANDING_PAGE_COVER_IMAGE} alt="Landing page cover image" />
                    <div className="dim-image"></div>
                </div>
                <div className="description-wrapper">
                    <div className="description-profile">
                        <div>
                            <img src={this.PROFILE_IMAGE} alt="Profile picture" />
                        </div>
                    </div>
                    <div className="description-blurb">
                        <h2>Thuc Nguyen</h2>
                        {this.DESCRIPTION.map((d) => (
                            <div>
                                <p className="description-year">{d.yearRange}</p>
                                <p className="description-text">{d.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mat-divider-3-4"></div>

                <div className="education-wrapper">
                    <h2>Education</h2>
                    <div className="card-wrapper">
                        {this.EDUCATION.map((e) => (
                            <div className="card">
                                <div>
                                    <img src={AssetManager.buildFullImagePath(e.image)} />
                                </div>
                                <div>
                                    <p>{e.institution}</p>
                                </div>
                                <div>
                                    <p>{e.location}</p>
                                    <p>{e.years}</p>
                                </div>
                                <div>
                                    <div>
                                        <p>{e.degree}</p>
                                        <p>{e.major}</p>
                                    </div>
                                    <div>
                                        <p>{e.gpa}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mat-divider-3-4"></div>

                <div className="technical-skills-wrapper">
                    <h2>Technical Skills</h2>
                    <div className="skills">
                        {this.SKILLS.map(c => (
                            <div>
                                <div className="category">
                                    <p>{c.category}</p>
                                </div>
                                <div className="skill-chips">
                                    {c.value.map((s) => (
                                        <div className={(s.expertise === EXPERTISE.ADVANCED) ? "chip-advanced" : "chip-proficient"}>
                                            <Chip label={s.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mat-divider-3-4"></div>

                <div className="pastimes-wrapper">
                    <h2>Pastimes</h2>
                    <div className="pastime-block">
                        <div className="pastime-image">
                            <img src={AssetManager.buildFullImagePath(this.PASTIMES.boba.image)} />
                        </div>
                        <div className="pastime-blurb">
                            <h3>{this.PASTIMES.boba.title}</h3>
                            {this.PASTIMES.boba.description.map(d => (
                                <p>{d}</p>
                            ))}
                        </div>
                    </div>
                    <div className="pastime-block">
                        <div className="pastime-blurb">
                            <h3>{this.PASTIMES.games.title}</h3>
                            {this.PASTIMES.games.description.map(d => (
                                <p>{d}</p>
                            ))}
                        </div>
                        <div className="pastime-image">
                            <img src={AssetManager.buildFullImagePath(this.PASTIMES.games.image)} />
                        </div>
                    </div>
                    <div className="pastime-block">
                        <div className="pastime-image">
                            <img src={AssetManager.buildFullImagePath(this.PASTIMES.outdoor.image)} />
                        </div>
                        <div className="pastime-blurb">
                            <h3>{this.PASTIMES.outdoor.title}</h3>
                            {this.PASTIMES.outdoor.description.map(d => (
                                <p>{d}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
