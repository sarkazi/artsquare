import ParamBlock from "@/components/Main/ParamBlock";
import { Box, Button, Flex } from "@mantine/core";
import React from "react";
import styles from "./priorStage.module.scss";

interface IPriorStageProps {
  setStage: (value: "select" | "prior" | "result") => void;
}

const PriorStage: React.FC<IPriorStageProps> = ({ setStage }) => {
  return (
    <Box className={styles.mask}>
      <ParamBlock style={{ marginBottom: "132px" }} hasInput />
      <Flex className={styles.buttonsBlock} align="center">
        <Button onClick={() => setStage("select")} className={styles.changeBtn}>
          Change
        </Button>
        <Button onClick={() => setStage("result")} className={styles.orderBtn}>
          Order
        </Button>
      </Flex>
    </Box>
  );
};

export default PriorStage;
