const userReducer = (state, action) => {
  switch(action.type) {
    case 'login':
      return { 
        uid: action.uid,
        username: action.username,
        email: action.email
      }
    case 'logout':
      return null
    default:
      return state
  }
}

export default userReducer