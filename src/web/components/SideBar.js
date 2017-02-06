import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  height: 100vh;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  width: 60px;
  left: 0px;
  will-change: opacity;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-user-select: none;
  -webkit-transition: width .2s, opacity .2s, box-shadow .1s linear .1s;
  opacity: 1;

  &:hover {
    box-shadow: 3px 0 20px rgba(0, 0, 0, 0.2);
    width: 220px;
  }
`;

class SideBar extends React.Component {
  render() {
    return (
      <Container></Container>
    );
  }
}

export default SideBar;
