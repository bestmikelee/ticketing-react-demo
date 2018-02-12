import {
  ADD_TICKET,
  DELETE_TICKET,
  EDIT_TICKET,
  CLOSE_TICKET,
  PICK_TICKET,
  REPLY_TICKET
} from "../constants/ActionTypes";

const initialState = {
  tickets: [
    {
      body: "TEST BODY",
      subject: "TEST SUBJECT LINE",
      submitted: Date.now(),
      lastEdited: Date.now(),
      closed: false,
      replies: [],
      id: 0
    }
  ],
  currentTicket: {}
};

export default function tickets(state = initialState, action) {
  switch (action.type) {
    case ADD_TICKET:
      return {
        ...state,
        tickets: state.tickets.concat([
          {
            id:
              state.tickets.reduce(
                (maxId, todo) => Math.max(todo.id, maxId),
                -1
              ) + 1,
            submitted: Date.now(),
            subject: action.subject,
            body: action.body,
            replies: []
          }
        ])
      };

    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket.id !== action.id)
      };

    case PICK_TICKET:
      return {
        ...state,
        currentTicket: state.tickets.filter(
          ticket => ticket.id === action.id
        )[0]
      };

    case EDIT_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(
          ticket =>
            ticket.id === action.id
              ? {
                  ...ticket,
                  body: action.body,
                  subject: action.subject,
                  lastEdited: Date.now()
                }
              : ticket
        )
      };

    case REPLY_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(
          ticket =>
            ticket.id === action.id
              ? { ...ticket, replies: ticket.replies.concat([action.reply]) }
              : ticket
        )
      };

    case CLOSE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(
          ticket =>
            ticket.id === action.id
              ? { ...ticket, closed: !ticket.closed }
              : ticket
        )
      };

    default:
      return state;
  }
}
