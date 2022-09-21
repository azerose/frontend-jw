import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LayoutBanner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 600,
    arrow: true,
    autoplay: true,
  };

  const StyledSlider = styled(Slider)`
    .slick-arrow {
      z-index: 10;
    }
  `;

  const SliderWrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 200px;
    }
    .slick-prev {
      left: 25px;
    }
    .slick-next {
      right: 25px;
    }
  `;

  return (
    <>
      <SliderWrapper>
        <StyledSlider {...settings}>
          <div>
            <img src="/thunder1.jpg" />
          </div>
          <div>
            <img src="/thunder2.jpg" />
          </div>
          <div>
            <img src="/thunder3.jpg" />
          </div>
          <div>
            <img src="/thunder4.jpg" />
          </div>
          <div>
            <img src="/thunder5.jpg" />
          </div>
          <div>
            <img src="/thunder6.jpg" />
          </div>
          <div>
            <img src="/thunder7.jpg" />
          </div>
        </StyledSlider>
      </SliderWrapper>
    </>
  );
};

export default LayoutBanner;
