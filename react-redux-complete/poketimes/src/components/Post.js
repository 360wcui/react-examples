import React, { Component } from 'react'
import { deletePost } from '../actions/postActions'
import {connect} from "react-redux";

class Post extends Component {
  state = {
    post: {id: '99', title: "title",  body: "body"}
  }

  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')
  }

  handleChangeBody = (e) => {
    this.setState({
      post: {...this.state.post, body: e.target.value, id: this.props.count + ''}
    })
    // console.log('handleChangeBody here')
    // console.log(this.state)
  }

  handleChangeTitle = (e) => {  
    this.setState({
      post: {...this.state.post, title: e.target.value, id: this.props.count + ''}
    })
    // console.log('handleChangeTitle here')
    // console.log(this.state)
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
        post: {...this.state.post, id: this.state.post.title}
      }          
    )
    this.props.submitPost(this.state.post)
    this.props.history.push('/')
  }
  render() {
    const post = this.props.post ? (
        <div className="container">
          <h4 className="center">{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
          </div>
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
  let id = ownProps.match.params.postid;
  if (id !== null) {
    return {
      // post: state.posts.find(post=> post.id === id)
      post: state.posts1.find(post=>
      { return post.id === id })
    }
  } else {
    return {
      post: this.state.post
    }
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    // deletePost: (id) => {dispatch({type: 'DELETE_POST', id: id})}
    submitPost: (post) => {dispatch({type: 'SUBMIT_POST', post: post})},
    deletePost: (id) => {dispatch(deletePost(id))}
  }

}

//store.dispatch({type: })

export default connect(mapStateToProps, mapDispatchToProps)(Post);