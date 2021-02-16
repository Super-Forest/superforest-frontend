import React, { FormEventHandler, MouseEvent, MouseEventHandler } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { FaTimesCircle, FaVoteYea } from 'react-icons/fa';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import Button from 'components/common/Button';
import ButtonGroup from 'components/common/ButtonGroup';
import Form from 'components/common/Form';
import FormTextArea from 'components/common/FormTextArea';
import Tab from 'components/loggedIn/Tab';
import Tooltip from 'components/common/Tooltip';
import FormFile from 'components/common/FormFile';
import { ImageInfo } from 'types/imageUpload';
import { POST_IMAGES_MAX } from 'constant';

interface Prop {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleAddImage: MouseEventHandler<HTMLButtonElement>;
  handleImagesChange: FormEventHandler<HTMLInputElement>;
  handleRemoveImage: MouseEventHandler<HTMLButtonElement>;
  uploadImages: ImageInfo[];
  fileRef: any;
}

const container = tw`
  container
  mx-auto
  md:w-9/12
  w-full
`;

const form = tw`
  flex
  flex-col
  items-center
  p-12
  py-5
  mt-5
  w-full
  bg-white
`;

const textArea = tw`
  w-full
  h-100px
  p-3
  border-0
  border-b
  border-gray-300
  resize-none
`;

const imageContainer = tw`
  flex
  justify-center
  flex-wrap
  mt-10
`;

const imageWrapper = tw`
  flex
`;

const image = tw`
  h-full
  w-full
  rounded-3xl
  cursor-pointer
`;

const buttonWrapper = tw`
  flex
  items-center
  justify-between
  w-full
  mt-5
`;

const buttonGroup = css`
  display: flex;
  align-items: center;

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;

    &:hover {
      background-color: rgb(209, 250, 229);
      border-radius: 50%;
    }

    &:disabled {
      background-color: transparent;
      opacity: 0.5;
    }

    svg {
      height: 28px;
      width: 28px;
      color: rgb(51, 211, 153);
    }
  }
`;

const fileInput = css`
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`;

const submitButton = tw`
  px-14
  h-30px
  rounded-3xl
  bg-green-400
  font-medium
  text-white
  text-2xl
`;

const getBackgroundImage = (src: string) => {
  return css`
    position: relative;
    width: 100%;
    height: 150px;
    max-width: 200px;
    margin: 10px;
    background-image: url(${src});
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 10%;

    @media screen and (max-width: 640px) {
      height: 70px;
      width: 70px;
      margin: 0 10px;
    }

    & button {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 0;
      left: 0;
      & .clear__button {
        width: inherit;
        height: inherit;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
      }
    }
  `;
};

const HomePresentation = ({
  handleSubmit,
  handleRemoveImage,
  handleAddImage,
  handleImagesChange,
  uploadImages,
  fileRef,
}: Prop) => {
  return (
    <>
      <Tab />
      <div css={container}>
        <Form css={form}>
          <FormTextArea css={textArea} />
          <div css={imageContainer}>
            <div css={imageWrapper}>
              {uploadImages.map((imgSrc, idx) => (
                <div css={getBackgroundImage(imgSrc.url)} key={idx}>
                  <img css={image} draggable={false} src={imgSrc.url} />
                  <Button onClick={handleRemoveImage} type="button">
                    <FaTimesCircle className={'clear__button'} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div css={buttonWrapper}>
            <ButtonGroup css={buttonGroup}>
              <Tooltip message={'이미지 추가'}>
                <FormFile css={fileInput} onChange={handleImagesChange} ref={fileRef}>
                  <Button
                    disabled={uploadImages.length >= POST_IMAGES_MAX}
                    onClick={handleAddImage}
                    type="button"
                  >
                    <BiImageAdd />
                  </Button>
                </FormFile>
              </Tooltip>
              <Tooltip message={'투표 생성'}>
                <Button type="button">
                  <FaVoteYea />
                </Button>
              </Tooltip>
            </ButtonGroup>
            <Button css={submitButton} text={'데롱'} type="button" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default HomePresentation;
