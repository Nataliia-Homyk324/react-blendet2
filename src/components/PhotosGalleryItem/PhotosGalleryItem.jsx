import { GridItem } from 'components';
import css from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ alt, img, color }) => {
  return (
    <GridItem>
      <div
        className={css.thumb}
        style={{ backgroundColor: color, borderColor: color }}
      >
        <img src={img} alt={alt} />
      </div>
    </GridItem>
  );
};
