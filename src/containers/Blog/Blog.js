import React, { Component } from 'react';
import { Route,  NavLink }from 'react-router-dom'

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                exact> Home</NavLink></li> 
                            <li><NavLink to={{
                                pathname: '/newPost',
                                hash: '#submit',
                                search: '?quicksumbit=true'
                                          }}> NewPost</NavLink></li> 
                        </ul> 
                    </nav>
                </header>
                    <Route path="/" exact component={Posts}/> 
                    <Route path="/newPost" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;