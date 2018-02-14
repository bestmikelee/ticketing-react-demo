import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions
} from "material-ui/ExpansionPanel";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "30%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    flexBasis: "25%",
    flexShrink: 0
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
    closed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

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
            <Typography className={classes.secondaryHeading}>
              ID: {this.props.id}
            </Typography>
            <Typography className={classes.heading}>
              {this.props.subject}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Date/Time Submitted:{" "}
              {new Date(this.props.submitted).toLocaleString()}
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Status: {this.props.closed ? "Closed" : "Open"}
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
              to={`/ticketing-react-demo/${this.props.id}`}
              component={Link}
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
