import React, { Component } from 'react';

import './panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidUpdate() {
        document.getElementById("details-panel").scrollIntoView({ behavior: 'smooth', block: 'start', inline: "nearest" });
    }

    componentWillUpdate(nextProps) {
        if (nextProps.project !== this.state.data) {
            this.setState({ data: nextProps.project});
        }
    }

    render() {
        let details = this.state.data ? this.state.data.details : false;
        let title = details ? details.title : "";
        let mainImage = details ? details.image : "";
        let sectionList = details ? details.sections.map((section) => { 
            return <section id={section.title} key={section.title}>
                        <h3>{section.title ? section.title : ""}</h3>
                        {section.text ? <p>{section.text}</p> : ""}
                        {section.link ? <a href={section.link} target="_blank" rel="noopener noreferrer">{section.link}</a> : ""}
                        {section.image ? <img src={section.image} alt={section.title}/> : ""}
                   </section>;
        }) : [];

        return (
            <div id="details-panel" className="panel">
                <hr />
                <h1 className="title">{title}</h1>
                <img src={mainImage} alt={title} />
                {sectionList}
            </div>
        )
    }
}

export default Panel;