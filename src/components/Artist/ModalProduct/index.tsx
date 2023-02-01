import useOnClickOutside from "@/hooks/useOnClickOutside";
import { Box, Button, Flex } from "@mantine/core";
import { useRef } from "react";
import styles from "./modalProduct.module.scss";
import { cardContentType } from "../../../screens/ArtistPage";
import Avatar from "../../Common/Avatar";
import Link from "next/link";

import { useRouter } from "next/router";

import ShareSvg from "../../../assets/svg/share.svg";
import Like from "../../../assets/svg/like-outline.svg";

interface IModalProduct {
  setOpenedModal: (value: boolean) => void;
  content: cardContentType;
}

const ModalProduct: React.FC<IModalProduct> = ({ setOpenedModal, content }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useOnClickOutside(modalRef, () => setOpenedModal(false));

  return (
    <Box className={styles.overlay}>
      <Box ref={modalRef} className={styles.modal}>
        <Flex className={styles.header} justify="space-between" align="center">
          <Link href="/profile/1">
            <Flex className={styles.avatarBlock} align="center">
              <Avatar size="medium" />
              <p>Megan Li</p>
            </Flex>
          </Link>

          <Flex className={styles.headerInfoBlock} align="center">
            <Flex align="center" className={styles.shareBlock}>
              <button>
                <ShareSvg />
              </button>
              <span>54</span>
            </Flex>
            <p className={styles.category}>Image</p>
            <Box className={styles.timeAgoBlock}>
              <span>1 hour ago</span>
            </Box>
          </Flex>
        </Flex>
        <p className={styles.text}>{content.text}</p>
        <Box className={styles.imgMask}>
          <h2>Examples</h2>
          <Box className={styles.imgBlock}>
            <Box
              className={styles.imgItem}
              style={{ backgroundImage: `url(${content.imgLinks[0]})` }}
            ></Box>
            <Box
              className={styles.imgItem}
              style={{ backgroundImage: `url(${content.imgLinks[1]})` }}
            ></Box>
            <Box
              className={styles.imgItem}
              style={{ backgroundImage: `url(${content.imgLinks[2]})` }}
            ></Box>
          </Box>
        </Box>
        <Flex
          className={styles.downBlock}
          justify="space-between"
          align="center"
        >
          <Flex className={styles.downBtnBlock} align="center">
            <Button
              onClick={() => router.push("/answer")}
              className={styles.answerBtn}
            >
              <ShareSvg />
              <span>Answer</span>
            </Button>
            <button className={styles.likeBtn}>
              <Like />
            </button>
          </Flex>
          <span className={styles.price}>$15</span>
        </Flex>
      </Box>
    </Box>
  );
};

export default ModalProduct;
