import { ADD_SINGLE_BOOK, DELETE_SINGLE_BOOK } from './actionTypes';

export const addSingleBook = book => ({ type: ADD_SINGLE_BOOK, book });
export const deleteSingleBook = book_id => ({ type: DELETE_SINGLE_BOOK, book_id });
