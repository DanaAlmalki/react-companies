import { useState } from "react";
import "./App.css";

function App() {
  const companies = [
    {
      id: "1",
      name: "Google",
      img: "src/assets/google.webp",
      text: "Google went to appeals court Monday in an attempt to convince a three-judge panel to overturn a jury’s verdict declaring its app store for Android smartphones as an illegal monopoly and block the penalties imposed by a federal judge to stop the misbehavior. Video game maker Epic Games, which brought the case alleging Google’s Play Store has been abusing its stranglehold over the Android app market, countered with arguments outlining why both the verdict and punishment should be affirmed to foster more innovation and lower prices.",
    },
    {
      id: "2",
      name: "Apple",
      img: "src/assets/apple.webp",
      text: "Apple has agreed to a $95m settlement to resolve a class action lawsuit claiming its Siri voice assistant violated user privacy, Reuters reports. The preliminary settlement, filed on 31 October 2023 in the Oakland, California federal court, awaits approval from US District Judge Jeffrey White, the news publication noted. The lawsuit alleged that Siri recorded private conversations and shared them with third parties.",
    },
    {
      id: "3",
      name: "Microsoft",
      img: "src/assets/microsoft.avif",
      text: "In a significant legal development, Microsoft has been ordered to pay $242 million following a jury verdict that found the tech giant infringed on patents related to its Cortana virtual assistant. The case was won by Skiermont Derby, representing their client. This lawsuit highlights the ongoing complexities and challenges in the tech industry regarding intellectual property rights. For more details, read the full article on Reuters.",
    },
    {
      id: "4",
      name: "Samsung",
      img: "src/assets/samsung.avif",
      text: "A Texan jury has ordered Samsung to pay Californian start-up Mojo Mobility just over $192m for infringing five of its wireless charging patents. On 13 September the jury, before US district judge Rodney Gilstrap in the US District Court for the Eastern District of Texas, found that Samsung had wilfully infringed five of Mojo’s patents related to wireless charging technology and products in its Galaxy smartphones and other devices.",
    },
  ];

  const [selected, setSelected] = useState("1");

  return (
    <div className="app">
      <div className="dropdown">
        <h2>Choose a company</h2>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {companies.map((company) => (
            <option value={company.id}>{company.name}</option>
          ))}
        </select>
      </div>

      {companies.map(
        (company) =>
          company.id === selected && (
            <div className="company">
              <img src={company.img} />
              <h1>{company.name}</h1>
              <p>{company.text}</p>
            </div>
          )
      )}
    </div>
  );
}

export default App;
