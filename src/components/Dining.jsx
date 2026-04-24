import { motion } from "framer-motion";

const places = [
  {
    title: "Fine Dining",
    desc: "Luxury restaurants with world-class chefs",
  },
  {
    title: "Casual Dining",
    desc: "Everyday favorites and global cuisines",
  },
  {
    title: "Cafés",
    desc: "Coffee culture and social spaces",
  },
  {
    title: "Food Courts",
    desc: "Diverse and vibrant food experiences",
  },
];

const Dining = () => {
  return (
    <section style={{ textAlign: "center", background: "transparent",textShadow: "0 0 20px rgba(255,255,255,0.1)"}}>
      <section id="dining"></section>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Dining & Lifestyle
      </motion.h2>
      <div style={{
  width: "60px",
  height: "3px",
  background: "#fff",
  margin: "10px auto 20px"
}} />

      <p style={{ color: "#fff",
fontWeight: "600", marginBottom: "40px" }}>
        A destination for food, culture, and experiences
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {places.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            style={{
  padding: "25px",
  borderRadius: "14px",

  background: "rgba(255,255,255,0.08)",  // transparency
  backdropFilter: "blur(12px)",          // smudge effect
  WebkitBackdropFilter: "blur(12px)",    // safari support

  border: "1px solid rgba(255,255,255,0.15)",

  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",

  transition: "all 0.3s ease",
  cursor: "pointer",
}}
          >
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ color: "#bbb" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dining;