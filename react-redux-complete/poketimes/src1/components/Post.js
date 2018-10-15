import React, { Component } from 'react'
// import axios from 'axios'
import { deletePost } from '../actions/postActions'
import {connect} from "react-redux";

class Post extends Component {
  state = {
    post: {id: '4', title: "title",  body: "body"}
  }
  //
  // componentDidMount() {
  //   let id = this.props.match.params.postid;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({
  //
  //         post: res.data
  //       })
  //       console.log(res.data)
  //     })
  //   //console.log(this.state)
  // }

  handleClick = () => {
    this.props.deletePost1(this.props.post.id)
    this.props.history.push('/')
  }

  handleChangeBody = (e) => {
    this.setState({
      post: {...this.state.post, body: e.target.value, id: this.props.count + ''}
    })
    console.log('handleChangeBody here')
    console.log(this.state)
  }

  handleChangeTitle = (e) => {
  
    this.setState({
      post: {...this.state.post, title: e.target.value, id: this.props.count + ''}
    })
    console.log('handleChangeTitle here')
    console.log(this.state)
  }


  handleSubmit = (e) => {
    // this.setState({
    //   ...this.state,
    //   count: this.state.count + 1
    // })
    e.preventDefault();
    console.log("POST ID outside")
    // this.setState((preState, props) =>{
    //   return {
    //     ...preState,
    //     count: preState.count + 1
    //   }
    // })
    // this.setState((preState, props) => {
    //   console.log("POST ID inside")
    //   console.log(preState.count + 1 + '')
    //   return {
    //     ...preState, 
    //     post: {...preState.post, id: preState.count + 1 + ''}
    //   }
    // })

    this.props.submitPost1(this.state.post)
    console.log("handleSubmit post.js")
    console.log(this.state)
    this.props.history.push('/')
    // setTimeout(() => {
    //   this.props.history.push('/')
    // }, 2000)
  }



  render() {
    const post = this.props.post ? (
        <div className="container">
          <h4 className="center">{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
            <form onSubmit={this.handleSubmit}>        
              <label>
                Title:
                <input type="text" onChange={this.handleChangeTitle} />
              </label>
              <label>
                Body:
                <input type="text" onChange={this.handleChangeBody} />
              </label>
              <button>Submit</button>
            </form>
          </div>
        </div>
    ) : (
        <div className="container">
          <h4>No title</h4>
          <p>No body</p>
        </div>
    )
    return (
      <div>
        {post}
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps")
  console.log(ownProps)
  let id = ownProps.match.params.postid;
  
  // return {
  //   // post: state.posts.find(post=> post.id === id)
  //   post: state.posts1.find(post=>
  //   { return post.id === id })
  // }
  console.log("Post.js maptState2Props")
  console.log(state)
  return {
    post: state.posts.find(post=>
    { return post.id === id }),
    //count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deletePost1: (id) => {dispatch(deletePost(id))},
      submitPost1: (post) => {dispatch({type: 'SUBMIT_POST', post: post})}
    }
}

//store.dispatch({type: })

export default connect(mapStateToProps, mapDispatchToProps)(Post);