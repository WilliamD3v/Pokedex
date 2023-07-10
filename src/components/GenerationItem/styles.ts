import styled from "styled-components";

export const StylesGeneration = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

  div {
  }

  h1 {
    color: #626262;
    position: relative;
    top: 104px;
    font-family: Merriweather;
    left: 9px;
    font-size: 2em;
    transition: .3s;
  }

  .card {
    position: relative;
    padding: 2em;
    }

  .card-elements {
    background: #d9d9d9;
    position: relative;
    padding: 2em;
    border-radius: 2em;
    height: 20em;
    margin: 2em;
    transition: .4s;
  }

  .card-elements:hover {
    background: #9D9D9D;
  }
  
  .split-image {
    display: flex;
    color: #8D8D8D;
    position: absolute;
    left: 148px;
    bottom: 0px;
    font-size: 20em;
    clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%);
  }
`;