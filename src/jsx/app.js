import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component{
    constructor (props) {
        super(props);
    }
    render() { 
        return <ul>lixianzhao </ul>
      } 
}
ReactDOM.render(
    <Test/>,
    document.getElementById('show1')
)