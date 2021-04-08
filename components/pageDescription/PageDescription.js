import { getString } from '../../lib/richText';
import {
    PageDescriptionContainer,
    DescriptionContainer,
    Description,
    UnfilledSparkArrow,
    ArrowText,
    ArrowContainer,
    Img,
} from './PageDescription.styles';
import { icons } from '../../style/icons';

export default function PageDescription({ description, arrowText, img }) {
    return (
        <>
            <PageDescriptionContainer>
  
                <DescriptionContainer>
                    <Description>{getString(description)}</Description>
                </DescriptionContainer>
            </PageDescriptionContainer>
            <Img src={img} />
            <ArrowContainer>
                    <UnfilledSparkArrow src={icons.LONG_UNFILLED_SPARK_ARROW} />
                    <ArrowText>{arrowText}</ArrowText>
                </ArrowContainer>

        </>
    );
}
