import React, { useRef, useState } from 'react';
import HomePresentation from './HomePresentation';

const HomeContainer = () => {
  const [postImages, setPostImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleAddImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <HomePresentation
      fileRef={fileRef}
      handleAddImage={handleAddImage}
      handleSubmit={handleSubmit}
      postImages={postImages}
    />
  );
};

export default HomeContainer;
