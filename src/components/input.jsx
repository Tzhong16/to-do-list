import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div id="input " className="container ">
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group  d-flex mt-3">
            <input
              value={this.props.note}
              onChange={this.props.onChange}
              type="text"
              className="form-control p-2 w-100 m-auto"
              placeholder="Input something to do..."
            />
            <button
              className={
                this.props.note === ''
                  ? 'btn  btn-primary flex-shrink-1 ml-2 disabled'
                  : 'btn  btn-primary flex-shrink-1 ml-2 '
              }
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Input;
