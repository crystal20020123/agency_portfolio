import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import * as React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
} from "@mui/material";
import ReadDialog from "./dialog";

const Template = ({ work }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card
        sx={{
          height: 420,
          padding: 2,
          backgroundColor: "#111333",
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={work.image}
            alt="image"
            height={200}
            sx={{ objectFit: "fill" }}
            onClick={handleClickOpen}
          />
          <CardContent sx={{ color: "white", textAlign: "center" }}>
            <Typography gutterBottom variant="body1" component="div">
              {work.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            sx={{ margin: "auto", color: "white", borderColor: "white" }}
            variant="outlined"
            onClick={() => router.push(work.url)}
          >
            Visit
          </Button>
        </CardActions>
      </Card>
      <ReadDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Template;
