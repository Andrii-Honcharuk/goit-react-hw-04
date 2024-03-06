//ImageCard.jsx

import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  const handleClick = () => {
    onClick(image);
  };

  return (
    <div className={css.galleryImage} onClick={handleClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
