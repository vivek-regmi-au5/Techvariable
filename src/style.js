import styled from "styled-components";
export const HomeWrapper = styled.div`
  .slick-arrow {
    color: orange;
    z-index: 100;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 0px;
    line-height: 1;
    opacity: 1;
    color: orange;
    -webkit-font-smoothing: antialiased;
  }

  .cGkyZj,
  .slick-prev:before,
  .cGkyZj,
  .slick-next:before {
    font-family: "slick";
    font-size: 49px;
    line-height: 1;
    opacity: 1;
    color: orange;
    -webkit-font-smoothing: antialiased;
  }

  .slick-prev {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    cursor: pointer;
    color: transparent;
    transform: translate(-30%, -51%);
    background: transparent;
  }

  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    cursor: pointer;
    color: transparent;
    transform: translate(-170%, -51%);
    background: transparent;
  }
`;
