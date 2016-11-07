import React, { PropTypes } from 'react';
import './_app.scss';

export const App = (props) => {
  return (<div className="c-app">
    <h1>First Utility APP</h1>
    <h3>Ticket requester: <strong>{props.user.name.title}</strong>&nbsp;
      <span>{props.user.name.first}</span>
      &nbsp;<span>{props.user.name.last}</span></h3>
    <img src={props.user.picture.thumbnail} alt="thumbnail" />
    <p>Requester gender <strong>{props.user.gender}</strong></p>
    <ul>Requester address
      <li>{props.user.location.street}</li>
      <li>{props.user.location.city}</li>
      <li>{props.user.location.state}</li>
      <li>{props.user.location.postcode}</li>
    </ul>
  </div>);
};

App.propTypes = {
  user: PropTypes.shape({
    location: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postcode: PropTypes.string
    }),
    picture: PropTypes.shape({
      thumbnail: PropTypes.string
    }),
    gender: PropTypes.string,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
      title: PropTypes.string
    })
  })
};
