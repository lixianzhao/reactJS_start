import React from 'react';
import ReactDOM from 'react-dom';

/* 展示组件
主要负责组件内容如何展示
从props接收父组件传递来的数据
大多数情况可以通过函数定义组件声明 */
class MenuList extends React.Component{
    constructor (props) {
        super(props);
    }
    renderMoment ({author, title}) {
        return <li> {author}-{title} </li>;
    }
    render () {
        return <ul>{this.props.comments.map(this.renderMoment)}</ul>
    }
}

//容器组件
//主要关注组件数据如何交互
//拥有自身的state，从服务器获取数据，或与redux等其他数据处理模块协作
//需要通过类定义组件声明，并包含生命周期函数和其他附加方法
class MenuContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {comments : []};
    }
    componentDidMount () {

    }

    render () {
        let data = [
            {
                author:'lixianzhao',
                title: '12',
            },
            {
                author:'lixianzhao2',
                title: '12',
            }
        ]
        return <MenuList comments={data}/>
    }
}

ReactDOM.render(
    <MenuContainer/>,
    document.getElementById('show1')
)
