import React from "react";
import "./Joke.css";

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0, isHiding: false
    };
  }

  render() {
    // console.log(this.state);
    console.log(this.props);
    console.log(this.props.text);
    const {vote} = this.state;
    const { text } = this.props;
    return (
      <div className="Joke">
      <div className="Joke-vote-area">
        <button className="Joke-upvote" onClick={() => this.setState({ vote: vote + 1 })}>
          <i className="fas fa-thumbs-up" />
        </button>
        <button className="Joke-downvote" onClick={() => this.setState({ vote: vote - 1 })}>
          <i className="fas fa-thumbs-down" />
        </button>
        <div className="Joke-score">{vote}</div>
      </div>
      <div className="Joke-text">{text}</div>
      </div>
    );
  }
}


// function Joke({ vote, votes, text, id }) {
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);

//   return (
//     <div className="Joke">
//       <div className="Joke-vote-area">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

export default Joke;
