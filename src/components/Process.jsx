import React from "react";

const steps = [
  {
    step: "01",
    title: "Discovery & Konsultasi",
    desc: "Diskusi kebutuhan, fitur, dan target bisnis Anda.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "Membuat wireframe dan desain tampilan yang sesuai brand.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Proses coding dengan React/React Native sesuai scope.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    desc: "Pengujian, revisi, dan deployment ke server / store.",
  },
];

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          Workflow jelas dan transparan dari awal sampai project live.
        </p>
        <div className="process-grid">
          {steps.map((s) => (
            <div key={s.step} className="process-card">
              <div className="process-step">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
