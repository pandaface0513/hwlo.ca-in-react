import React, { Component } from 'react';
import './grid.css';
import Project from './Project';
import Panel from './Panel';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            currentProject: null
        };

        this.handleProjectClick = this.handleProjectClick.bind(this);
    }

    handleProjectClick(selectedProject) {
        if (this.state.currentProject !== selectedProject) {
            this.setState({currentProject: selectedProject});
        }
    }

    componentDidMount() {
        fetch("./projects.json").then((response) => {
            response.json().then((data) => {
                this.setState({
                    projects: data.projects
                });
            });
        }).catch((error) => { console.log('Fetch Error :-S', error)});
    }

    render() {
        let projects = this.state.projects;
        let projectList = projects.map((project) => { 
            return <Project key={project.name} data={project} handleProjectClick={this.handleProjectClick}/>;
        });

        return(
            <React.Fragment>
                <div id="projects-container">
                    {projectList}
                </div>
                <Panel project={this.state.currentProject}/>
            </React.Fragment>
        );
    }
}

export default Content;