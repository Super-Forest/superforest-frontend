import React, { ChangeEvent, useRef, useState } from 'react';
import HomePresentation from './HomePresentation';

const HomeContainer = () => {
  const [postImages, setPostImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleAddImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    console.log(files);
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <HomePresentation
      fileRef={fileRef}
      handleAddImage={handleAddImage}
      handleImagesChange={handleImagesChange}
      handleSubmit={handleSubmit}
      postImages={postImages}
    />
  );
};

export default HomeContainer;
