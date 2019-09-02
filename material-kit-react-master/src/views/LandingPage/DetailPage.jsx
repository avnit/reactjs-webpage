
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
//import GridContainer from "components/Grid/GridContainer.jsx";
//import GridItem from "components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
//import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import DetailSection from "./Sections/DetailSection.jsx";
//import TeamSection from "./Sections/TeamSection.jsx";


const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="ASB Solutions Group"
        /*  rightLinks={<HeaderLinks />} */
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
      {/*  <Parallax filter image={require("assets/img/bg3.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>ASB Solutions, your story starts with us.</h1>
                <h4>
                  ASB Solutions is a premier organization which statisfies customers needs in Cloud Migration, Cloud Native development and Cloud stratergy.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />

                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        */ }
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <DetailSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(landingPageStyle)(LandingPage);
