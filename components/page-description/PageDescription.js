import { getString } from '../../lib/richText';
import {
  PageDescriptionContainer,
  DescriptionContainer,
  Description,
  Img,
} from './PageDescription.styles';
import LongSparkArrow from '../long-spark-arrow/LongSparkArrow';
import { useSpring } from 'react-spring';

export default function PageDescription({
  description,
  arrowText,
  img,
  scrollTo,
}) {
  const descriptionAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-10em)' },
    config: { tension: 20, friction: 15 },
    delay: 1500,
  });

  const imgAnimation = useSpring({
    to: { opacity: 0.1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(10em)' },
    config: { tension: 20, friction: 15 },
  });

  return (
    <div>
      <PageDescriptionContainer 
                  initial={{opacity: 0, y: 100 }}
                  animate={{opacity: 1, y: 0}} 
                  transition={{ type: "spring", duration: 1, damping: 40, bounce: 0, delay: 2}} 
      >
        <LongSparkArrow arrowText={arrowText} scrollTo={scrollTo} />
        <DescriptionContainer>
          <Description>{getString(description)}</Description>
        </DescriptionContainer>
      </PageDescriptionContainer>
      <Img src={img.url} alt={img.alt} 
            initial={{opacity: 0, x: 150 }}
            animate={{opacity: .1, x: 0}} 
            transition={{ type: "spring", duration: 4, bounce: 0}} 
       />
    </div>
  );
}
