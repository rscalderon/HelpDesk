import './Banner.scss';

interface BannerProps {
  message: string;
  closeBanner: () => void;
}

function Banner({ closeBanner, message }: BannerProps) {
  return (
    <div id='banner'>
      <p>{message}</p>
      <div id='close-banner' onClick={closeBanner}>
        X
      </div>
    </div>
  );
}

export default Banner;
