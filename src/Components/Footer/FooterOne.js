import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
  return (
    <Box>
      <Typography variant="h6" component="h6" sx={styles.Title}>
        Contact
      </Typography>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <LocationOnIcon style={{ fontSize: "36px" }} />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
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
export default FooterOne;
