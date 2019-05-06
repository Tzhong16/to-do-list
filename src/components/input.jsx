import React from 'react';

const Input = ({ onChange, onSubmit, note }) => {
  return (
    <div id="input " className="container ">
      <form onSubmit={onSubmit}>
        <div className="form-group  d-flex mt-3">
          <input
            value={note}
            onChange={onChange}
            type="text"
            className="form-control p-2 w-100 m-auto"
            placeholder="Input something to do..."
          />
          <button
            className={'btn  btn-primary flex-shrink-1 ml-2'}
            disabled={note === '' ? true : false}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
