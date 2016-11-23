import React from 'react';
import ReactDOM from 'react-dom';

class ComponentRef extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            red: 25,
            green: 25,
            blue: 25
        }
        
        this.update = this.update.bind(this);
    }
    
    update(e) {
        
//        this.setState({
//            red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
//            green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
//            blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value
//        });

        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        });
        
    }
    
    render() {
        return (
            <div>
                <Slider ref="red" update={this.update} /> {this.state.red}
                <br/>
                <Slider ref="green" update={this.update} /> {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update} /> {this.state.blue}
            </div>
        )
    }
    
}

//class Slider extends React.Component {
//    render() {
//        return (
//            <div>
//                <input ref="input" type="range" min="0" max="25" onChange={this.props.update} />
//            </div>
//        )
//    }
//}

class Slider extends React.Component {
    render() {
        return (
            <input ref="input" type="range" min="0" max="25" onChange={this.props.update} />
        )
    }
}

export default ComponentRef;