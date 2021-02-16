import React, { ChangeEvent, useRef, useState } from 'react';
import { difference, map } from 'lodash';
import { POST_IMAGES_MAX } from 'constant';
import { getFileList } from 'lib/utils';
import { ImageInfo } from 'types/imageUpload';
import HomePresentation from './HomePresentation';
const HomeContainer = () => {
  const [uploadImages, setUploadImages] = useState<ImageInfo[]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleAddImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleImagesChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    if (uploadImages.length + files.length > POST_IMAGES_MAX) {
      return;
    }

    const fileNames = Array.from(files).map(({ name }) => name);
    const uploadedFiles = map(uploadImages, 'name');
    const diff = difference(fileNames, uploadedFiles);

    if (diff.length < fileNames.length) {
      return;
    }

    try {
      const fileList = await getFileList(files);
      if (!fileList) {
        return;
      }
      setUploadImages((cur) => [...cur, ...fileList]);
    } catch (error) {
      console.log(error);
    }
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
      uploadImages={uploadImages}
    />
  );
};

export default HomeContainer;
