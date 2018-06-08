import React, { Component } from 'react';
import styled from 'react-emotion'

import Fuse from "fuse.js";
import data from './data/built-in-features.js';

import {Results} from "./Results.js";
import './App.css';

const searchOptions = {
  keys: [
    "module",
    "name"
  ]
};

const toCoreJsBundleRunUrl = n => `https://bundle.run/core-js@2/modules/${n}.js`;

const data2 = Object.keys(data).map((k, id) => {
  return {
    id,

    name: data[k],
    module: k,
    url: toCoreJsBundleRunUrl(k)
  };
});

const fuse = new Fuse(data2, searchOptions);

const DEFAULT_VALUE = "Array fill";

const Container = styled('div')`
  width: 70%;
  margin: 0 auto;
  margin-top: 100px;
`

const Input = styled('input')`
  width: 100%;
  text-align: center;
  padding: 15px;
`

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      query: DEFAULT_VALUE,
      results: []
    };
  }

  componentDidMount = () => {
    this._search(this.state.query);
  }

  _search = query => {
    const results = fuse.search(query);
    this.setState({ results });
  }

  _onChange = e => {
    const query = e.target.value;
    this.setState({ query });

    this._search(query);
  }

  render() {
    return (
      <Container>
        <Input type="text" onChange={this._onChange} value={this.state.query} />
        <Results entries={this.state.results} />
      </Container>
    );
  }
}

export default App;
