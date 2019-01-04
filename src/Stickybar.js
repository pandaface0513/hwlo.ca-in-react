import React, { Component } from 'react';

import Lightbulb from './lightbulb.png';
import Darkbulb from './darkbulb.png';

class Stickybar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            lightbulb: false
        }

        this.lightbulbClick = this.lightbulbClick.bind(this);
    }

    lightbulbClick = (event) => {
        this.setState((prevState) => {
            return {
                lightbulb: !prevState.lightbulb
            }
        });
        this.props.onToggleLightbulb(this.state.lightbulb);
    }

    render() {
        let img = this.state.lightbulb ? Lightbulb : Darkbulb;

        return (
            <div id="sticky-bar">
                <button onClick={this.lightbulbClick}>
                    <img src={img} alt={img}/>
                </button>
            </div>
        )
    }
}

export default Stickybar;