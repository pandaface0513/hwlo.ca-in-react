import React, { Component } from 'react';

import './grid.css';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };
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

    componentDidUpdate(oldProps) {

    }

    render() {
        let projects = this.state.projects;
        let projectList = projects.map((project) => { 
            return <div key={project.name} className="project">
                        <img src={project.image} alt={project.name}/>
                        <h4>{project.name}</h4>
                    </div>;
        });

        return(
            <div id="projects-container">
                {projectList}
            </div>
        );
    }
}

export default Content;