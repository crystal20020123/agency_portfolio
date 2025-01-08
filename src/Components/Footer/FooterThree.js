import { Box, Grid, Typography } from "@mui/material";

//Images
import Member1 from "Assets/footer/member-1.jpg";
import Member2 from "Assets/footer/member-2.png";
import Member3 from "Assets/footer/member-3.jpg";
import Member4 from "Assets/footer/member-4.png";

//Styles
import styles from "Styles/Footer/FooterFour.styles";

const FooterFour = () => {
  return (
    <Box>
      <Typography variant="h6" component="h6" sx={styles.Title}>
        Our Members
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Member1}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Member2}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Member3}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
          <Grid item xxs={6}>
            <Box
              component="img"
              src={Member4}
              sx={styles.Image}
              alt="Gallery"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default FooterFour;
