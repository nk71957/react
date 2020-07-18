import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const fname= "Nishant";
const lname= "Kumar";
var d = new Date().toLocaleDateString();
var t =new Date().toLocaleTimeString();
const pic1 ="https://picsum.photos/200/300";
const pic2 ="https://picsum.photos/250/300";
const pic3 ="https://picsum.photos/270/300";
const pic4 ="https://picsum.photos/290/300";
const link ="https://google.com";
ReactDOM.render(
    <>
        <React.StrictMode>
            <App />
        </React.StrictMode>
        <h1 contentEditable="true" className="heading" >{`Welcome ${fname} ${lname}`}</h1>
        <p>today date is : {d}</p>
        <p>current time is : {t}</p>
        <img className="img" src={pic1} alt="randomimage"/>
        <img className="img" src={pic2} alt="randomimage"/>
        <a href={link} target="_blank" rel="">
            <img className="img" src={pic3} alt="randomimage"/>
        </a>
        <img className="img" src={pic4} alt="randomimage"/>

    </>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
