import './App.css';
import Main from './components/Main';
import { inject } from '@vercel/analytics';

inject();

function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
