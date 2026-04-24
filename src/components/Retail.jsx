import { motion } from "framer-motion";

const brands = [
  "Zara",
  "Nike",
  "Apple",
  "Gucci",
  "Louis Vuitton",
  "H&M",
];

const Retail = () => {
  return (
    <section style={{ textAlign: "center", background: "transparent", textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
      <section id="retail"></section>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Global Retail Destination
      </motion.h2>
      <div style={{
  width: "60px",
  height: "3px",
  background: "#fff",
  margin: "10px auto 20px"
}} />

      <p style={{ color: "#aaa", marginBottom: "40px" }}>
        Home to the world’s most iconic brands
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
        }}
      >
        {brands.map((brand, index) => (
          <motion.div
  whileHover={{ scale: 1.1 }}
            style={{
  padding: "25px",
  borderRadius: "14px",

  background:"transparent",  // transparency
  backdropFilter: "blur(20px)",          // smudge effect
  WebkitBackdropFilter: "blur(20px)",    // safari support

  border: "1px solid rgba(255,255,255,0.15)",

  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",

  transition: "all 0.3s ease",
  cursor: "pointer",
}}
          >
            <h3>{brand}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Retail;