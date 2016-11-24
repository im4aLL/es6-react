import React from 'react';
import ReactDOM from 'react-dom';
import $http from '../modules/ajax';

class Ajax extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            text: null,
            response: null
        };
        
        this.update = this.update.bind(this);
    }
    
    update() {
        this.setState({ text: ReactDOM.findDOMNode(this.refs.input).value }, () => {
            this.fetchData(this.state.text);
        }); 
    }
    
    render() {
        var lists = null;
        
        if( this.state.response && this.state.response.data ) {     
            lists = this.state.response.data.map((result) => {
                return <List key={result.id} text={result.text}></List>
            })
        }
        
        return (
            
            <div>
                <h1>React ajax</h1>
                
                <br/>
                <Input update={this.update} ref="input" />
                
                <ul>
                    {lists}
                </ul>
            </div>
            
        )
    }
    
    fetchData(q = 'red devil') {
        if(q.length < 2) {
            return false;
        }
        
        let uri = `http://local.harriken.dev/api/v4/find?q=${q}`;
        
        $http.ajaxGet(uri)
            .then(JSON.parse)
            .then((data) => this.setState({ response: data }));
    }
    
    componentWillMount() {
        this.setState({ response: null });
    }
    
}

class Input extends React.Component {

    render() {
        return (
            <input type="text" onChange={this.props.update} />
        )    
    }

}

const List = (props) => {
    return (
        <li>{props.text}</li>
    )
}

export default Ajax;