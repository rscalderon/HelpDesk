import SadDog from '../../assets/saddog2.png';
import './NotFound.scss';

function NotFound() {
  return (
    <>
      <p>
        Oops! This page doesn't seem to exist. Click on the links above to get
        back to the helpdesk!
      </p>
      <img id='NotFound' src={SadDog} />
    </>
  );
}

export default NotFound;
