import React, { Component } from "react";
import PropTypes from "prop-types";
import Input, { InputLabel } from "material-ui/Input";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import { FormControl } from "material-ui/Form";
import { withStyles } from "material-ui/styles";
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
  }
});

class TicketInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    nextId: PropTypes.number.isRequired,
    classes: PropTypes.object.isRequired
  };
  state = {
    body: this.props.body || "",
    subject: this.props.subject || "",
    id: this.props.nextId
  };

  handleSubjectChange = e => {
    this.setState({ subject: e.target.value });
  };

  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  handleButtonClick = () => {
    this.props.onSave(this.state.id, this.state.subject, this.state.body);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={4}>
          <Typography
            variant="headline"
            component="h3"
            className={classes.formControl}
          >
            Submit a New Ticket
          </Typography>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel>Subject</InputLabel>
            <Input
              placeholder="Title for your post"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              onChange={this.handleSubjectChange}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel>Body</InputLabel>
            <Input
              multiline={true}
              placeholder="Explain"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
              onChange={this.handleBodyChange}
            />
          </FormControl>
          <Button
            to="/ticketing-react-demo/"
            component={Link}
            onClick={this.handleButtonClick}
            disabled={!(this.state.body && this.state.subject)}
            className={classes.input}
            variant="raised"
            color="primary"
          >
            Submit
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TicketInput);
