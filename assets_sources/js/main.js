//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './component/App';
//
//ReactDOM.render(<App />, document.getElementById('app'));
//
//import { sumTwo } from './modules/math';
//
//console.log( sumTwo(1, 2) );


function* test() {
    console.log('Test 1');
    yield '111111';
    console.log('Test 2');
    
    return true;
}

let t = test();

while(t.next().done === false) {
    console.log(t.next());
}
