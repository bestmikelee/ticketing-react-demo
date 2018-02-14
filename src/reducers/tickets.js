import {
  ADD_TICKET,
  DELETE_TICKET,
  EDIT_TICKET,
  CLOSE_TICKET,
  PICK_TICKET,
  REPLY_TICKET,
  OPEN_TICKET
} from "../constants/ActionTypes";

const initialState = {
  tickets: [
    {
      subject: "New Issue",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
  console.log("here", state, action);
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
              ? { ...ticket, replies: ticket.replies.concat([action]) }
              : ticket
        )
      };

    case CLOSE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(
          ticket =>
            ticket.id === action.id ? { ...ticket, closed: true } : ticket
        )
      };
    case OPEN_TICKET:
      return {
        ...state,
        tickets: state.tickets.map(
          ticket =>
            ticket.id === action.id ? { ...ticket, closed: false } : ticket
        )
      };

    default:
      return state;
  }
}
