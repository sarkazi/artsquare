import React, { CSSProperties } from "react";
import { Text, createStyles } from "@mantine/core";
import styles from "./title.module.scss";

const useStyles = createStyles((_params) => ({
  title: {
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "48px",
    color: "white",
  },
}));

interface ITitleProps {
  style: CSSProperties | undefined;
  text: string;
}

const Title: React.FC<ITitleProps> = ({ style, text }) => {
  const { classes } = useStyles();

  return (
    <Text style={style} className={classes.title}>
      {text}
    </Text>
  );
};

export default Title;
