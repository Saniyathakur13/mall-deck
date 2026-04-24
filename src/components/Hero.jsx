import { motion } from "framer-motion";

const Hero = () => {
  return (
   <div
  id="hero"
  style={{
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  }}
>
      {/* 🎥 VIDEO */}
      <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
>
  <source src="/mall.mp4" type="video/mp4" />
</video>

      {/* 🌑 LIGHT OVERLAY (ONLY DARK, NO ANIMATION HERE) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.35)",  // 👈 lighter (important)
          zIndex: 1,
        }}
      />

      {/* ✨ ANIMATED LAYER (VERY SUBTLE) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.05), transparent)",
          backgroundSize: "200% 200%",
          animation: "shineMove 6s linear infinite",
        }}
      />

      {/* TEXT */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "4rem",
            fontWeight: "700",
          }}
        >
          Dubai Mall
        </motion.h1>

        <p style={{ color: "#c0e333", marginTop: "10px", fontSize: "18px" }}>
  A global platform for retail, entertainment, and brand experiences at unmatched scale
</p>
<p style={{ color: "#c1e319", marginTop: "10px", fontSize: "14px" }}>
  100M+ annual visitors • 1,200+ retail brands • World-class attractions
</p>
      </div>

    </div>
  );
};

export default Hero;