import React from "react";
import Joke from "./Joke";
import axios from "axios";
import "./JokeList.css";


class JokeListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      vote: 0
    };
    this.getJokes = this.getJokes.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

    async componentDidMount() {
        this.getJokes();
        this.id();
        const res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" }
        });
        const { status, ...jokeObj } = res.data;
        this.setState({ jokes: [{ ...jokeObj, votes: 0 }] });
    };
    async getJokes() {
        const res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" }
        });
        const { status, ...jokeObj } = res.data;
        this.setState({ jokes: [{ ...jokeObj, votes: 0 }] });
    }

    async componentDidUpdate() {
        this.id();
        this.votes();
    
    }
    

  render() {
    const { jokes } = this.state;

    return (
      <div className="JokeList">
        {jokes.map(joke => (
          <Joke key={joke.id} text={joke.text} />
        ))}
      </div>
    );
  }
}


export default JokeListClass;