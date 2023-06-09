import PropTypes from "prop-types";
import { useCallback, useState } from "react";

export const Accordion = ({ data, height, width, keyAttr, valAttr }) => {
  const [current, setCurrent] = useState(null);

  const select = useCallback((i) => {
    if (current === i) return setCurrent(null);
    setCurrent(i);
  });

  return (
    <div
      className="flex flex-col items-center justify-center divide-y-2 border 
      border-b-gray-300 rounded-md"
      style={{ height: `${178}px` }}
    >
      {data.map((item, index) => (
        <div className="flex flex-col group" key={index}>
          <div
            className="text-gray-500 bg-white text-xl flex items-center justify-between
          cursor-pointer group-hover: text-gray-500  p-2"
            onClick={() => select(index)}
          >
            <span>{item[keyAttr]}</span>
            <span>{current === index ? "-" : "+"}</span>
          </div>
          <div
            className="transition-all duration-500 ease-in-out overflow-auto"
            style={{ maxHeight: current === index ? height : 0 }}
          >
            {item[valAttr]}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.PropTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  keyAttr: PropTypes.string,
  valAttr: PropTypes.string,
};

Accordion.defaultProps = {
  width: 500,
  height: 500,
  keyAttr: "title",
  valAttr: "content",
};