import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header title='Hello'/>
    </div>
  );
}

Header.defaultProps = {
  title: 'Keep Tabs'
}
export default App;
