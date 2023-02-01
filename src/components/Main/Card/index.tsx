import {
  AppShell,
  Container,
  Grid,
  Box,
  Title,
  Flex,
  Group,
  List,
  Modal,
  Button,
} from "@mantine/core";
import styles from "./card.module.scss";
import Link from "next/link";
import Avatar from "../../Common/Avatar";
import Image from "next/image";

import LikeSvg from "../../../assets/svg/like-outline.svg";
import CartSvg from "../../../assets/svg/picture.svg";

interface ICardProps {
  imgLink: string;
  onClick: () => void;
}

const Card: React.FC<ICardProps> = ({ imgLink, onClick }) => {
  return (
    <>
      <List.Item className={styles.card}>
        <button onClick={onClick}>
          <Box className={styles.cardImgBlock}>
            <Image src={imgLink} alt="card-image" width={500} height={500} />
          </Box>
          <Box className={styles.cardContentBlock}>
            <h2 className={styles.cardTitle}>Deleniti atque corrupti</h2>
            <p className={styles.cardSubtitle}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum
            </p>
          </Box>
        </button>
        <Flex
          className={styles.cardDownBlock}
          justify="space-between"
          align="center"
        >
          <Flex className={styles.cardOwnerBlock} align="center">
            <Link href="/profile">
              <Avatar size="sm"></Avatar>
              <p>Maria Smith</p>
            </Link>
            <span>8.7</span>
          </Flex>
          <Flex className={styles.cardIconBlock} align="center">
            <button>
              <LikeSvg />
            </button>
            <button>
              <CartSvg />
            </button>
          </Flex>
        </Flex>
      </List.Item>
    </>
  );
};

export default Card;
