import React from 'react';

class ComponentState extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            txt: 'this is text from constructor state',
            cat: 0
        }
    }
    
    update(e) {
        
        this.setState({
            txt: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <input name="cat" type="text" onChange={this.update.bind(this)} />
                <h2>{ this.state.txt }</h2>
            </div>
        )
    }
    
}

export default ComponentState;