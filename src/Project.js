import React, { Component } from 'react';

class Project extends Component {
    constructor (props) {
        super(props);

        this.state = {
            project: props.data
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.handleProjectClick(this.state.project);
    }

    render() {
        let project = this.state.project;

        return (
            <div onClick={this.handleClick} className="project">
                <img src={project ? project.image : ""} alt={project ? project.name : ""}/>
                <h4>{project ? project.name : ""}</h4>
            </div>
        )
    }
}

export default Project;