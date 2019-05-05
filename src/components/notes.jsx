import React from 'react';

const Notes = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <table className="table">
        {/* <thead>
        <tr>
          <th scope="row" />
        </tr>
      </thead> */}
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(todo)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notes;
