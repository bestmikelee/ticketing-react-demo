import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "material-ui/ExpansionPanel";
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
    key: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    lastReply: PropTypes.number.isRequired,
    replyCount: PropTypes.number.isRequired,
    editFunc: PropTypes.func.isRequired
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const {
      classes,
      key,
      subject,
      body,
      lastReply,
      replyCount,
      editFunc
    } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel
        expanded={expanded === key}
        onChange={this.handleChange(key)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>
            I am an expansion panel
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default withStyles(styles)(ControlledExpansionPanels);
