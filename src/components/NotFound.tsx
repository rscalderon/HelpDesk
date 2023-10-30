import SadDog from '../assets/saddog2.png';

function NotFound() {
  return (
    <>
      <p>Oops! This page doesn't seem to exist</p>
      <img src={SadDog} />
    </>
  );
}

export default NotFound;
