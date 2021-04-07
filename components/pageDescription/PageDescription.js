import { getString } from '../../lib/richText';
import {
  PageDescriptionContainer,
  Description,
} from './PageDescription.styles';

export default function PageDescription({ description, arrowText }) {
  return (
    <>
      <PageDescriptionContainer>
        <Description>{getString(description)}</Description>
        <p>{arrowText}</p>
      </PageDescriptionContainer>
    </>
  );
}
