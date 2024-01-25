import { useState } from 'react';
import './slider-image.scss'

type Props = {
  image: string;
  title: string;
  images: string[]
};


const SliderImage: React.FC<Props> = ({ images = [], image, title }) => {
  const[imageSrc, setImageSrc] = useState(image);

  const clickImage = (img: string) => {
    setImageSrc(img);
  }
  

  return (
    <div className="slider-image">
      <ul className="slider-image__list">
        {images.map((img, index) => {
          return(
            <li className='slider-image__item' key={index} onClick={() => clickImage(img)}>
              <img className='slider-image__small-img' src={img} alt={img} />
            </li>
          )
        })}
      </ul>
      <div className="slider-image__photo">
        <img className="slider-image__image" src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default SliderImage;
