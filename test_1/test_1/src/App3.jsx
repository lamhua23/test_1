
import React, { useState } from 'react';
import './App.css';

const students = [
  { id: 1, name: 'Alice', major: 'IT', GPA: 3.2 },
  { id: 2, name: 'Bob', major: 'SE', GPA: 2.4 },
  { id: 3, name: 'Carol', major: 'SE', GPA: 2.8 },
  { id: 4, name: 'David', major: 'IT', GPA: 3.8 },
  { id: 5, name: 'Anh', major: 'IT', GPA: 3.0 },
];

function App3() {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const toggleStudent = (id) => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter(studentId => studentId !== id));
    } else {
      setSelectedStudents([...selectedStudents, id]);
    }
  };

  const filteredStudents = students.filter(student => selectedStudents.includes(student.id));

  return (
    <div className="App">
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name},{' '}
            <label>
              [ ] Show
              <input
                type="checkbox"
                checked={selectedStudents.includes(student.id)}
                onChange={() => toggleStudent(student.id)}
              />
            </label>
          </li>
        ))}
      </ul>
      <h2>Filtered Students</h2>
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
          {filteredStudents.map(student => (
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
}

export default App3;
