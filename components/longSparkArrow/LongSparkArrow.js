import { getString } from '../../lib/richText';
import {
    UnfilledSparkArrow,
    ArrowText,
    ArrowContainer,
} from './LongSparkArrow.styles';
import { icons } from '../../style/icons';

export default function LongSparkArrow({ arrowText }) {
    return (
        <>
            <ArrowContainer>
                <UnfilledSparkArrow src={icons.LONG_UNFILLED_SPARK_ARROW} />
                <ArrowText>{arrowText}</ArrowText>
            </ArrowContainer>
        </>
    );
}
