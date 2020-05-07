import update from 'immutability-helper';

const initialState = {
  userList: [],
  postList: [],
  commentList: [],
  currentUserId: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return update(state, {
        userList: { $set: action.data.userList },
        postList: { $set: action.data.postList },
        commentList: { $set: action.data.commentList },
      })

    case 'UPDATE_CURRENT_USER_ID':
      return update(state, { currentUserId: { $set: action.userId } })

    default:
      return state;
  }
};

export default rootReducer;