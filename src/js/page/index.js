import React from 'react';
import { render } from 'react-dom'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import BaseStyle from 'less/base.less';
import MStyle from 'less/moudle.less';
import PageStyle from 'less/page/index.less';

import {createStore,applyMiddleware} from 'redux';
import rootReducer from 'js/reducers/page/index.js';

import Comment from 'js/components/comment/comment.js';
import Article from 'js/components/articleContent/articleContent.js';
import UserBar from 'js/components/userBar/UserBar.js';

let store = createStore(rootReducer,applyMiddleware(thunk));

render( <div>
			<Provider store={store}>
	            <UserBar/>
	        </Provider>
	        <Provider store={store}>
	            <Article/>
	        </Provider>
	        <Provider store={store}>
	            <Comment/>
	        </Provider>
    	</div>,document.getElementById('app'));


