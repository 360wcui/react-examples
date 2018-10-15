// import React from 'react'
// import axios from 'axios'
// import {Link} from "react-router-dom";
// import Pokeball from '../pokeball.png'
// import { connect } from 'react-redux'

// class Posts extends Component {
//   componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         console.log(res)
//         this.setState({
//           posts: res.data.slice(0, 10)
//         })
//       })
//   }
//   render() {
//     return (

//     )

//   }
// }

const initState = {
  // posts: axios.get('https://jsonplaceholder.typicode.com/posts')
  //       .then(res => {         
  //           return res.data.slice(0, 10)
  //       })
  count: 4,
  posts: [
    {id: '1', body: 'body 1', title: 'title 1'},
    {id: '2', body: 'body 2', title: 'title 2'},
    {id: '3', body: 'body 3', title: 'title 3'}
  ]
}

const rootReducer = (state = initState, action) => {
  // console.log("state");
  // console.log(state);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id)
    // this.setState({
    //   ...state,
    //   posts: newPosts
    // })
    return {
      ...state,
      posts: newPosts
    }
  } else if (action.type === 'SUBMIT_POST') {
    console.log("submit_post get here")
    console.log(action.post)
    console.log(state.posts)
    let newPost = action.post
    let newPosts =  [...state.posts, newPost] 
    console.log("new posts")
    console.log(newPosts) 
    return {
      ...state,
      count: state.count + 1,
      posts: newPosts      
    }
  }
  //return state
}

export default rootReducer;