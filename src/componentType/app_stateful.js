//有状态组件和 无状态组件

import React from 'react';
import ReactDOM from 'react-dom';

class StatefulLink extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            active: true,
        };
    }
    handleClick () {
        this.setState({
            active: !this.state.active
        })
    }
    render () {
        return <a style={{clor: this.state.active ? 'red' : 'black'}}>StateFul</a>
    }
}

class StateLessLink extends React.Component {
    constructor (props) {
        super(props);
    }
    handleItemClick() {
        this.props.handleClick(this.props.router);
    }
    //下面的style = {} 中放的是一个对象
    render() {
        const active = this.props.activeRouter === this.props.router;
        return (
            <li>
                <a style={{color: active? "red" : 'black'}} onClick={this.handleItemClick.bind(this)}>StateLess</a>
            </li>
        )
    }
}

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            activeRouter: true,
        }
    }
    handleClick(router){
        this.setState({activeRouter: router})
    }
    render() {
        return (
            <ul>
                <StateLessLink activeRouter={this.state.activeRouter} router='home' handleClick={this.handleClick.bind(this)}/>
                <StateLessLink activeRouter={this.state.activeRouter} router='blog' handleClick={this.handleClick.bind(this)}/>
                <StateLessLink activeRouter={this.state.activeRouter} router='about' handleClick={this.handleClick.bind(this)}/>
            </ul>
        )
    }
}

ReactDOM.render(
    <Nav/>,
    document.getElementById('show1')
)