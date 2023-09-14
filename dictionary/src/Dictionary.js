/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

export default function Dictionary({ searchKeyword }) {
  const [definition, setDefinition] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchKeyword) {
      setDefinition(null);
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchKeyword}`
        );
        let jsonData = await response.json();
        if (jsonData && jsonData.length > 0) {
          setDefinition(jsonData[0]);
          console.log(jsonData[0]);
        } else {
          setDefinition({ message: "No definition found." });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setDefinition({ message: "Error fetching definition." });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  return (
    <div className="p-4">
      {loading ? (
        <p>loading...</p>
      ) : definition ? (
        <div className="">
          <h2 className="text-2xl font-semibold">{definition.word}</h2>
          <h2 className="py-4 inline text-md italic text-[#9163cb]">
            {definition.phonetic}
          </h2>

          <ul className="flex flex-row p-4 overflow-auto">
            {definition.phonetics.map((number, index) => (
              <li key={index}>
                <audio controls className="p-1">
                  <source src={number.audio}></source>
                </audio>
                <h2 className="p-4 inline text-md italic text-[#f72585]">
                  {number.text}
                </h2>
              </li>
            ))}
          </ul>

          <ul>
            {definition.meanings.map((number, index) => (
              <>
                <li key={index} className="font-bold italic p-4">
                  {number.partOfSpeech}
                </li>{" "}
                <span>
                  <hr></hr>
                </span>
                <ul>
                  {number.definitions.map((definition, index) => (
                    <li key={index} className="text-md font-light p-2">
                      <p> - {definition.definition}</p>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
