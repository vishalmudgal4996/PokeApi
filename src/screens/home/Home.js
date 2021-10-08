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
    this.baseUrl = "https://pokeapi.co/api/v2";
    this.state = {
      pokemonList: []
    };
  }

  componentDidMount() {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;

    let type = 'pokemon'
    let offset = 0, limit = 20;
    offset = offset + limit;

    const url = `${this.baseUrl}/${type}?offset=${offset}&limit=${limit}`;

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(this.responseText))
        console.log(JSON.parse(this.responseText).results)

        that.setState({
          pokemonList: JSON.parse(this.responseText).results,        
        });

        console.log(that.state.pokemonList);
      }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
  }

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
