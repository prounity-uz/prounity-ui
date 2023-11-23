// App.tsx
import './App.css';
import { PuButton, defineCustomElements } from 'pro-unity-ui';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <PuButton>
        Elevated button
      </PuButton>
    </div>
  );
}

export default App;