import { motion } from "framer-motion";

const stats = [
  { title: "100M+", desc: "Annual Visitors" },
  { title: "1200+", desc: "Retail Stores" },
  { title: "200+", desc: "Dining Options" },
  { title: "Global", desc: "Tourist Destination" },
];

const Why = () => {
  return (
    <section style={{ textAlign: "center",textShadow: "0 0 20px rgba(255,255,255,0.1)"}}>
      <section id="why"></section>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "40px" }}
      >
        Why Dubai Mall?
      </motion.h2>
      <div style={{
  width: "60px",
  height: "3px",
  background: "#fff",
  margin: "10px auto 20px"
}} />
      <p style={{ color: "#aaa" }}>
  The world's most visited retail and lifestyle destination
</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        
        {stats.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
  padding: "30px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: "10px"
}}
whileHover={{
  scale: 1.05,
  boxShadow: "0 0 30px rgba(255,255,255,0.2)"
}}
          >
            <h1 style={{ fontSize: "2rem" }}>{item.title}</h1>
            <p>{item.desc}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Why;