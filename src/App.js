import logo from "./logo.svg";
import "./App.css";
import Subheader from "./components/Subheader";
import Spacer from "./components/Spacer";
import Link from "./components/Link";

function App() {
  let links = [{ title: "External Links", url: "google.com" }];

  return (
    <div className="App">
      <h1 style={{ marginBottom: "5px" }}>Bardia's Website</h1>
      <Subheader>Raw thoughts. Minimal CSS.</Subheader>
      <img
        src="https://pbs.twimg.com/profile_images/1475304994329006082/RMXOnRTB_400x400.jpg"
        alt="Paris"
        className="profilePic"
      />
      <Subheader variant="small">Me</Subheader>
      <Spacer space="20px" />
      {links.map((link) => (
        <Link />
      ))}
    </div>
  );
}

export default App;
