import { getString } from '../../lib/richText';
import {
  PageDescriptionContainer,
  Description,
} from './PageDescription.styles';
export default function PageDescription({ description }) {
  return (
    <>
      <PageDescriptionContainer>
        <Description>{getString(description)}</Description>
      </PageDescriptionContainer>
    </>
  );
}
