import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <img src="assets/logo.png" alt="logo" className="logo" />
      <h1 className="title">ChordM8 🎵</h1>
      <div className="about-container">
        <p className="tagline">Curated chord progression inspirations.</p>
        <a
          className="theory-link"
          target="_blank"
          href="https://www.musictheoryacademy.com/understanding-music/chord-progressions/"
        >
          The Music Theory of Chord Progressions
        </a>
        <p className="about">
          That indescribable hype in an EDM song, the tug on your heart, or
          spark of excitement in your favorite song? You can thank chord
          progressions for that!
        </p>
        <p className="like-cta">
          Take inspiration for your next song or just explore! Hit
          <i className="red-heart fas fa-heart" /> to 'like' your favorites!
        </p>
      </div>
    </section>
  );
};

export default Sidebar;
