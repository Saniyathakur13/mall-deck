import { motion } from "framer-motion";

const attractions = [
  {
    title: "Dubai Aquarium",
    desc: "One of the largest suspended aquariums in the world",
    image: "/aquarium.jpg",
  },
  {
    title: "Ice Rink",
    desc: "Olympic-sized skating experience",
    image: "/icerink.jpg",
  },
  {
    title: "VR Park",
    desc: "Immersive virtual reality experiences",
    image: "/vrpark.jpg",
  },
  {
    title: "Cinema",
    desc: "Luxury movie experience with latest releases",
    image: "/cinema.jpg",
  },
];

const Entertainment = () => {
  return (
    <section style={{ textAlign: "center", background: "transparent", textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
      <section id="entertainment"></section>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "20px" }}
      >
        Attractions & Entertainment
      </motion.h2>
      <div style={{
  width: "60px",
  height: "3px",
  background: "#fff",
  margin: "10px auto 20px"
}} />

      <p style={{ color: "#aaa", marginBottom: "40px" }}>
        More than shopping — a world of experiences
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {attractions.map((item, index) => (
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
                padding: "15px",
                borderRadius: "0 0 10px 10px",
              }}
            >
              <h3 style={{ marginBottom: "5px" }}>{item.title}</h3>
              <p style={{ color: "#ddd", fontSize: "14px" }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Entertainment;