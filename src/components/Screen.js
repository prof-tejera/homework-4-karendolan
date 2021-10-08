import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 50px;
  text-align: right;
  margin-bottom: 10px;
  color: #00FFFF;
  background-color: #696969;
  padding: 10px;
  margin: 15px;
  border-radius: 10px;
  font-size: 1.8em;
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

export default Screen;
