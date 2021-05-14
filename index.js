import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import Main from './Component/Main';
import './index.css';



 let root = document.querySelector('#root')
 ReactDom.render(<Main/>, root)