import {
  createStyles,
  Grid,
  Group,
  TextInput,
  Button,
  Text,
  Box,
} from "@mantine/core";
import { useState } from "react";
import clsx from "clsx";
import TabsCategory from "@/components/Main/TabsCategory";
import FileUpload from "@/components/Common/FileUpload";
import ArrowSvg from "../../../assets/svg/arrow.svg";
import styles from "./selectStage.module.scss";

const useStyles = createStyles((_params) => ({
  titleBlock: {
    columnGap: "30px",
    marginBottom: "60px",
  },
  decor: {
    width: "100px",
    height: "100px",
    backgroundColor: "#3499ED",
    transform: "rotate(12deg)",
  },
  text: {
    fontWeight: 700,
    fontSize: "64px",
    lineHeight: "85px",
    color: "white",
  },
  tabs: {
    borderBottom: "none",
  },
  tab: {
    borderBottom: "none",
  },
  listBlock: {
    marginTop: "8px",
  },
}));

const tabsVariants = [
  {
    text: "Image",
  },
  {
    text: "Video",
  },
  {
    text: "Text",
  },
  {
    text: "Code",
  },
];

interface ISelectStageProps {
  setStage: (value: "select" | "prior" | "result") => void;
}

const SelectStage: React.FC<ISelectStageProps> = ({ setStage }) => {
  const { classes } = useStyles();

  const [isShowList, setIsShowList] = useState<boolean>(false);

  return (
    <Grid className={styles.centerBlock}>
      <Group className={clsx([styles.titleBlock, classes.titleBlock])}>
        <Box className={classes.decor}></Box>
        <Text className={classes.text}>Artsquare</Text>
      </Group>
      <Group className={styles.inputBlock}>
        <TextInput
          className={styles.mainInput}
          placeholder="What do you want?"
        ></TextInput>
        <Button className={styles.sendBtn}>Send</Button>
      </Group>
      <Group className={styles.settingsBlock}>
        <TabsCategory tabsVariants={tabsVariants} />
        <Group className={styles.selectBlock}>
          <Box className={styles.upBlock}>
            <button onClick={() => setIsShowList(!isShowList)}>
              <Text className={styles.selectText}>Price</Text>
              <ArrowSvg />
            </button>
          </Box>
          {isShowList && (
            <ul className={clsx([styles.listBlock, classes.listBlock])}>
              <li>
                <button>
                  <Text className={styles.selectText}>$5</Text>
                </button>
              </li>
              <li>
                <button>
                  <Text className={styles.selectText}>$10</Text>
                </button>
              </li>
              <li>
                <button>
                  <Text className={styles.selectText}>$15</Text>
                </button>
              </li>
              <li>
                <TextInput placeholder="$" type="number"></TextInput>
              </li>
            </ul>
          )}
        </Group>
      </Group>
      <FileUpload style={{ marginBottom: "140px" }} size="sm" title="Example" />
      <Button onClick={() => setStage("prior")} className={styles.nextBtn}>
        Next
      </Button>
    </Grid>
  );
};

export default SelectStage;
