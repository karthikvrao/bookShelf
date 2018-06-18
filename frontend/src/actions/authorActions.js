import { ADD_SINGLE_AUTHOR, DELETE_SINGLE_AUTHOR } from './actionTypes';

export const addSingleAuthor = author => ({ type: ADD_SINGLE_AUTHOR, author });
export const deleteSingleAuthor = author_id => ({ type: DELETE_SINGLE_AUTHOR, author_id });
