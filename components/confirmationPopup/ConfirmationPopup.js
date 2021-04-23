import { getString } from '../../lib/richText';
import { icons } from '../../style/icons';
import {
  Arch,
  ArchImgContainer,
  Box,
  CloseIcon,
  H2Styled,
  Img,
  ImgBackground,
  PopupBox,
  PStyled,
  TextContent,
} from './ConfirmationPopup.styles';

export default function ConfirmationPopup({
  confirmationData,
  togglePopup,
  name,
  page,
}) {
  const {
    confirmationTitleRegular,
    confirmationTitleItalic,
    confirmationDescription,
    confirmationImage,
  } = confirmationData;

  let firstName = '';
  if (name != undefined) {
    firstName = name.trim().split(' ')[0];
  }
  if (firstName.length > 12) {
    firstName = firstName.slice(0, 12) + '...';
  }

  console.log('in confirmation');
  console.log(confirmationData);

  return (
    <>
      <PopupBox>
        <Box page={page}>
          <TextContent page={page}>
            <H2Styled page={page}>
              <i>{getString(confirmationTitleItalic) + ' '}</i>
              {name != undefined && firstName + ', '}
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
