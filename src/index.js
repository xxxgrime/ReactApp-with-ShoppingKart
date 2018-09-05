import React from "react";
import ReactDOM from "react-dom";
//import css from './file.css'
import css from './materializecss.min.css'
import {AppProvider,AppWrapper,Main} from './components/app.js'
import {data} from './components/data.js'
import {Form,ContextComponent} from './components/form.js'
import {Navbar} from './components/navbar'
import {BrowserRouter as Router} from 'react-router-dom' 






ReactDOM.render(<AppProvider><Main/></AppProvider>, document.getElementById("index"));
//ReactDOM.render       