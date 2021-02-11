import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

import AssetManager from "util/asset-manager";
import { CATEGORICAL_SKILLS, EXPERTISE } from "models/technical-skills";
import { PROJECTS } from "models/projects";
import PortfolioDrawer from './portfolio-drawer';
import './portfolio.scss';

class Portfolio extends Component {
    /** =======================================================================
     * Lifecycle
     ======================================================================= */
    constructor(props) {
        super(props);

        this.IRELIA_BOT_IMAGE = AssetManager.buildFullImagePath('/anime-manga-02.jpg');
        this.PROJECTS_AS_LIST = Object.values(PROJECTS);
        this.state = {
            currentProjectsToDisplay: this.PROJECTS_AS_LIST,
        };

        // Bind methods
        this.handleExpandCard = this.handleExpandCard.bind(this);
    }

    handleExpandCard() {

    }

    onFilterUpdate(checkedSkills) {
        console.log('onFilterUpdate()');
        console.log('CHECKED SKILLS: ' + JSON.stringify(checkedSkills));
    }

    /** =======================================================================
     * Render
     ======================================================================= */
    render() {
        return (
            <div id="portfolio">
                <div>
                    <h2>Portfolio</h2>
                    <div className="sort-wrapper">
                        <p>Sort by:</p>
                        <p>Date</p>
                        <p>Name</p>
                    </div>
                </div>
                <div className="portfolio-body">
                    <div className="drawer">
                        <PortfolioDrawer skills={CATEGORICAL_SKILLS} onFilterUpdate={this.onFilterUpdate}></PortfolioDrawer>
                    </div>

                    <div className="grid">
                        <p className="grid-title">All Applications</p>
                        <Grid container className="grid-container" justify="flex-start" spacing={2}>
                            {this.state.currentProjectsToDisplay.map((project) => (
                                <Grid item xs={3}>
                                    {/* // <Grid key={value} item>
                                    //     <Paper className="grid-item" />
                                    // </Grid> */}
                                    <Card className="card-project" elevation={4}>
                                        <CardHeader
                                            title={project.name}
                                            subheader={`${new Intl.DateTimeFormat('en-US', {month: 'long'}).format(project.startDate)} ${project.startDate.getFullYear()} - ${new Intl.DateTimeFormat('en-US', {month: 'long'}).format(project.endDate)} ${project.endDate.getFullYear()}`}/>
                                        <CardMedia
                                            className="card-media"
                                            image={this.IRELIA_BOT_IMAGE}
                                            title={project.name}/>
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            {project.description}
                                            </Typography>
                                            <div className="card-chips">
                                                {project.skills.map((skill) => (
                                                    <div className={(skill.expertise === EXPERTISE.ADVANCED) ? "chip-advanced" : "chip-proficient"}>
                                                        <Chip label={skill.name} />
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton
                                            className="expand"
                                            onClick={this.handleExpandCard}
                                            aria-label="show more">
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        {/* <div className="grid-body">
                            <div className="grid-item">

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
