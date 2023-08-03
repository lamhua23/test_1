import React from 'react';
import './App.css';

const students = [
  { id: 1, name: 'Alice', major: 'IT', GPA: 3.2 },
  { id: 2, name: 'Bob', major: 'SE', GPA: 2.4 },
  { id: 3, name: 'Carol', major: 'SE', GPA: 2.8 },
  { id: 4, name: 'David', major: 'IT', GPA: 3.8 },
  { id: 5, name: 'Anh', major: 'IT', GPA: 3.0 },
];

const StudentTable = ({ major }) => {
  const filteredStudents = students.filter(student => student.major === major);
  const sortedStudents = filteredStudents.sort((a, b) => b.GPA - a.GPA);

  return (
    <div>
      <h2>{major} Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Major</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.major}</td>
              <td>{student.GPA}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App2() {
  return (
    <div className="App">
      <StudentTable major="IT" />
      <StudentTable major="SE" />
    </div>
  );
}

export default App2;
