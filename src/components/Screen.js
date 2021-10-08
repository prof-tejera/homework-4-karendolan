import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    let screenValue = this.props.value;
    let warning = '';
    if (screenValue && screenValue.length > 17) {
      //TODO: too big, only accpeting first 17
      screenValue = screenValue.substring(0, 17);
      warning = 'at max digit limit';
    }
    return (
      <Container>
        {screenValue}
        <div style={{
          color: '#E9967A',
          fontSize: '.6em',
          display: 'flex',
          justifyContent: 'center',
        }}>
          {warning}
        </div>
      </Container>
    );
  }
}

// Defined prop types
Screen.propTypes = {
  value: PropTypes.string,
}

export default Screen;
