import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions
} from "material-ui/ExpansionPanel";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends Component {
  state = {
    expanded: null
  };
  static propTypes = {
    classes: PropTypes.object.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    lastReply: PropTypes.number.isRequired,
    replyCount: PropTypes.number.isRequired,
    submitted: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  //<NavLink
  //   to={`/edit-ticket/${this.props.id}`}
  //   activeStyle={{
  //     textDecoration: "none"
  //   }}
  // >
  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === this.props.id}
          onChange={this.handleChange(this.props.id)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              {new Date(this.props.submitted).toLocaleString()}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              {this.props.subject}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Typography>{this.props.body}</Typography>
            </div>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <div className={classes.column}>
              {this.props.lastReply ? (
                <Typography>
                  Last Reply: {new Date(this.props.lastReply).toLocaleString()}
                </Typography>
              ) : (
                <div />
              )}
            </div>
            <Button
              size="small"
              color="primary"
              href={`/ticket/${this.props.id}`}
            >
              View
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(ControlledExpansionPanels);
