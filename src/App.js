import './styles.scss';
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <div className="AllApps">
      <div className="App">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;