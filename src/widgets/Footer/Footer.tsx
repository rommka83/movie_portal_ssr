import { UseMedia } from 'shared/hooks/useMedia';
import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';

export const Footer = () => {
  const tablet = UseMedia('(max-width: 1253px)');
  if (tablet) {
    return <FooterMobile />;
  }
  return <FooterDesktop />;
};
