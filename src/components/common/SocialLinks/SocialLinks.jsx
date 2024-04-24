import {
  Wrapper,
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Link,
} from './SocialLinks.styled';

const socialMediaLinks = [
  { url: 'https://www.facebook.com/', icon: Facebook },
  { url: 'https://www.youtube.com/', icon: Youtube },
  { url: 'https://www.twitter.com/', icon: Twitter },
  { url: 'https://www.instagram.com/', icon: Instagram },
];

export const SocialLinks = () => {
  const renderLinks = socialMediaLinks.map(({ url, icon: Icon }) => (
    <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
      <Icon />
    </Link>
  ));

  return <Wrapper>{renderLinks}</Wrapper>;
};
