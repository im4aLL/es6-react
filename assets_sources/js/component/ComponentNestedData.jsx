import React from 'react';

class ComponentNestedData extends React.Component {
    
    render() {
        return (
            <Button>i <Heart />React</Button>
        )
    }
    
}

class Button extends React.Component {
    render(){
        return (
            <button>{this.props.children}</button>
        )
    }
}

const Heart = () => <span> love </span>;


export default ComponentNestedData;