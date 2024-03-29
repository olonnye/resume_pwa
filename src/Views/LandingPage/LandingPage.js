import React from "react";
// Utils
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "@Components/Hero/Header/Header.js";
import Footer from "@Components/Hero/Footer/Footer.js";
import HeaderLinks from "@Components/Hero/Header/HeaderLinks.js";
import Parallax from "@Components/Parallax/Parallax.js";

import styles from "@Styles/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import ThreeDRender from "./Sections/ThreeDRender.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const LandingPage = (props) => {

  const classes = useStyles();
  const { ...rest } = props;
  const [brand, setBrand] = React.useState({ value: '[JS DEVELOPER]', type: 0 });

  // let windowsScrollTop = window.pageYOffset;

  // const update = (windowsScrollTop) => {

  //   if (windowsScrollTop > 522 && brand.type === 0) {
  //     console.log("should be olani")
  //     setBrand({
  //       value: 'OLONNYE :D',
  //       type: 1
  //     });
  //   } else if (windowsScrollTop < 520 && brand.type === 1) {
  //     console.log("should be dev")
  //     setBrand({
  //       value: '[JS DEVELOPER]',
  //       type: 0
  //     });
  //   }
  //   console.log(brand);
  // }

  // window.addEventListener("scroll", update(windowsScrollTop))



  return (
    <div

    >
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand={brand.value}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax filter>
        <div className={classes.container}>
          <ThreeDRender>
            {/* <GridContainer style={{ position: 'absolute' }}>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your ideas becoming <span style={{ color: '#ffff08' }}>reality</span></h1>
                <h4>
                  
                </h4>
                <br />
              </GridItem>
            </GridContainer> */}
          </ThreeDRender>
        </div>
      </Parallax>
      <div
        className={classNames(classes.main, classes.mainRaised)}
      >
        <div className={classes.container}>
          <TeamSection />
          <ProductSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage