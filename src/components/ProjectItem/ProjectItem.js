import React from "react";
import PropTypes from "prop-types";
import "./ProjectItem.scss";
import ReactMarkdown from "react-markdown";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { title, techStack, url, image, description } = this.props.fields;
    const src =
      (image && image.fields && image.fields.file && image.fields.file.url) ||
      null;
    const imgTitle = (image && image.fields && image.fields.title) || null;

    return (
      <Card
        className="card project-container"
        style={{
          borderColor: `${this.props.theme.fontColor}`
        }}
      >
        <a
          className="link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt={imgTitle}
              className="media"
              height="140"
              image={src}
              title={imgTitle}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="title"
                style={{
                  color: `${this.props.theme.fontColor}`
                }}
              >
                {title}
              </Typography>
              <Typography
                component="p"
                className="description"
                style={{
                  color: `${this.props.theme.fontColor}`
                }}
              >
                <ReactMarkdown source={description} />
              </Typography>
              {techStack && (
                <Typography
                  component="p"
                  className="techstack-container"
                  style={{
                    color: `${this.props.theme.fontColor}`
                  }}
                >
                  Built with:
                  <ul>
                    {techStack.map((tech, i) => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </a>
        <CardActions>
          {url && (
            <a
              className="link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="small"
                color="primary"
                style={{
                  color: `${this.props.theme.fontColor}`
                }}
              >
                Demo
              </Button>
            </a>
          )}
        </CardActions>
      </Card>
    );
  };
}

Project.propTypes = {
  fields: PropTypes.object,
  id: PropTypes.number
};

export default Project;
