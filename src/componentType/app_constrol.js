import React from 'react';
import ReactDOM from 'react-dom';

class CurrencyConvertor  extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            money : 100,
        }
    }

    handleInputChange(event) {
        this.setState({
            money: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>汇率转换</h2>
                <YuanInput money={this.state.money} handleInputChange = {this.handleInputChange.bind(this)}/>
                <MoneyConvert money = {this.state.money} rate="0.7" unit="美元"/>
                <MoneyConvert money = {this.state.money} rate="0.1" unit="欧元"/>
            </div>
        )
    }
}

class YuanInput extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange(event) {
        this.props.handleInputChange(event);
    }
    render() {
        return (
             <p>
                 <label>
                     人民币<input name="yuan" value={this.props.money} onChange={this.handleChange.bind(this)}/>
                 </label>
             </p>
        )
    }
}

class MoneyConvert extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        
        return (
            <lebal>
                {this.props.unit}
                <input value={this.props.money * this.props.rate} name=""/>
            </lebal>
        )
    }
}

ReactDOM.render(
    <CurrencyConvertor/>,
    document.getElementById('show1')
)