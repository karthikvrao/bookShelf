import { combineReducers } from 'redux';
import {
  ADD_SINGLE_AUTHOR,
  DELETE_SINGLE_AUTHOR,
  ADD_SINGLE_BOOK,
  DELETE_SINGLE_BOOK,
} from '../actions/actionTypes';

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
};

const books = (state = { byId: {}, allIds: [] }, action) => {
  switch (action.type) {

    case ADD_SINGLE_BOOK:
      const { book } = action;

      return {
        ...state,
        byId: { ...state.byId, [book.id]: book },
        allIds: [...state.allIds, book.id]
      };

    case DELETE_SINGLE_BOOK:
      const { book_id } = action;
      const { [book_id]: id, ...rest_books } = state.byId;

      return {
        ...state,
        byId: rest_books,
        allIds: state.allIds.filter(id => id !== book_id)
      };

    default:
      return state;
  }
};

export default combineReducers({
  authors,
  books
});