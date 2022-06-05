import logo from "./logo.svg";
import "./App.css";
import Subheader from "./components/Subheader";
import Spacer from "./components/Spacer";
import Link from "./components/Link";

function App() {
  let links = [
    {
      title: "Socials",
      url: "https://www.instagram.com/bardia_safari/",
    },
    { title: "Linkedin", url: "https://www.linkedin.com/in/bardiasafari/" },
  ];
  let projects = [
    {
      title: "Fundsy",
      sub: "Revolutionize banking for nonprofits. $110,000 processed and FDIC insured partner bank.",
      url: "https://fundsy.io/",
    },
    {
      title: "ObjectiveCode",
      sub: "Project-based coding education.",
      url: "https://www.objectivecode.org/",
    },
    {
      title: "PercentYear",
      sub: "What % of 2022 is over?",
      url: "https://percentyear.netlify.app/",
    },
    {
      title: "CalcBuddy (Coming Soon)",
      sub: "A 5 made easier.",
      url: "",
    },
    {
      title: "ZuckDaily",
      sub: "Daily Mark Zuckerberg memes.",
      url: "https://zuckdaily.com/",
    },
  ];

  return (
    <div className="App">
      <h1 style={{ marginBottom: "5px" }}>Bardia Safari</h1>
      <Subheader>Raw thoughts. Minimal CSS.</Subheader>
      <img
        src="https://pbs.twimg.com/profile_images/1475304994329006082/RMXOnRTB_400x400.jpg"
        alt="Paris"
        className="profilePic"
      />

      <Spacer space="40px" />
      <p>
        My name is Bardia. I'm a high schooler in Irvine, CA that loves to code.
        You can find me at @bardia_safari. I enjoy good design, user experience,
        and clean code.
      </p>

      <div>
        {links.map((link) => (
          <Link title={link.title} link={link.url} />
        ))}
      </div>

      <h2 style={{ marginBottom: "10px", marginTop: "40px" }}>Projects</h2>
      <div>
        {projects.map((link) => (
          <>
            <Link title={link.title} link={link.url} />
            <p className="linkSub">{link.sub}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
