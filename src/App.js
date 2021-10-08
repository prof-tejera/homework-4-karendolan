import './App.css';
import Calculator from 'components/Calculator';

const Styles = {
  header: {
    justifyContent: 'center',
    display: 'flex',
    color: 'green',
    fontWeight: 'bold',
    fontFamily: 'Courier New',
  },
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   }
};


function App() {
  return (
    <div className="App" style={Styles.app}>
      <div style={{
        width: '70%',
        height: '90%',
        backgroundColor: 'black',
        borderRadius: '25px',
        padding: '20px',

      }}>
        <header style={Styles.header}>
          Calculator
        </header>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
