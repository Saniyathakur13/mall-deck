import { motion } from "framer-motion";

const stats = [
  { number: "100M+", label: "Annual Visitors" },
  { number: "1200+", label: "Retail Stores" },
  { number: "200+", label: "Dining Experiences" },
  { number: "150+", label: "Events per Year" },
];

const Stats = () => {
  return (
    <section style={{ textAlign: "center", background: "transparent" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ fontSize: "2.5rem", marginBottom: "40px" }}
      >
        Scale & Impact
      </motion.h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "30px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h1 style={{ fontSize: "2rem" }}>{item.number}</h1>
            <p style={{ color: "#aaa" }}>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;