import * as Sections from "./sections";

function App() {
  return Object.values(Sections).map((Section, index) => <Section key={index} />);
}

export default App;
