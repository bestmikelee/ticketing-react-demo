import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import { FormControl } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import Button from "material-ui/Button";

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

class ReplyInput extends Component {
  static propTypes = {
    saveReply: PropTypes.func.isRequired,
    ticketId: PropTypes.number.isRequired
  };
  state = {
    body: "",
    user: "",
    submitted: 0
  };

  handleNameChange = e => {
    const time = new Date();
    this.setState({ user: e.target.value, submitted: time.getTime() });
  };
  handleBodyChange = e => {
    const time = new Date();
    this.setState({ body: e.target.value, submitted: time.getTime() });
  };
  onSave = () => {
    this.props.saveReply({
      ...this.state,
      id: this.props.ticketId
    });
    this.setState({
      body: "",
      user: "",
      submitted: 0
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel>Name</InputLabel>
          <Input
            placeholder="Your Name"
            className={classes.input}
            value={this.state.user}
            onChange={this.handleNameChange}
          />
        </FormControl>

        <FormControl fullWidth className={classes.formControl}>
          <InputLabel>Response</InputLabel>
          <Input
            multiline={true}
            placeholder="Explain"
            className={classes.input}
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
        </FormControl>
        <Button onClick={this.onSave}>Submit</Button>
      </div>
    );
  }
}
export default withStyles(styles)(ReplyInput);
