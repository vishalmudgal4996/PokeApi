import React, { Component } from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import { withStyles } from "@material-ui/core/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";
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

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

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
    let offset = 0,
      limit = 20;
    //offset = offset + limit;

    const url = `${this.state.baseUrl}/${type}`;

    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(this.responseText));
        console.log(JSON.parse(this.responseText).results);

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
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <div className="navigation-panel">
            <Button variant="success" className= "custom-btn">Prev</Button>
            <Button variant="success" className= "custom-btn">Next</Button>
          </div>
          <div className="flex-container">
            <div className="characters">
              {this.state.pokemonList.map((item, index) => (
                <Card sx={{ minWidth: 275 }} key={"item" + index} style={{ marginBottom: 20 + 'px' }}>
                  <CardMedia
                    component="img"
                    image={`${this.state.imageUrl}${index + 1}.png`}
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
