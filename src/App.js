import logo from './logo.svg';
import './App.css';
import StudentForm from './formik';
import EmployeeForm from './employee';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <StudentForm></StudentForm>
      <EmployeeForm></EmployeeForm>
    </div>
  );
}

export default App;
