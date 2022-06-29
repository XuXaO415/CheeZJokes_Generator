import React from "react";
import "./JokeList.css";

class JokeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0, isHiding: false
    };
    this.id = this.props.id;
    this.text = this.props.text;
    this.votes = this.props.votes;
    this.vote = this.props.vote;
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    this.setState({ vote: this.state.vote + 1 });
  }

    downVote() {
    this.setState({ vote: this.state.vote - 1 });
    }


    render() {
        return (
            <div className="Joke">
                <div className="Joke-vote-area">
                    <button className="Joke-upvote" onClick={this.upVote}>
                        <i className="fas fa-thumbs-up" />
                    </button>
                    <button className="Joke-downvote" onClick={this.downVote}>
                        <i className="fas fa-thumbs-down" />
                    </button>
                    <div className="Joke-score">{this.state.vote}</div>
                </div>
                <div className="Joke-text">{this.text}</div>
            </div>
        );
    }
}

export default JokeClass;
