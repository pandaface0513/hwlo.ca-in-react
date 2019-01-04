import React, { Component } from 'react';
import './Header.css';

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
        return(
            <header>
                <img src={this.state.headshot} alt="headshot"/>
                <h2>{this.state.name}</h2>
                <p>{this.state.tagline}</p>
                <hr />
            </header>
        )
    }
}

export default Header;