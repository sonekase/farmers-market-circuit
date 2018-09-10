import React from 'react';
import PropTypes from 'prop-types';

function Comment(props){
  function clickLike(){
    props.onClickLike(props.id);
  }
  return(
    <div>
      <h6>{props.comment}</h6>
      <button onClick={clickLike}>LIKE</button> {props.like}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClickLike: PropTypes.func
};

export default Comment;
