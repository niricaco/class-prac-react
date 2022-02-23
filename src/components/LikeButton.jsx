import React, { useState } from "react";

/* const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      {!isLiked && <button onClick={() => setIsLiked(true)}>Like</button>}
      {isLiked && <p hidden={isLiked === true ? false : true}>Liked</p>}
    </div>
  );
}; */

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
  }

  render() {
    return (
      <div>
        {!this.state.isLiked && (
          <button onClick={() => this.setState({ isLiked: true })}>Like</button>
        )}
        {this.state.isLiked && <p>Liked</p>}
      </div>
    );
  }
}

export default LikeButton;
