import React from 'react';
import ReactDOM from 'react-dom';

class ComponentNewProp extends React.Component {
    constructor() {
        super();
        
        this.update = this.update.bind(this);
        this.state = { increasing: false };
    }
    
    update() {
        ReactDOM.render(<ComponentNewProp val={this.props.val + 1} />, document.getElementById('app'));
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ increasing: nextProps.val > this.props.val })
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 2 === 0;
    }
    
    render() {
        console.log(this.state.increasing);
        
        return(
            <button onClick={this.update}>{this.props.val}</button>
        )
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
    }
}

ComponentNewProp.defaultProps = {
    val: 0  
}

export default ComponentNewProp;