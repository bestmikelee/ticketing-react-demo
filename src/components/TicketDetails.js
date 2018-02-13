import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Input, { InputLabel } from "material-ui/Input";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import { FormControl } from "material-ui/Form";
import { withStyles } from "material-ui/styles";
import List from "material-ui/List";
import ReplyList from "./ReplyList";
import ReplyInput from "./ReplyInput";

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
    margin: "auto"
  }
});

class TicketDetails extends Component {
  static propTypes = {
    ticket: PropTypes.object.isRequired,
    editTicket: PropTypes.func.isRequired,
    deleteTicket: PropTypes.func.isRequired,
    closeTicket: PropTypes.func.isRequired,
    replyTicket: PropTypes.func.isRequired
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
      deleteTicket,
      replyTicket,
      classes
    } = this.props;
    const getReplies = ticket =>
      ticket.replies.map((reply, i) => {
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
            {ticket.subject}
          </Typography>
          <Typography>{ticket.body}</Typography>
          <Button
            className="actions"
            onClick={() => deleteTicket(ticket.id)}
            variant="raised"
            color="primary"
            size="small"
          >
            Reply
          </Button>
          <Button
            className="actions"
            onClick={() => deleteTicket(ticket.id)}
            variant="raised"
            color="secondary"
            size="small"
          >
            Close
          </Button>
        </Paper>
        <ReplyInput ticketId={ticket.id} saveReply={replyTicket} />
        <List dense={true}>{getReplies(ticket)}</List>
      </div>
    );
  }
}

export default withStyles(styles)(TicketDetails);
