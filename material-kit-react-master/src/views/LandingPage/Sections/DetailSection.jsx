
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";
//import CustomInput from "components/CustomInput/CustomInput.jsx";
//import Button from "components/CustomButtons/Button.jsx";

import Carousel from "views/Components/Sections/SectionCarousel.jsx"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
      <Carousel justify="center"></Carousel>
      </div>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(WorkSection);
