import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://i.blogs.es/f46982/bocchi-the-rock/1366_2000.jpeg" />
      </div>
      <div>
        <img src="https://somoskudasai.com/wp-content/uploads/2023/04/portada_bocchi-the-rock-54-1536x864.jpg" />
      </div>
      <div>
        <img src="https://imgmedia.larepublica.pe/640x345/lol/original/2023/01/06/63b855519f6f9261217d2a2c.webp" />
      </div>
    </Slider>
  );
}