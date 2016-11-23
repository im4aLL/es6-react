import React from 'react';
import ReactDOM from 'react-dom';


class ComponentLifeCycleExample extends React.Component {
    
    constructor() {
        super();
        
        this.state = { val: 0 };
        this.update = this.update.bind(this);
    }
    
    update() {
        this.setState({ val: this.state.val + 1 });
    }
    
    componentWillMount() {
        console.log('mounting');
    }
    
    componentDidMount() {
        console.log('mount done');
    }
    
    componentWillUnmount() {
        console.log('Un mount');
    }
    
    render() {
        console.log('rendering!');
        return (
            <button onClick={this.update}>Clicked {this.state.val}</button>
        )
    }
    
}


class ComponentLifeCycle extends React.Component {
    
    constructor() {
        super();
    }
    
    mount() {
        ReactDOM.render(<ComponentLifeCycleExample />, document.getElementById('a'));
    }
    
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Un mount</button>
                <div id="a"></div>
            </div>
        )
    }
    
}


export default ComponentLifeCycle;