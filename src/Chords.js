import React from "react";
import Progression from "./Progression";

const Chords = () => {
  // TODO move to a database
  const progressions = [
    { name: "I-V-IV", likes: 23 },
    { name: "I–V–vi–IV", likes: 256 },
    { name: "I-V-IV", likes: 2 },
    { name: "I-V-IV", likes: 0 },
    { name: "I-V-IV", likes: 4 },
    { name: "I-V-IV", likes: 3 },
    { name: "I-V-IV", likes: 57 },
    { name: "I-V-IV", likes: 12 },
    { name: "I-V-IV", likes: 7 },
    { name: "I-V-IV", likes: 45 },
    { name: "I-V-IV", likes: 53 },
    { name: "I-V-IV", likes: 78 },
    { name: "I-V-IV", likes: 100 },
    { name: "I-V-IV", likes: 1 },
    { name: "I-V-IV", likes: 0 },
    { name: "I-V-IV", likes: 0 },
  ];

  return (
    <ul className="chord-container">
      {progressions.map(({ name, likes }, i) => (
        <Progression name={name} likes={likes} key={i} />
      ))}
    </ul>
  );
};

export default Chords;
