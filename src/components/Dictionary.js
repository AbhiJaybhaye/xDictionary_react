import React from "react";
import { dictionary } from "./DictionaryData";
import { useState } from "react";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const res = dictionary.find(
      (data) => data.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setDefinition(
      res ? res.meaning : "Word not found in the dictionary."
    );
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {definition && (
        <>
          <br />
          <strong>Definition:</strong>
          <p>{definition}</p>
        </>
      )}
    </div>
  );
};

export default Dictionary;
