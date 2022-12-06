type size = {
  windowSize: string
}

const Spinner = (windowSize: size) => {
  return (
    <div className={`w-${windowSize} h-${windowSize} flex items-center justify-center`}>
      <div className="pinwheel">
        <div className="pinwheel__line"></div>
        <div className="pinwheel__line"></div>
        <div className="pinwheel__line"></div>
        <div className="pinwheel__line"></div>
        <div className="pinwheel__line"></div>
        <div className="pinwheel__line"></div>  
      </div>
    </div>
  );
};
export default Spinner;
