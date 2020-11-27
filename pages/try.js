import React, { Component } from 'react'
import axios from 'axios'
import ReactDom from 'react-dom';

class Try extends Component {
    constructor(opt) {
        super(opt);
        this.state = {
            newsList: []
        }
    }

    componentDidMount() {
        axios.get("api/hello").then(res => {
            console.log(res.data);
        });
    }
    render() {
        return (
            "rest"
        )
    }
}

export default Try;