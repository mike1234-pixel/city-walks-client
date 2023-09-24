import "./LoadingBar.css";

const LoadingBar = () => {
  return (
    <div className='loading-bar__container'>
      <p>Loading...</p>
      <div className='loading-bar' />
    </div>
  );
};

export default LoadingBar;
