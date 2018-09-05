import React from "react";
import ReactDOM from "react-dom";
//import css from './file.css'
import css from './materializecss.min.css'
import {AppProvider,Main,} from './components/app.js' 






ReactDOM.render(<AppProvider><Main/></AppProvider>, document.getElementById("index"));
//ReactDOM.render       
