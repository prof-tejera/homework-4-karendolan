import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  display: flex;
  justify-content: center;
  align-items: center;
  fontFamily: 'Courier New',
  fontSize: 'bold',
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

// Defined prop types
Operator.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
}

export default Operator;
