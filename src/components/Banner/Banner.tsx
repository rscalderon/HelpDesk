import './Banner.scss';

interface BannerProps {
  closeBanner: () => void;
}

function Banner({ closeBanner }: BannerProps) {
  return (
    <div id='banner'>
      <p>
        Your ticket has been received! You should expect to hear back within
        24-48hrs. Thank you for using the Zealthy Helpdesk.
      </p>
      <div id='close-banner' onClick={closeBanner}>
        X
      </div>
    </div>
  );
}

export default Banner;
