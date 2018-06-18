import { ADD_SINGLE_AUTHOR, DELETE_SINGLE_AUTHOR } from '../actions/actionTypes';

const authors = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {
    case ADD_SINGLE_AUTHOR:
      const { author } = action;
      return {
        ...state,
        byId: { ...state.byId, [author.id]: author },
        allIds: [...state.allIds, author.id]
      };
    case DELETE_SINGLE_AUTHOR:
      const { author_id } = action;
      const { [author_id]: id, ...rest_authors } = state.byId;

      return {
        ...state,
        byId: rest_authors,
        allIds: state.allIds.filter(id => id !== author_id)
      };
    default:
      return state;
  }
}

export default authors;