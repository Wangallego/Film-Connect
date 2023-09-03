import PropTypes from 'prop-types'; // Importa PropTypes
import rating from '../assets/rating.svg';

const Rating = ({ voteAverage }) => {
  return (
    <div className="flex justify-between items-center gap-2 absolute -bottom-4 left-0 w-full z-99">
      <div className='flex gap-4  rounded-full w-[6rem] h-[2rem] bg-indigo-500 justify-center items-center'>
        <img src={rating} alt="Rating" className='w-[1.5rem]' />
        <strong className="mt-2 text-sm flex gap-2 ">{voteAverage}</strong>
      </div>
    </div>
  );
}

Rating.propTypes = {
  voteAverage: PropTypes.number.isRequired, // Agrega la validación de PropTypes
};

export default Rating;
