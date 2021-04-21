import { getString } from '../../lib/richText';
import {
  PopupBox,
  Box,
  TextContent,
  ImgBackground,
  Img,
  CloseIcon,
  H2Styled,
  PStyled,
  Arch,
  ArchImgContainer,
} from './ConfirmationPopup.styles';
import { icons } from '../../style/icons';

export default function ConfirmationPopup({ confirmationData, togglePopup }) {
  const {
    confirmationTitleRegular1,
    confirmationTitleItalic2,
    confirmationTitleRegular3,
    confirmationDescription,
    confirmationImage,
  } = confirmationData;

  return (
    <>
      <PopupBox>
        <Box>
          <TextContent>
            <H2Styled>
              {getString(confirmationTitleRegular1) + ' '}
              <i>{getString(confirmationTitleItalic2) + ' '}</i>
              {getString(confirmationTitleRegular3)}
            </H2Styled>
            <PStyled>{getString(confirmationDescription)}</PStyled>
          </TextContent>
          <ImgBackground
            src={confirmationImage.url}
            alt={confirmationImage.alt}
          />
          <ArchImgContainer>
            <Img src={confirmationImage.url} alt={confirmationImage.alt} />
            <Arch src={icons.SINGLE_ARCHWAY} alt="White single archway" />
          </ArchImgContainer>
          <CloseIcon
            src={icons.CLOSE_ICON}
            alt="Close icon symbol used to close popup"
            onClick={() => {
              document.body.style.overflow = 'visible';
              togglePopup();
            }}
          />
        </Box>
      </PopupBox>
    </>
  );
}
