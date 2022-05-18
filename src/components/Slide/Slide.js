import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components"

  const Categoria = styled.div`
    width: 150px;
    height: 20px;
    border: 0px 1px 0 0 solid red;
    
  `

  const SlideContainer = styled.div`
    /* display: flex; */
    width: 300px;
    margin-top: 12px;
    /* background-color: lightgrey; */
  `

 const Slide = () => {
 
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div>
        <SlideContainer>
          <Slider {...settings}>
            <Categoria>
              Massas
            </Categoria>
            <Categoria>
              Árabe
            </Categoria>
            <Categoria>
              Mexicana
            </Categoria>
            <Categoria>
              Francesa
            </Categoria>
            <Categoria>
              Brasileira
            </Categoria>
          </Slider>
        </SlideContainer>
        
      </div>
    );
  }

export default Slide