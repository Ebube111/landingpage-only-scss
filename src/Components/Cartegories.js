import React from "react";

const Cartegories = ({ filters, cartegories }) => {
  return (
    <div className="buttons">
      {cartegories.map((cat, i) => {
        return (
          <button
            className="btn-port"
            type={"button"}
            key={i}
            onClick={() => filters(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Cartegories;
