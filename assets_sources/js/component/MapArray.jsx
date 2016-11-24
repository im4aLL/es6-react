import React from 'react';

class MapArray extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            data: [
                {id: 1, name: 'Captain America WII' },
                {id: 2, name: 'Doctor Strange' },
                {id: 3, name: 'Scarlet Witch' },
                {id: 4, name: 'Voddo' }
            ]
        }
    }
    
    componentWillMount() {
        this.state.data.map((champ) => {
            console.log(champ.name); 
        });
    }
    
    render() {
        
        let rows = this.state.data.map((champ) => {
            return <Champion key={champ.id} data={champ} />;
        });
        
        return (
            <table>
                <tbody>
                    { rows }
                </tbody>
            </table>
        )
    }
    
}

const Champion = (props) => {
    return (
        <tr>
            <td>{ props.data.id }</td>
            <td>{ props.data.name }</td>
        </tr>
    )
}

export default MapArray;