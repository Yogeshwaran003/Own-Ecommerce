import React, { useEffect } from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  useEffect(() => {
    const motion = window.Motion;
    if (motion) {
      const { animate, scroll } = motion;

      const items = document.querySelectorAll(".img-container");

      // Animate gallery horizontally during vertical scroll
      scroll(
        animate(".img-group", {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        }),
        { target: document.querySelector(".img-group-container") }
      );

      // Progress bar representing gallery scroll
      scroll(animate(".progress", { scaleX: [0, 1] }), {
        target: document.querySelector(".img-group-container"),
      });
    } else {
      console.error("Motion library is not available. Please include it.");
    }
  }, []);

  return (
    <article id="gallery">
      <header>
        <h2 className="text-white text-bold">Lines of London</h2>
      </header>
      <section className="img-group-container">
        <div>
          <ul className="img-group">
            {["Text #001", "Text #002", "Text #003", "Text #004", "Text #005"].map(
              (text, index) => (
                <li className="img-container" key={index}>
                  <div className="text-content">{text}</div>
                  <h3>#{index + 1}</h3>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
      <footer>
        <p>
          Photos by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/mattgperry"
          >
            Matt Perry
          </a>
        </p>
      </footer>
      <div className="progress"></div>
    </article>
  );
};

export default Gallery;
