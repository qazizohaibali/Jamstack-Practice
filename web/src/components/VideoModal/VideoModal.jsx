import React from "react";
import ReactModal from "react-modal";
import ReactPlayer from "react-player";
import "./ModalStyles.scss";

const VideoModal = ({ isOpen, videoUrl, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
      className='custom-modal max-w-[700px]  max-h-[200px] mx-auto lg:max-h-[400px]'
    >
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </ReactModal>
  );
};

export default VideoModal;
