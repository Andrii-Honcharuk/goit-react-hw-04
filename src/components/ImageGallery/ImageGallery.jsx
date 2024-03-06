//ImageGallery.jsx

import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.imgContainer}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} />
        </li>
      ))}
    </ul>
  );
}
