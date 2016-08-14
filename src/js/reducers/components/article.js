import  {ADD_SUPPORT,DEL_SUPPORT} from "js/constants/article.js";
import {Map} from 'immutable';

let defaultContent={
	id:"sadaeq41323234sd",
	title:"Redux 介绍",
	content:'<h2 id="articleHeader0">Redux 介绍</h2> <blockquote><p>本文主要是对 <a href="http://rackt.github.io/redux/" target="_blank">Redux 官方文档</a> 的梳理以及自身对 Redux 的理解。</p></blockquote> <h3 id="articleHeader1">单页面应用的痛点</h3> <p>对于复杂的单页面应用，状态（state）管理非常重要。state 可能包括：服务端的响应数据、本地对响应数据的缓存、本地创建的数据（比如，表单数据）以及一些 UI 的状态信息（比如，路由、选中的 tab、是否显示下拉列表、页码控制等等）。如果 state 变化不可预测，就会难于调试（state 不易重现，很难复现一些 bug）和不易于扩展（比如，优化更新渲染、服务端渲染、路由切换时获取数据等等）。</p> <p>Redux 就是用来确保 state 变化的可预测性，主要的约束有：</p> <ul> <li><p>state 以单一对象存储在 store 对象中</p></li> <li><p>state 只读</p></li> <li><p>使用纯函数 reducer 执行 state 更新</p></li> </ul> <blockquote><p>state 为单一对象，使得 Redux 只需要维护一棵状态树，服务端很容易初始化状态，易于服务器渲染。state 只能通过 dispatch(action) 来触发更新，更新逻辑由 reducer 来执行。</p></blockquote> <h3 id="articleHeader2">Actions、Reducers 和 Store</h3> <p>action 可以理解为应用向 store 传递的数据信息（一般为用户交互信息）。在实际应用中，传递的信息可以约定一个固定的数据格式，比如: <a href="https://github.com/acdlite/flux-standard-action/" target="_blank">Flux Standard Action</a>。    <br>为了便于测试和易于扩展，Redux 引入了 Action Creator:</p> <div class="widget-codetool" style="display:none;">       <div class="widget-codetool--inner">       <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>       <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="function addTodo(text) {   return {     type: ADD_TODO,     text,   } } store.dispatch(addTodo(text)) " title="" data-original-title="复制"></span>       <span type="button" class="saveToNote code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="放进笔记"></span>       </div>       </div><pre class="hljs javascript"><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addTodo</span><span class="hljs-params">(text)</span> </span>{   <span class="hljs-keyword">return</span> {     type: ADD_TODO,     text,   } } store.dispatch(addTodo(text)) </code></pre> <blockquote><p>dispatch(action) 是一个同步的过程：执行 reducer 更新 state -&gt; 调用 store 的监听处理函数。如果需要在 dispatch 时执行一些异步操作（fetch action data），可以通过引入 Middleware 解决。</p></blockquote> <p>reducer 实际上就是一个函数：<code>(previousState, action) =&gt; newState</code>。用来执行根据指定 action 来更新 state 的逻辑。通过 combineReducers(reducers) 可以把多个 reducer 合并成一个 root reducer。</p> <blockquote><p>reducer 不存储 state, reducer 函数逻辑中不应该直接改变 state 对象, 而是返回新的 state 对象（可以考虑使用 <a href="http://facebook.github.io/immutable-js/" target="_blank">immutable-js</a>）。</p></blockquote> <p>store 是一个单一对象：</p> <ul> <li><p>管理应用的 state</p></li> <li><p>通过 <code>store.getState()</code> 可以获取 state</p></li> <li><p>通过 <code>store.dispatch(action)</code> 来触发 state 更新</p></li> <li><p>通过 <code>store.subscribe(listener)</code> 来注册 state 变化监听器</p></li> <li><p>通过 <code>createStore(reducer, [initialState])</code> 创建</p></li> </ul> <blockquote><p>在 Redux 应用中，只允许有一个 store 对象，可以通过 combineReducers(reducers) 来实现对 state 管理的逻辑划分（多个 reducer）。</p></blockquote> <h3 id="articleHeader3">Middleware</h3> <p>middleware 其实就是高阶函数，作用于 dispatch 返回一个新的 dispatch（附加了该中间件功能）。可以形式化为：<code>newDispatch = middleware1(middleware2(...(dispatch)...))</code>。</p> <div class="widget-codetool" style="display:none;">       <div class="widget-codetool--inner">       <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>       <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="// thunk-middleware export default function thunkMiddleware({ dispatch, getState }) {     return next => action =>         typeof action === "function" ? action(dispatch, getState) : next(action) } " title="" data-original-title="复制"></span>       <span type="button" class="saveToNote code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="放进笔记"></span>       </div>       </div><pre class="hljs php"><code><span class="hljs-comment">// thunk-middleware</span> export <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">thunkMiddleware</span><span class="hljs-params">({ dispatch, getState })</span> </span>{     <span class="hljs-keyword">return</span> next =&gt; action =&gt;         typeof action === <span class="hljs-string">"function"</span> ? action(dispatch, getState) : next(action) } </code></pre> <p>通过 thunk-middleware 我们可以看出中间件的一般形式：中间件函数接受两个参数参数： dispatch 和 getState（也就是说中间件可以获取 state 以及 <code>dispatch new action</code>）。中间件一般返回 <code>next(action)</code>（thunk-middleware 比较特殊，它用于 dispatch 执行异步回调的 action）。store 的创建过程如下：</p> <div class="widget-codetool" style="display:none;">       <div class="widget-codetool--inner">       <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>       <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="const reducer = combineReducers(reducers) const finalCreateStore = applyMiddleware(promiseMiddleware, warningMiddleware,     loggerMiddleWare)(createStore) const store = finalCreateStore(reducer) " title="" data-original-title="复制"></span>       <span type="button" class="saveToNote code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="放进笔记"></span>       </div>       </div><pre class="hljs coffeescript"><code><span class="hljs-reserved">const</span> reducer = combineReducers(reducers) <span class="hljs-reserved">const</span> finalCreateStore = applyMiddleware(promiseMiddleware, warningMiddleware,     loggerMiddleWare)(createStore) <span class="hljs-reserved">const</span> store = finalCreateStore(reducer) </code></pre> <h3 id="articleHeader4">异步 Actions</h3> <p>单页面应用中充斥着大量的异步请求（ajax）。dispatch(action) 是同步的，如果要处理异步 action，需要使用一些中间件。    <br><a href="https://github.com/gaearon/redux-thunk/" target="_blank">redux-thunks</a> 和 <a href="https://github.com/aclite/redux-promise/" target="_blank">redux-promise</a> 分别是使用异步回调和 Promise 来解决异步 action 问题的。</p> <h3 id="articleHeader5">Redux 和传统 Flux 框架的比较</h3> <p><img data-src="/img/bVoR1E" src="https://sfault-image.b0.upaiyun.com/193/899/1938998113-55dfecaf463d1_articlex" style="cursor: pointer; display: inline;"><br><img data-src="/img/bVoR1G" src="https://sfault-image.b0.upaiyun.com/851/939/851939978-55dfece9d39af_articlex" style="cursor: pointer; display: inline;"></p> <p>图来自 <a href="http://staltz.com/unidirectional-user-interface-architectures.html" target="_blank">UNIDIRECTIONAL USER INTERFACE ARCHITECTURES</a></p> <h3 id="articleHeader6">Redux 和 React</h3> <p>Redux 和 React 是没有必然关系的，Redux 用于管理 state，与具体的 View 框架无关。不过，Redux 特别适合那些 <code>state =&gt; UI</code> 的框架（比如：React, Deku）。</p> <p>可以使用 <a href="https://github.com/rackt/react-redux/" target="_blank">react-redux</a> 来绑定 React，<code>react-redux</code> 绑定的组件我们一般称之为 <code>smart components</code>，<a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0/" target="_blank">Smart and Dumb Components</a> 在 <code>react-redux</code> 中区分如下：</p> <table> <thead><tr> <th></th>             <th>Location</th>             <th>Use React-Redux</th>             <th>To read data, they</th>             <th>To change data, they</th>         </tr></thead> <tbody> <tr> <td>“Smart” Components</td>           <td>Top level, route handlers</td>           <td>Yes           </td> <td>Subscribe to Redux state</td>           <td>Dispatch Redux actions</td>         </tr> <tr> <td>“Dumb” Components</td>           <td>Middle and leaf components</td>           <td>No           </td> <td>Read data from props</td>           <td>Invoke callbacks from props</td>         </tr> </tbody> </table> <blockquote><p>简单来看：Smart component` 是连接 Redux 的组件（@connect），一般不可复用。Dumb component 是纯粹的组件，一般可复用。<br>两者的共同点是：无状态，或者说状态提取到上层，统一由 redux 的 store 来管理。redux state -&gt; Smart component -&gt; Dumb component -&gt; Dumb component（通过 props 传递）。在实践中，少量 Dumb component 允许自带 UI 状态信息（组件 unmount 后，不需要保留 UI 状态）。<br>值得注意的是，Smart component 是应用更新状态的最小单元。实践中，可以将 route handlers 作为 Smart component，一个 Smart component 对应一个 reducer。</p></blockquote>',
	suport:0,
	isSuport:false,
	author:"ustccjw",
	date:" 2015年08月27日"
}

const Article=(state=defaultContent,action)=>{
	let newState=Object.assign({},state);
	switch (action.type){
		case ADD_SUPPORT:
			if(!state.isSuport){
				newState.isSuport=true;
				newState.suport++;
			}
			return newState;
		case DEL_SUPPORT:
			if(state.isSuport){
				newState.isSuport=false;
				newState.suport--;
			}
			return newState;
		default:
			return newState;
	}
}

export default Article