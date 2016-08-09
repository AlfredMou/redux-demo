import React from 'react';
import { render } from 'react-dom'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import BaseStyle from 'less/base.less';
import MStyle from 'less/moudle.less';
import PageStyle from 'less/page/index.less';

import {createStore} from 'redux';
import rootReducer from 'js/reducers/page/index.js';

import CommentInput from 'js/components/commentInput/commentInput.js';

let store = createStore(rootReducer,applyMiddleware(thunk));
//console.log(CommentList);
render(<CommentInput/>,document.getElementById('app'));


