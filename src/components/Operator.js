import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 40px;
  height: 30px;
  cursor: pointer;
  background-color: #e7d6c1;
  padding: 5px;
  margin: 15px;
  border-radius: 10px;
`;

class Operator extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Operator;
