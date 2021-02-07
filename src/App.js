import "./App.css";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(255, 247, 244)",
          paddingBottom: "1rem",
          marginBottom: "1rem",
        }}
      >
        <TopSection></TopSection>
      </div>
      <BottomSection />
    </div>
  );
}

export default App;
