import React from "react";
import ReactDOM from "react-dom";

import './materializecss.min.css'
import './styles.css'
import '../animate.css'

import {AppProvider,Main} from './components/app.js'





    
ReactDOM.render(<AppProvider><Main/></AppProvider>, document.getElementById("index"));
   