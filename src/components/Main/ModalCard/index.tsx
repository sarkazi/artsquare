import { Box, Button, Flex } from "@mantine/core";
import styles from "./modalCard.module.scss";
import { modalContentType } from "../../../pages";
import Avatar from "../../Common/Avatar";
import { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";

import LikeSvg from "../../../assets/svg/like-outline.svg";

interface modalLink {
  content: modalContentType;
  setOpenedModal: (value: boolean) => void;
}

const ModalCard: React.FC<modalLink> = ({ content, setOpenedModal }) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setOpenedModal(false));

  return (
    <Box className={styles.overlay}>
      <Box ref={modalRef} className={styles.modal}>
        <Flex
          className={styles.modalHeader}
          justify="space-between"
          align="center"
        >
          <Flex className={styles.avatarBlock} align="center">
            <Avatar size="medium"></Avatar>
            <span>Maria Smith</span>
          </Flex>
          <button className={styles.iconButton}>
            <LikeSvg />
          </button>
        </Flex>
        <Box
          style={{ backgroundImage: `url(${content.imgLink})` }}
          className={styles.imgBlock}
        >
          {/*<img src={content.imgLink} alt="image-card" />*/}
        </Box>
        <h3 className={styles.title}>Deleniti atque corrupti</h3>
        <p className={styles.subtitle}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum
        </p>
        <Button className={styles.addBtn}>Add to Cart</Button>
      </Box>
    </Box>
  );
};

export default ModalCard;
