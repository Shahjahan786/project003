import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './Greeting'
import MediaCard from './MediaCard'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Greeting name = "Shahjahan Samoon"/>
    <MediaCard title = "Sample Card" body = "This is sample media card" imageUrl = "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"/>
    <MediaCard title = "Sample Card2 " body = "This is sample media card2" imageUrl = "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
