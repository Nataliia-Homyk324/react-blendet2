import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!query) return;
    // getPhotos(query, page).then(({ photos }) => {
    //   console.log('useEffect ~ photos:', photos);
    // });
    const fetchPhotos = async () => {
      try {
        const { photos } = await getPhotos(query, page);
        setPhotos(photos);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const onSubmit = text => {
    setQuery(text);
  };
  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <PhotosGallery photos={photos} />
    </>
  );
};
