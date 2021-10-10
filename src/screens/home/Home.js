import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import { withStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@material-ui/core/Button";
import CardMedia from '@mui/material/CardMedia';

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridListMain: {
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      loading: true,
      baseUrl: "https://pokeapi.co/api/v2",
      offset: 0,
      limit: 20
    };
  }

  componentDidMount() {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;

    let type = "pokemon";

    const url = `${this.state.baseUrl}/${type}`;

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
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

  handlePrev = () => {
    let type = "pokemon";
    let offset = this.state.offset;
    let limit = this.state.limit;
    offset = offset - limit;

    if (offset >= 0) {
      const url = `${this.state.baseUrl}/${type}?offset=${offset}&limit=${limit}`;

      fetch(url)
        .then(response => response.json())
        .then(allpokemon => {
          this.setState({
            offset: offset,
            pokemonList: allpokemon.results,
          });
          console.log(allpokemon.results);
        });
    }
  }

  handleNext = () => {
    let type = "pokemon";
    let offset = this.state.offset;
    let limit = this.state.limit;
    offset = offset + limit;

    if (offset >= 0) {
      const url = `${this.state.baseUrl}/${type}?offset=${offset}&limit=${limit}`;

      fetch(url)
        .then(response => response.json())
        .then(allpokemon => {
          this.setState({
            offset: offset,
            pokemonList: allpokemon.results,
          });
          console.log(allpokemon.results);
        });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="navigation-panel">
            <Button variant="contained" className="custom-btn" onClick={this.handlePrev}>Prev</Button>
            <Button variant="contained" className="custom-btn" onClick={this.handleNext}>Next</Button>
          </div>
          <div className="flex-container">
            <div className="characters">
              {this.state.pokemonList.map((item, index) => (
                <Card sx={{ minWidth: 275 }} key={"item" + index} style={{ marginBottom: 20 + 'px' }}>
                  <CardMedia
                    component="img"
                    image={`${this.state.imageUrl}${index + this.state.offset + 1}.png`}
                    alt={item.name}
                  />
                  <CardActions style={{ justifyContent: "center", color: "black", fontWeight: "bolder" }}>
                    {item.name}
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

//export default Home;

export default withStyles(styles)(Home);
