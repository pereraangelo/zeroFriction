import "./App.css";
import Body from "./components/Body";
import TopSection from "./components/TopSection";
import { OrganizationConfigProvider } from "./contexts/OrganizationConfigContext";
function App() {
  return (
    <div className="App">
      <OrganizationConfigProvider>
        <TopSection  />
        <Body />
      </OrganizationConfigProvider>
    </div>
  );
}

export default App;
