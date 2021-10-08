import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
//import { withStyles } from "@material-ui/core/styles";

// const styles = (theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridListMain: {
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
// });

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    //const { classes } = this.props;
    return (
      <div>
        <Header />
        Welcome to Pokemons!
      </div>
    );
  }
}

export default Home;

//export default withStyles(styles)(Home);
