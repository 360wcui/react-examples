

const initState = {
  count: 4,
  posts1: [
    {id: '1', body: 'body 1', title: 'title 1'},
    {id: '2', body: 'body 2', title: 'title 2'},
    {id: '3', body: 'body 3', title: 'title 3'}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts1.filter(post => post.id !== action.id)
    // this.setState({
    //   ...state,
    //   posts: newPosts
    // })
    return {
      ...state,
      posts1: newPosts

    }
  } else if (action.type === 'SUBMIT_POST') {
    let newPost = action.post
    newPost.id = state.count + ''
    state.count++
    let newPosts = [...state.posts1, newPost]
    return {
      ...state,
      posts1: newPosts
    }
  }
  return state;
}

export default rootReducer;