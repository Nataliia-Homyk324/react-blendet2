import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotosGalleryItem
            alt={photo.alt}
            img={photo.src.small}
            color={photo.avg_color}
          />
        </li>
      ))}
    </Grid>
  );
};
