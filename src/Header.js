import React, { Component } from 'react';
import ReactHintFactory from 'react-hint';

import './Header.css';

const ReactHint = ReactHintFactory(React);

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headshot: "",
            name: "",
            tagline: ""
        }
    }

    componentDidMount() {
        fetch('./app.json').then((response) => {
            response.json().then((data) => {
                this.setState({
                    headshot: data.headshot,
                    name: data.name,
                    tagline: data.tagline
                })
            });
        })
    }

    render() {
        let tagline = this.state.tagline;
        tagline.replace(/['"]+/g, '');
        
        return(
            <header>
                <ReactHint autoPosition events />
                <img src={this.state.headshot} alt="headshot"/>
                <h1>{this.state.name}</h1>
                <p dangerouslySetInnerHTML={{ __html: this.state.tagline }}></p>
                <hr />
            </header>
        )
    }
}

export default Header;