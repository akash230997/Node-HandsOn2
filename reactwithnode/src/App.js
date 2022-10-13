// import logo from './logo.svg';
import './App.css';

function App() {
  const FullFilled = (e) => {
    e.preventDefault();
    console.log('Hello')
  }
  return (
    <div className="App">
      <h1>FORM WITH NODEJS</h1>
      <form action="" onSubmit={FullFilled}>
        <label htmlFor="Fname">First Name :<span style={{color:'red'}}>*</span> </label>
        <input type="text" placeholder='First Name' /> <br/><br/>
        <label htmlFor="Lname">Last Name :<span style={{ color: 'red' }}>*</span> </label>
        <input type="text" placeholder='Last Name' /><br/><br/>
        <label htmlFor="Email">Email Detail:<span style={{ color: 'red' }}>*</span> </label>
        <input type="text" placeholder='Email' /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
