import { motion } from "framer-motion";

const events = [
  {
    title: "Global Concerts",
    desc: "Host world-class concerts and live performances",
    image: "/concert.jpg",
  },
  {
    title: "Brand Activations",
    desc: "Launch products and create immersive brand experiences",
    image: "/brand.jpg",
  },
  {
    title: "Corporate Events",
    desc: "Premium venues for conferences and business events",
    image: "/corporate.jpg",
  },
  {
    title: "Exhibitions & Expos",
    desc: "Large-scale exhibition and convention capabilities",
    image: "/expo.jpg",
  },
];

const Events = () => {
  return (
    <section style={{ textAlign: "center", background: "transparent",textShadow: "0 0 20px rgba(255,255,255,0.1)"}}>
      <section id="events"></section>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Events & Global Platform
      </motion.h2>
      <div style={{
  width: "60px",
  height: "3px",
  background: "#fff",
  margin: "10px auto 20px"
}} />

      <p style={{ color: "#aaa", marginBottom: "40px" }}>
        A destination for global events, brand launches, and experiences
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            style={{
              height: "250px",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: "100%",
                background: "rgba(0,0,0,0.6)",
                padding: "15px",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <h3>{item.title}</h3>
              <p style={{ color: "#ddd", fontSize: "14px" }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        style={{
          marginTop: "40px",
          padding: "12px 30px",
          fontSize: "16px",
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: "25px",
          cursor: "pointer",
        }}
      >
        Book an Event
      </motion.button>

    </section>
  );
};

export default Events;