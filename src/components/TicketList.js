import React, { Component } from "react";
import PropTypes from "prop-types";
import TicketPanel from "./TicketPanel";
import ticketHelper from "../helpers/ticketHelper";

export default class TicketList extends Component {
  static propTypes = {
    tickets: PropTypes.array.isRequired
  };

  render() {
    const { tickets } = this.props;

    return (
      <div className="ticket-list">
        {tickets.map(ticket => {
          const latestReplyInMS = ticketHelper.largestByObjKey(
            ticket.replies,
            "submitted"
          );

          return (
            <TicketPanel
              key={ticket.id}
              subject={ticket.subject}
              body={ticket.body}
              replyCount={ticket.replies.length}
              submitted={ticket.submitted}
              id={ticket.id}
              lastReply={latestReplyInMS}
            />
          );
        })}
      </div>
    );
  }
}
