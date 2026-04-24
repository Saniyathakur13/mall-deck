import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      padding: "15px",
      background: "rgba(0,0,0,0.6)",
      backdropFilter: "blur(10px)",
      textShadow: "0 0 20px rgba(255,255,255,0.1)",
     height: "70px",   // 👈 important
  zIndex: 1000,
    }}>
      
      {["hero","why","retail","dining","entertainment","events"].map((sec) => (
        <Link
          key={sec}
          to={sec}
          smooth={true}
          duration={500}
          style={{ cursor: "pointer", color: "#fff" }}
        >
          {sec.toUpperCase()}
        </Link>
      ))}

    </div>
  );
};

export default Navbar;