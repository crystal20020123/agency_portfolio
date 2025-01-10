import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Box sx={{ flex: 1, mt: "5px" }}>
          <Image src={Logo} width={60} height={40} alt="Logo" />
        </Box>
        <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
          <CloseRoundedIcon />
        </ButtonBase>
      </Stack>
      <Typography variant="body1" component="p" sx={styles.Description}>
        Fusion Softworks is a dynamic software agency dedicated to delivering
        innovative technology solutions tailored to meet the unique needs of our
        clients. Our team of skilled developers and strategists collaborates
        closely with businesses to create custom software applications that
        drive efficiency and enhance user experiences. We pride ourselves on our
        commitment to quality, agility, and customer satisfaction, ensuring that
        every project aligns with our clients&apos; goals. Whether you are a
        startup or an established enterprise. We are here to turn your vision
        into reality.
      </Typography>
      <Box sx={styles.Navs}>
        {Navs &&
          Navs.map((nav, i) => (
            <Scroll
              key={i}
              activeClass="active"
              to={nav.Id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleDrawer(false)}
            >
              <ButtonBase sx={styles.Buttons}>{nav.name}</ButtonBase>
            </Scroll>
          ))}
      </Box>
      <Stack direction="row" sx={styles.Location}>
        <Box>
          <LocationOnIcon style={{ fontSize: "36px" }} />
        </Box>
        <Box>
          <Typography variant="h6" component="p">
            Guatemala city, Guatemala
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <Link href="mailto:fusion.softworks.gt@gmail.com">
            <a>
              <EmailIcon style={{ fontSize: "36px" }} />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="tel:+50253720248">
            <a>
              <WhatsAppIcon style={{ fontSize: "36px" }} />
            </a>
          </Link>
        </Box>
        <Box>
          <Link href="https://t.me/miracle_guy">
            <a>
              <TelegramIcon style={{ fontSize: "36px" }} />
            </a>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Drawers;
