import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class TicketInput extends Component {
  propTypes = {
    onSave: PropTypes.func.isRequired,
    body: PropTypes.string,
    subject: PropTypes.string,
    replies: PropTypes.array,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTicket: PropTypes.bool,
    submitted: PropTypes.number
  };
  state = {
    body: this.props.body || "",
    subject: this.props.subject || ""
  };

  handleSubmit = e => {
    const body = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(body);
      if (this.props.newTicket) {
        this.setState({ body: "", subject: "", replies: [] });
      }
    }
  };

  handleSubjectChange = e => {
    this.setState({ subject: e.target.value });
  };

  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  handleBlur = e => {
    if (!this.props.newTicket) {
      this.props.onSave(e.target.value);
    }
  };

  handleButtonClick = () => {
    // save state of current input and place into list of tickets
  };

  render() {
    return (
      <div>
        <input
          className={classnames({
            edit: this.props.editing,
            "new-todo": this.props.newTicket
          })}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus="true"
          value={this.state.subject}
          onBlur={this.handleBlur}
          onChange={this.handleSubjectChange}
        />
        <textarea
          type="text"
          value={this.state.body}
          onChange={this.handleSubjectChange}
        />
        <input type="button" onClick={this.handleButtonClick} />
      </div>
    );
  }
}
