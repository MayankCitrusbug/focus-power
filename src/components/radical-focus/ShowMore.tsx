type props = {
  show: number;
  classNames: string;
}

const ShowMore: React.FC<props> = ({ show, classNames}) => {
  return (
    <div className={`pb-2 sm:pb-4 md:pb-6 ${classNames}`}>
      <button className=" fp-white-bg show-more-ft fp-blue-dark-ft">Show {show} More</button>
    </div>
  );
};

export default ShowMore;
