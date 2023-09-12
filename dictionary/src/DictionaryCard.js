import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Header from "./Header";

export default function DictionaryCard({ wordData, searchTerm, onSearch }) {
  if (!wordData) {
    return null;
  }

  const { word, phonetics, meanings } = wordData[0];
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-2xl font-semibold mb-2">{word}</h2>
      <div className="mb-4">
        <Header />
        <Searchbar />
        {phonetics.map((phonetic, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{phonetic.text}</p>
            {phonetic.audio && (
              <audio controls>
                <source src={phonetic.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
      <div>
        {meanings.map((meaning, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{meaning.partOfSpeech}</p>
            <ul>
              {meaning.definitions.map((definition, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-semibold">Definition:</span>{" "}
                  {definition.definition}
                  {definition.example && (
                    <p>
                      <span className="font-semibold">Example:</span>{" "}
                      {definition.example}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
