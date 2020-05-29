import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
    marginBottom: 40,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    flexGrow: 1,
  },
  header: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

export default function Post({
  authorData,
  title,
  date,
  url,
  featured_image,
  excerpt,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar alt={authorData.first_name} src={authorData.avatar_URL} />
        }
        title={title}
        subheader={new Date(date).toDateString()}
      />
      <CardMedia
        className={classes.media}
        image={featured_image}
        title={title}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" size="small">
          <Link color="inherit" href={url}>
            Idż do artykułu
          </Link>
        </Button>
        <Button variant="contained" color="secondary" size="small">
          <Link color="inherit" href={authorData.profile_URL}>
            O autorze
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
