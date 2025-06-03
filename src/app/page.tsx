import * as Sections from "./sections";

function App() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {Object.values(Sections).map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}

export default App;
