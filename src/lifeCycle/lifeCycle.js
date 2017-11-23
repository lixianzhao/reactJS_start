import React from 'react';
import ReactDOM from 'react-dom';

class Number extends React.Component {
    constructor (props) {
        super(props);
        console.log('子组件构造')
    }

    //挂在流程
    componentWillMount() {
        console.log('组件即将挂载');
    }
    componentDidMount() {
        console.log('组件已经挂载');
    }

    //更新流程
    componentWillReceiveProps(newProps) {
        console.log('组件即将接受新props');
        console.log('newProps :' + newProps);
    }

    shouldComponentUpdate(newProps, newState) {
        const result = true;
        
    }
}