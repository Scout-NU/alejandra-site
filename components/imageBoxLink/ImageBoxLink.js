import {
  BottomImageContainer,
  BottomImage,
  ImageBoxLinkContainer,
  BoxLinkContainer,
} from './ImageBoxLink.styles';
import BoxLink from '../boxLink/BoxLink';

export default function ImageBoxLink({ boxLinkData }) {
  const { img, data } = boxLinkData;
  return (
    <ImageBoxLinkContainer>
      <BottomImageContainer>
        <BottomImage src={img.url} alt={img.alt} />
      </BottomImageContainer>
      <BoxLinkContainer>
        <BoxLink boxLinkData={data} />
      </BoxLinkContainer>
    </ImageBoxLinkContainer>
  );
}
