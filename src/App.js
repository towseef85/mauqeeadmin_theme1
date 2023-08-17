import logo from './logo.svg';
import './App.css';
import AppLayout from './components/common/AppLayout';
import LayoutContextProvider from './components/AppContexts/LayoutContextProvider';

function App() {
  return (
  <LayoutContextProvider>
    <AppLayout/>
  </LayoutContextProvider>
  );
}

export default App;
