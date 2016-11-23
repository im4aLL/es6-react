import React from 'react';
import ReactDOM from 'react-dom';

class ComponentRefReuse extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            red: 0
        }
        
        this.update = this.update.bind(this);
    }
    
    update(e) {

        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.input).value
        });
        
    }
    
    render() {
        return (
            <div>
                <NumInput 
                    ref="red"
                    update={this.update} />
                    
                {this.state.red}
            </div>
        )
    }
    
}

class NumInput extends React.Component {
    
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input 
                    ref="input"
                    type={this.props.type} 
                    min={this.props.min}
                    max={this.props.max} 
                    onChange={this.props.update} 
                />
            </div>
        )
    }
}

NumInput.defaultProps = {
    type: 'range',
    min: 0,
    max: 255,
    label: 'Label'
}

export default ComponentRefReuse;