import { getString } from '../../lib/richText';
import {
  PageDescriptionContainer,
  Description,
  UnfilledSparkArrow,
  ArrowText,
  ArrowContainer,
} from './PageDescription.styles';
import { icons } from '../../style/icons';

export default function PageDescription({ description, arrowText }) {
  return (
    <>
      <PageDescriptionContainer>
        <ArrowContainer>
          <UnfilledSparkArrow src={icons.LONG_UNFILLED_SPARK_ARROW} />
          <ArrowText>{arrowText}</ArrowText>
        </ArrowContainer>
        <Description>{getString(description)}</Description>
      </PageDescriptionContainer>
    </>
  );
}
