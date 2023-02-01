import { Box, Flex, TextInput, Title } from "@mantine/core";
import { CSSProperties } from "react";
import styles from "./paramBlock.module.scss";

const params = [{ text: "image" }, { text: "$15" }];

interface IParamBlock {
  style: CSSProperties | undefined;
  hasInput?: boolean;
}

const ParamBlock: React.FC<IParamBlock> = ({ style, hasInput }) => {
  return (
    <Box style={style} className={styles.paramBlock}>
      <Flex
        justify="space-between"
        align="center"
        className={styles.paramUpBlock}
      >
        {hasInput ? (
          <TextInput
            className={styles.priorInput}
            value="Some colorful steampunk picture"
          ></TextInput>
        ) : (
          <Title>Some colorful steampunk picture</Title>
        )}

        <ul className={styles.paramList}>
          {params.map((el) => (
            <li key={el.text}>{el.text}</li>
          ))}
        </ul>
      </Flex>
      <Box className={styles.paramDownBlock}>
        <ul className={styles.paramDownList}>
          <li style={{ backgroundImage: `url('/img/result/img1.png')` }}>
            <span>Example</span>
          </li>
          <li style={{ backgroundImage: `url('/img/result/img2.png')` }}>
            <span>Example</span>
          </li>
          <li style={{ backgroundImage: `url('/img/result/img3.png')` }}>
            <span>Example</span>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default ParamBlock;
