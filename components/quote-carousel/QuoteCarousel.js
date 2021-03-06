import { getString } from '../../lib/richText';
import {
  ScrollToCarousel,
  ContentWrapper,
  TextWrapper,
  TitleWrapper,
  DescriptionWrapper,
  QuoteContainer,
  QuoteWrapper,
  CarouselContainer,
  ImageArchWrapper,
  ImageArchContentWrapper,
  ArchImage,
  ArchOutline,
  ArchSpark,
  AuthorsContainer,
  AuthorsWrapper,
} from './QuoteCarousel.style';
import { icons } from '../../style/icons';
import React, { useState, useRef, useEffect } from 'react';
import { registerObserver } from '../../lib/intersectionObserver';
import { PlaceHolder } from '../base-components/BaseComponents';

const PREVIEW_CHANGE_IN_MILLISECONDS = 5000;

export default function QuoteCarousel({
  quoteCarouselData,
  isAuthorTestimonies,
  authors,
  id,
}) {
  const { title, description, quotes, quoteImage } = quoteCarouselData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    var fadeIn;
    var fadeOut;
    const showContent = setTimeout(() => {
      fadeIn = setTimeout(() => {
        setFadeIn(true);
        setActiveIndex((activeIndex + 1) % quotes.length);
      }, PREVIEW_CHANGE_IN_MILLISECONDS);

      fadeOut = setTimeout(() => {
        setFadeIn(false);
      }, PREVIEW_CHANGE_IN_MILLISECONDS / 2);
    }, PREVIEW_CHANGE_IN_MILLISECONDS);

    return () => {
      clearTimeout(showContent);
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [activeIndex]);

  const placeHolderRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    registerObserver(placeHolderRef.current, setVisible);
  }, []);

  if (visible) {
    return (
      <>
        <ScrollToCarousel id={id} />
        <ContentWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <TextWrapper isAuthorTestimonies={isAuthorTestimonies}>
            <TitleWrapper>{getString(title)}</TitleWrapper>
            <DescriptionWrapper>{getString(description)}</DescriptionWrapper>
          </TextWrapper>
          <CarouselContainer isAuthorTestimonies={isAuthorTestimonies}>
            <ImageArchWrapper>
              <ImageArchContentWrapper>
                <ArchSpark src={icons.FILLED_SPARK_WHITE} />
                <ArchImage url={quoteImage.url} />
                <ArchOutline />
                <QuoteContainer>
                  <QuoteWrapper
                    key={Number.parseInt(activeIndex)}
                    fadeIn={fadeIn}
                    isAuthorTestimonies={isAuthorTestimonies}
                  >
                    {quotes[Number.parseInt(activeIndex)]}
                  </QuoteWrapper>
                  {isAuthorTestimonies && (
                    <AuthorsContainer isAuthorTestimonies={isAuthorTestimonies}>
                      <AuthorsWrapper
                        key={Number.parseInt(activeIndex)}
                        fadeIn={fadeIn}
                      >
                        - {authors[Number.parseInt(activeIndex)]}
                      </AuthorsWrapper>
                    </AuthorsContainer>
                  )}
                </QuoteContainer>
              </ImageArchContentWrapper>
            </ImageArchWrapper>
          </CarouselContainer>
        </ContentWrapper>
      </>
    );
  }
  return <PlaceHolder ref={placeHolderRef} />;
}
