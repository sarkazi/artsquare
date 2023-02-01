import Card from "@/components/Main/Card";
import ParamBlock from "@/components/Main/ParamBlock";
import { Box, List } from "@mantine/core";
import styles from "./resultStage.module.scss";

const cards = [
  {
    imgLink: "/img/result/card/img1.png",
  },
  {
    imgLink: "/img/result/card/img2.png",
  },
  {
    imgLink: "/img/result/card/img3.png",
  },
  {
    imgLink: "/img/result/card/img4.jpg",
  },
  {
    imgLink: "/img/result/card/img5.png",
  },
];

interface IResultStageProps {
  setOpenedModal: (value: boolean) => void;
  setModalContent: (card: { imgLink: string }) => void;
}

const ResultStage: React.FC<IResultStageProps> = ({
  setModalContent,
  setOpenedModal,
}) => {
  return (
    <>
      <Box className={styles.mask}>
        <ParamBlock style={{ marginBottom: "95px" }} />
        <List className={styles.cardsList}>
          {cards.map((card) => (
            <Card
              key={card.imgLink}
              {...card}
              onClick={() => {
                setOpenedModal(true);
                setModalContent(card);
              }}
            />
          ))}
        </List>
      </Box>
    </>
  );
};

export default ResultStage;
