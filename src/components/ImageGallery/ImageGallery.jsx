//ImageGallery.jsx

import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.imgContainer}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
