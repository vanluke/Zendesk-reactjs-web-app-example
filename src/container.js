import React, { Component } from 'react';
import superagent from 'superagent';
import jsonp from 'superagent-jsonpx';
import ZAFClient from 'zendesk_app_framework_sdk';
import { App } from './components/app';

const fetchUser = (/*name*/) => {
  // const userName = name.replace(' ', '');
  return new Promise((resolve, reject) => {
    superagent
    // .get(`http://10.222.68.2:1337/api/v0/user/${userName}`)
    .get('https://randomuser.me/api/')
    .use(jsonp)
    .end(function(error, response) {
      if (error) {
        return reject(error);
      }
      return resolve(response.body.results[0]);
    });
  });
};


export default class Container extends Component {
  constructor(props) {
    super(...props);
    this.increment = this.increment.bind(this);
  }

  increment(event) {
    event.preventDefault();
    this.setState({
      counter: this.state.counter += 1
    });
  }

  componentDidMount() {
    ZAFClient.init().get('ticket.requester.name').then((data) => {
      fetchUser(data['ticket.requester.name'])
      .then((user) => {
        this.setState({
          user
        });
      }).catch((error) => {
        console.error(error);
      });
    });
  }

  render() {
    const { user } = this.state;
    return (<App
      user={user} />);
  }

  state = {
    user: {
      picture: {},
      location: {},
      name: {}
    }
  };
}
