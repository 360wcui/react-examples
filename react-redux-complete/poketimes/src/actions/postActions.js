export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const submitPost = (post) => {
  return {
    type: 'SUBMIT_POST',
    post
  }
}