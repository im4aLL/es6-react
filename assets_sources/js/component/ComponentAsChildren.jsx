import React from 'react';


class ComponentAsChildren extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            txt: 'this is text from constructor state',
            cat: 0
        }
        
        this.update = this.update.bind(this);
    }
    
    update(e) {
        
        this.setState({
            txt: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Widget txt={this.state.txt} update={this.update} />
            </div>
        )
    }
    
}

const Widget = (props) => {
    return (
        <div>
            <input type="text" onChange={props.update} />
            <h2>{ props.txt }</h2>
        </div>
    )
}

export default ComponentAsChildren;