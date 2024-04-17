import './App.css';
import SigupDetails from './functionalcomponents/hooks/forms/Signup.form';
import UncontrolledEx from './functionalcomponents/hooks/forms/UncontrolledEx';
import FruitList from './functionalcomponents/hooks/forms/fruitsform';

function App() {
  return (
    <div className='App'>
      <UncontrolledEx/>
      <FruitList/>
      <SigupDetails/>
    </div>
  );
}

export default App;
