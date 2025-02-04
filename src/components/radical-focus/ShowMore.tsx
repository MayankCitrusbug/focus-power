type props = {
  show: number;
  classNames: string;
}

const ShowMore: React.FC<props> = ({ show, classNames}) => {
  return (
    <div className={`px-6 pb-6 ${classNames}`}>
      <button className=" fp-white-bg show-more-ft fp-blue-dark-ft">Show {show} More</button>
    </div>
  );
};

export default ShowMore;
