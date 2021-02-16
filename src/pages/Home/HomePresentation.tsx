import React, { FormEventHandler, MouseEvent, MouseEventHandler } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { FaVoteYea } from 'react-icons/fa';
import tw from 'twin.macro';
import { css } from '@emotion/react';
import Button from 'components/common/Button';
import ButtonGroup from 'components/common/ButtonGroup';
import Form from 'components/common/Form';
import FormTextArea from 'components/common/FormTextArea';
import Tab from 'components/loggedIn/Tab';
import Tooltip from 'components/common/Tooltip';
import Img from 'components/common/Img';
import FormFile from 'components/common/FormFile';
import { ImageInfo } from 'types/imageUpload';
import { POST_IMAGES_MAX } from 'constant';

interface Prop {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleAddImage: MouseEventHandler<HTMLButtonElement>;
  handleImagesChange: FormEventHandler<HTMLInputElement>;
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

const image = tw`
  h-100px
  w-1/4
  md:h-250px
  md:w-3/7
  md:m-3
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

const HomePresentation = ({
  handleSubmit,
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
            {uploadImages.map((imgSrc, idx) => (
              <img css={image} key={idx} src={imgSrc.url} />
            ))}
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
