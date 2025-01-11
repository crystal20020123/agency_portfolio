import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const Detail = ({ title, count }) => {
  let images = [];

  for (let i = 0; i < count; i++) {
    images.push(i);
  }

  return (
    <>
      <Carousel>
        {images &&
          images.map((image, idx) => (
            <Image
              key={idx}
              src={`/portfolio/${title}/${idx + 1}.jpg`}
              alt={image}
              width="1000px"
              height="500px"
              objectFit={title === "lummi" ? "scale-down" : "unset"}
            />
          ))}
      </Carousel>
    </>
  );
};

export default Detail;
