import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {click:0, labels:[]};  // won't approach directly again since react wouldn't know about change
    }

    onClick(e) {
        let labels = this.state.labels.concat([this.state.click]);
        this.setState({click:this.state.click + 1, labels:labels});
    }

    onReset(e) {
        this.setState({click:0, labels:[]});
    }

    render() {

        // key needed for dynamic created children - will have to be unique for this rendering session
        let buttons = this.state.labels.map((value, i) => {
            return <Button key={value}>{value}</Button>;
        });

        return <ReactCSSTransitionGroup transitionName='app' transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}><Jumbotron className="-fluid custom" containerFluid={true}>
                    <h1>Building react user interfaces</h1>
                    <p>with bootstrap and SASS</p>
                    <p><Button className="-primary" href="http://02geek.com/" target="_blank">Other Way</Button>
                    <Button onClick={this.onReset} className="-danger-outline -sm" label='Reset' /></p>
            <Button onClick={this.onClick} className="-primary -lg -block">{this.state.click}</Button>
            <ReactCSSTransitionGroup transitionName='app' transitionEnterTimeout={5000} transitionLeaveTimeout={500}>
            {buttons}
            </ReactCSSTransitionGroup>
        </Jumbotron></ReactCSSTransitionGroup>;
    }
}