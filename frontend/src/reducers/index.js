import { ADD_SINGLE_AUTHOR } from '../actions/actionTypes';

const authors = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case ADD_SINGLE_AUTHOR:
      const { author } = action;
      return {
        ...state,
        byId: { ...state.byId, [author.id]: author },
        allIds: [...state.allIds, author.id]
      };

    default:
      return state;
  }
}

export default authors;