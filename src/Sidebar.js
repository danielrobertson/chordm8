import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <img src="assets/logo.png" alt="logo" className="logo" />
      <h1 className="title">
        ChordM8{" "}
        <span role="img" aria-label="music-notes">
          🎵
        </span>
      </h1>
      <div className="about-container">
        <p className="tagline">Curated chord progression inspirations.</p>
        <a
          className="theory-link"
          href="https://www.musictheoryacademy.com/understanding-music/chord-progressions/"
        >
          Theory of Chord Progressions
        </a>
        <p className="about">
          That certain feel or emotion in your favorite song? Chord progressions
          are to thank for that!
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
