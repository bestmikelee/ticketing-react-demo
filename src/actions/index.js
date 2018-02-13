import * as types from "../constants/ActionTypes";

export const addTicket = (id, subject, body) => ({
  type: types.ADD_TICKET,
  subject,
  body,
  id
});
export const deleteTicket = id => ({ type: types.DELETE_TICKET, id });
export const editTicket = (id, subject, body) => ({
  type: types.EDIT_TICKET,
  id,
  subject,
  body
});
export const closeTicket = id => ({ type: types.CLOSE_TICKET, id });

export const replyTicket = ({ id, body, user, submitted }) => ({
  type: types.REPLY_TICKET,
  id,
  body,
  user,
  submitted
});
