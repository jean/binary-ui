import PropTypes from 'prop-types';
import React from 'react';
import Image from './Image';
import ImageUpload from './ImageUpload';
import ImagePickerWrapper from '../components-styled/ImagePickerWrapper';

const propTypes = {
  imageFit: PropTypes.string,
  imageSelectedId: PropTypes.string,
  images: PropTypes.array,
  isImageUpload: PropTypes.bool,
  renderUploadIcon: PropTypes.func.isRequired,
  onImageClick: PropTypes.func,
  onImageUpload: PropTypes.func,
};

const defaultProps = {
  imageFit: 'contain',
  imageSelectedId: undefined,
  images: [],
  isImageUpload: true,
  onImageClick: undefined,
  onImageUpload: undefined,
};

export default class ImagePicker extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick(imageId) {
    const { onImageClick } = this.props;
    if (!onImageClick) {
      return;
    }
    onImageClick(imageId);
  }

  render() {
    const {
      images,
      imageFit,
      imageSelectedId,
      isImageUpload,
      renderUploadIcon,
      onImageUpload,
    } = this.props;
    return (
      <ImagePickerWrapper>
        {images.map(image => (
          <Image
            imageFit={imageFit}
            imageId={image.id}
            imageUrl={image.url}
            isSelected={image.id === imageSelectedId}
            key={image.id}
            onClick={this.onImageClick}
          />
        ))}
        {isImageUpload ? (
          <ImageUpload renderIcon={renderUploadIcon} onImageUpload={onImageUpload} />
        ) : null}
      </ImagePickerWrapper>
    );
  }
}

ImagePicker.propTypes = propTypes;
ImagePicker.defaultProps = defaultProps;
