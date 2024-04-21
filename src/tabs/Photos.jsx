// import { getPhotos } from 'apiService/photos';
import { Text, Form } from 'components';

export const Photos = () => {
  const onSubmit = text => {
    console.log(text);
  };
  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
