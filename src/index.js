import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const index=()=>{
  return (<>
  <App/>
  </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
export default index
