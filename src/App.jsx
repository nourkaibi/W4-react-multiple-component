import {usestate} from 'react';
const students = [
  { id: 1, name: "Sara", age: 21 },
  { id: 2, name: "Ali", age: 22 },
  { id: 3, name: "nour", age:20},
];
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Student List</h1>
      <input 
        type="text" 
        placeholder="Search students..." 
        onChange={handleSearch} 
      />
      <ul>
        {students
          .filter(student => 
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
          .map((student) => (
            <li key={student.id}>
              {student.name} - Age: {student.age}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;

