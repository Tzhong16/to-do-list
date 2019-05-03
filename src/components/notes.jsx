import React from 'react';

const Notes = ({ todos }) => {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notes;
