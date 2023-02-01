import { NextPage } from "next";
import Header from "@/components/Common/Header";
import { AppShell, Container } from "@mantine/core";
import styles from "../styles/home.module.scss";
import { useState } from "react";
import SelectStage from "@/components/SearchStages/SelectStage";
import ResultStage from "@/components/SearchStages/ResultStage";
import ModalCard from "@/components/Main/ModalCard";
import PriorStage from "@/components/SearchStages/PriorStage";

export type modalContentType = {
  imgLink: string;
};

const Home: NextPage = () => {
  const [stage, setStage] = useState<"select" | "prior" | "result">("select");

  const [openedModal, setOpenedModal] = useState<boolean>(false);

  const [modalContent, setModalContent] = useState<modalContentType>(
    {} as modalContentType
  );

  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container size="sm">
        {stage === "select" && <SelectStage setStage={setStage} />}
        {stage === "prior" && <PriorStage setStage={setStage} />}
        {stage === "result" && (
          <ResultStage
            setOpenedModal={setOpenedModal}
            setModalContent={setModalContent}
          />
        )}
      </Container>
      {openedModal && (
        <ModalCard content={modalContent} setOpenedModal={setOpenedModal} />
      )}
    </AppShell>
  );
};

export default Home;
