import styles from "./finishedProjectCard.module.scss";
import Avatar from "@/components/Common/Avatar";
import { Box, Button, Flex } from "@mantine/core";
import Link from "next/link";

import DownloadSvg from "../../../assets/svg/download.svg";

const FinishedProjectCard = () => {
  return (
    <li className={styles.finishedCardItem}>
      <Box
        style={{ backgroundImage: "url(/img/result/card/img1.png)" }}
        className={styles.finishedImageBlock}
      ></Box>
      <Flex
        className={styles.finishedCenterBlock}
        direction="column"
        align="flex-start"
      >
        <h2>Some colorful steampunk picture</h2>
        <p>
          Let&apos;s model and animate a cute stylized snow globe in Blender
          using lattice modifier and particle systems
        </p>
        <Link href="/profile/1">
          <Flex className={styles.finishedAvatarBlock} align="center">
            <Avatar size="sm"></Avatar>
            <p>Maria Smith</p>
            <span>8.7</span>
          </Flex>
        </Link>
      </Flex>
      <Flex className={styles.finishedRightBlock} direction="column">
        <Flex className={styles.cardInfoBlock} justify="space-between">
          <span>$15</span>
          <Box className={styles.timeAgoBlock}>1 month ago</Box>
        </Flex>
        <Box className={styles.emptyBlock}></Box>
        <Button>
          <DownloadSvg />
          <span>Download</span>
        </Button>
      </Flex>
    </li>
  );
};

export default FinishedProjectCard;
