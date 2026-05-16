import { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("");

  async function getCatFact() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    setFact(data.fact);
  }

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <div>
      <h2>🐱 Random Cat Fact</h2>

      <p>{fact}</p>

      <button onClick={getCatFact}>
        New Fact
      </button>
    </div>
  );
}

export default CatFact;