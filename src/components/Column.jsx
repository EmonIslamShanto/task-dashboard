import Card from "./Card";
import PropTypes from 'prop-types';

const Column = ({ title, color }) => {
  return (
    <div className="min-w-[420px] bg-gray-200 mr-5 p-4 flex flex-col">
      <div className={`flex items-center justify-between text-gray-500 rounded-md p-2 font-bold`}>
        <div className="flex items-center">
        { color && <div className={`${color} p-3 rounded-s-3xl mr-2`}></div>}
        <span>{title}</span>
        </div>
        <span className="font-bold bg-gray-300 px-3 py-1 rounded-md">0</span>
      </div>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[90vh] mt-4">
        {[...Array(10)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Column;

