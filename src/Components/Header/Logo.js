import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";

//Logos
import Logos from "Assets/header/logo.png";

const Logo = () => {
  return (
    <Box
      sx={{
        mt: "2px",
        a: {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        },
      }}
    >
      <Link to="home" spy={true} smooth={true} duration={500}>
        <Image src={Logos} width={60} height={40} alt="Logo" />
        <Box
          sx={{
            display: {
              xxs: "none",
              md: "block",
            },
          }}
        >
          <p style={{ fontSize: "28px", fontWeight: 700 }}>Fusion Softworks</p>
        </Box>
      </Link>
    </Box>
  );
};

export default Logo;
