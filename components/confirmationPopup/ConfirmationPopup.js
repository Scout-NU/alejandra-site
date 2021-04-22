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

export default function ConfirmationPopup({
  confirmationData,
  togglePopup,
  name,
}) {
  const {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  } = confirmationData;

  let firstName = name.trim().split(' ')[0];
  if (firstName.length >= 14) {
    firstName = firstName.slice(0, 14) + '...';
  }

  return (
    <>
      <PopupBox>
        <Box>
          <TextContent>
            <H2Styled>
              <i>{getString(confirmationTitleItalic) + ' '}</i>
              {name != undefined && firstName + ' '}
              {getString(confirmationTitleRegular)}
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
              togglePopup(false);
            }}
          />
        </Box>
      </PopupBox>
    </>
  );
}
