import React from "react";

const stacks = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "REST API",
  "Git & GitHub",
];

function TechStack() {
  return (
    <section className="section" id="techstack">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">
          Teknologi yang kami gunakan untuk membangun aplikasi cepat & modern.
        </p>
        <div className="stack-grid">
          {stacks.map((t) => (
            <span key={t} className="stack-pill">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
