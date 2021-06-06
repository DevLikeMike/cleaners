// Import Slider from react slice
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Style & position arrows inside the carousel
function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "0",
        marginLeft: "1rem",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "0",
        margin: "0 1rem 0 0",
      }}
      onClick={onClick}
    />
  );
}

// Component start
export default function Carousel({ children }) {
  // Settings config
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    autoplayspeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };
  return (
    <Slider {...settings} style={{ marginTop: "6vh" }}>
      {children}
    </Slider>
  );
}
