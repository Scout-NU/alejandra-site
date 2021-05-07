import React, { useState } from 'react';
import { getString } from '../../lib/richText';
import PageLink from '../page-link/PageLink';
import { icons } from '../../style/icons';
import { Overlay } from '../base-components/BaseComponents';
import {
  CloseXImage,
  HamburgerImage,
  HamburgerMenu,
  HamburgerMenuContent,
  LinkWrapper,
  LogoWrapper,
  NavigationLinksWrapper,
  NavigationWrapper,
  Logo
} from './Navigation.styles';
import { breakpointsObj } from '../../lib/responsive';
import { useMatchMedia } from '../../lib/hooks';

export default function Navigation({ navigationData }) {
  const { navigation_links: navigationLinks } = navigationData;
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isTabletOrMobile = useMatchMedia(
    `(max-width: ${breakpointsObj.tabletLg}px)`,
  );

  const currentPage = () => {
    if (typeof window === 'object') {
      const splitUrl = window.location.href.split('/');
      return splitUrl.includes('archive')
        ? 'archive'
        : splitUrl[splitUrl.length - 1] || 'home';
    } else {
      return '';
    }
  };

  const getNavigationLinks = () => {
    return navigationLinks.map((navigationLink, index) => (
      <NavigationLink
        key={index}
        navigationLink={navigationLink}
        onPage={currentPage() == navigationLink.link.uid}
      />
    ));
  };

  return (
    <>
      <NavigationWrapper>
        <PageLink href="/" passHref>
          <LogoWrapper>
            <Logo src={icons.SMALL_ALLEYWAY_LOGO}/>
          </LogoWrapper>
        </PageLink>
        {isTabletOrMobile ? (
          <>
            <HamburgerImage
              src={icons.HAMBURGER}
              onClick={() => {
                document.body.style.overflow = 'hidden';
                setIsHamburgerOpen(true);
              }}
            />
            {isHamburgerOpen && (
              <HamburgerMenu>
                <HamburgerMenuContent>
                  {getNavigationLinks()}
                </HamburgerMenuContent>
                <CloseXImage
                  src={icons.CLOSE_ICON}
                  onClick={() => {
                    document.body.style.overflow = 'visible';
                    setIsHamburgerOpen(false);
                  }}
                />
              </HamburgerMenu>
            )}
            <Overlay showOverlay={isHamburgerOpen} />
          </>
        ) : (
          <NavigationLinksWrapper>
            {getNavigationLinks()}
          </NavigationLinksWrapper>
        )}
      </NavigationWrapper>
    </>
  );
}

function NavigationLink({ navigationLink, onPage }) {
  const { link_name: linkName, link } = navigationLink;

  switch (link.link_type) {
    case 'Document':
      return (
        <LinkWrapper onPage={onPage}>
          <PageLink href={link.uid === 'home' ? '/' : `/${link.uid}`}>
            {getString(linkName)}
          </PageLink>
        </LinkWrapper>
      );
    case 'Web':
      return (
        <LinkWrapper>
          <a href={link.url} target="_blank" rel="noreferrer">
            {getString(linkName)}
          </a>
        </LinkWrapper>
      );
    default:
      return null;
  }
}
