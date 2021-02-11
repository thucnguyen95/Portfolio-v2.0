import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import MenuIcon from '@material-ui/icons/Menu';

import './portfolio-drawer.scss';

class PortfolioDrawer extends Component {
    /** =======================================================================
     * Lifecycle
     ======================================================================= */
    constructor(props) {
        super(props);

        // Get all the skills from the categories
        let initialSkillsCheckboxState = {};
        for (let arr of Object.values(props.skills)) {
            for (let skill of arr) {
                initialSkillsCheckboxState[skill.name] = false;
            }
        }

        console.log('PRINTING ALL SKILLS:\n' + JSON.stringify(initialSkillsCheckboxState));

        // Initialize state
        this.state = {
            categoricalSkills: props.skills,
            skillsCheckboxState: initialSkillsCheckboxState,
            isDrawerOpened: true,
        }

        // Bind methods
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
    }

    toggleDrawer() {
        console.log('toggleDrawer()');
        this.setState((state) => ({
            isDrawerOpened: !state.isDrawerOpened
        }));
    }

    handleChecked(skill) {
        console.log('handleChecked() - Skill: ' + skill);
        let currentCheckboxState = {...this.state.skillsCheckboxState};
        currentCheckboxState[skill] = !currentCheckboxState[skill];

        this.setState((state) => ({
            skillsCheckboxState: currentCheckboxState
        }), () => {
            // Call parent function to handle filter change, passing only the checked skills
            console.log('Callback to setting state');
            const checkedSkills = Object.entries(this.state.skillsCheckboxState).filter(([k, v]) => v).map(([k, v]) => k);
            this.props.onFilterUpdate(checkedSkills);
        });
    }

    /** =======================================================================
     * Render
     ======================================================================= */
    render() {
        return (
            <div id="portfolio-drawer">
                <div className="filter-header">
                    <p>Filters</p>
                    <IconButton aria-label="toggle menu" onClick={this.toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className="filter-body">
                    {Object.keys(this.state.categoricalSkills).map((category) => (
                        <div className="filter-item">
                            <p className="filter-category">{category}</p>
                            {this.state.categoricalSkills[category].map((skill) => (
                                <div className="filter-skill">
                                    <Checkbox 
                                        size='small' 
                                        checked={this.state.skillsCheckboxState[skill.name]}
                                        onChange={(e) => this.handleChecked(skill.name, e)}>
                                    </Checkbox>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PortfolioDrawer;
