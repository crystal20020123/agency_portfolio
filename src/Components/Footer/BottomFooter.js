import { Stack, Box, Typography } from "@mui/material";
import Link from "next/link";

//Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//Styles
import styles from "Styles/Footer/BottomFooter.styles";

const BottomFooter = () => {
  return (
    <Stack direction="row">
      <Typography variant="body1" component="p" sx={styles.Copyright}>
        © {new Date().getFullYear()} Fusion Softworks. All Rights Reserved.
      </Typography>
      <Box>
        <Stack direction="row" sx={styles.Location}>
          <LocationOnIcon style={{ fontSize: "32px" }} />
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
                <EmailIcon style={{ fontSize: "32" }} />
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="tel:+50253720248">
              <a>
                <WhatsAppIcon style={{ fontSize: "32" }} />
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="https://t.me/miracle_guy">
              <a>
                <TelegramIcon style={{ fontSize: "32" }} />
              </a>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default BottomFooter;
