import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import { withStyles } from "material-ui/styles";
import List from "material-ui/List";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";
import { Link } from "react-router-dom";

const styles = theme => ({
  container: {
    width: "80%",
    margin: "auto"
  },
  input: {
    margin: theme.spacing.unit
  },
  paper: {
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  },
  formControl: {
    display: "grid",
    margin: theme.spacing.unit
  },
  actions: {
    marginLeft: "25px"
  }
});

class TicketDetails extends Component {
  static propTypes = {
    ticket: PropTypes.object.isRequired,
    editTicket: PropTypes.func.isRequired,
    deleteTicket: PropTypes.func.isRequired,
    closeTicket: PropTypes.func.isRequired,
    replyTicket: PropTypes.func.isRequired,
    openTicket: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  render() {
    const {
      ticket,
      closeTicket,
      openTicket,
      deleteTicket,
      replyTicket,
      classes
    } = this.props;
    const getReplies = ticket =>
      ticket.replies
        .sort((a, b) => {
          // sort in descending order by time
          if (a.submitted < b.submitted) {
            return 1;
          }
          if (a.submitted > b.submitted) {
            return -1;
          }
          return 0;
        })
        .map((reply, i) => {
          return (
            <ReplyList
              user={reply.user}
              body={reply.body}
              submitted={reply.submitted}
              key={i}
            />
          );
        });
    return (
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="headline" component="h4">
            {ticket.closed ? "CLOSED - " : ""}
            {ticket.subject}
          </Typography>
          <Typography>{ticket.body}</Typography>
          {ticket.closed ? (
            <Button
              className="actions"
              onClick={() => openTicket(ticket.id)}
              variant="raised"
              color="primary"
              size="small"
            >
              Open
            </Button>
          ) : (
            <Button
              className="actions"
              onClick={() => closeTicket(ticket.id)}
              variant="raised"
              color="secondary"
              size="small"
            >
              Close
            </Button>
          )}
          <Button
            to="/ticketing-react-demo/"
            component={Link}
            style={{
              marginLeft: "80%"
            }}
            onClick={() => deleteTicket(ticket.id)}
            variant="raised"
            color="secondary"
            size="small"
          >
            Delete
          </Button>
        </Paper>
        {ticket.closed ? (
          ""
        ) : (
          <ReplyInput ticketId={ticket.id} saveReply={replyTicket} />
        )}

        <List dense={true}>{getReplies(ticket)}</List>
      </div>
    );
  }
}

export default withStyles(styles)(TicketDetails);
