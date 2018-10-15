import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
  // state = {
  //   posts: []
  // }
  //
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         posts: res.data.slice(0, 10)
  //       })
  //     })
  // }


  render() {
    //console.log(this.props)
    const { posts1 } = this.props;
    const postList = posts1.length ? (
      posts1.map(post => {
        return (
          <div className="post card post" key={post.id}>
            <img src={Pokeball} alt="a pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id + '/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
      ) : (
      <div className="center">No posts yet</div>
    )

    return (
      <div className='container home'>
        <h4 className="center">Home</h4>
        <div>{postList}</div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    posts1: state.posts1
  }
}


export default connect(mapStateToProps)(Home);