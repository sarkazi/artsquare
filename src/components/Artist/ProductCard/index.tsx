import { Box, Flex } from "@mantine/core";
import Link from "next/link";
import Avatar from "../../Common/Avatar";
import styles from "./productCard.module.scss";
import clsx from "clsx";
import { CSSProperties } from "react";
import ShareSvg from "../../../assets/svg/share.svg";

interface IProductCard {
  onClick?: () => void;
  imgLinks: string[];
  text: string;
  style?: CSSProperties | undefined;
}

const ProductCard: React.FC<IProductCard> = ({
  onClick,
  imgLinks,
  text,
  style,
}) => {
  return (
    <li className={styles.cardItem} style={style}>
      <Box className={styles.cardImageBlock} onClick={onClick}>
        <Box
          className={styles.cardImageItem}
          style={{ backgroundImage: `url(${imgLinks[0]})` }}
        ></Box>
        <Box
          className={styles.cardImageItem}
          style={{ backgroundImage: `url(${imgLinks[1]})` }}
        ></Box>
        <Box
          className={styles.cardImageItem}
          style={{ backgroundImage: `url(${imgLinks[2]})` }}
        ></Box>
        <Box className={styles.cardImageItem}></Box>
      </Box>
      <Flex
        className={styles.cardRightBlock}
        direction="column"
        align="flex-start"
      >
        <Flex
          className={styles.cardHeader}
          justify="space-between"
          align="center"
        >
          <Link href="/profile/1">
            <Flex className={styles.avatarBlock} align="center">
              <Avatar size="sm" />
              <p>Megan Li</p>
            </Flex>
          </Link>
          <Box className={clsx([styles.cardTimeAgo])}>
            <span>1 hour ago</span>
          </Box>
        </Flex>

        <p className={styles.cardText} onClick={onClick}>
          {text}
        </p>

        <ul className={styles.paramList}>
          <li>
            <button>
              <ShareSvg />
            </button>
            <span>0</span>
          </li>
          <li>
            <span>$15</span>
          </li>
        </ul>
      </Flex>
    </li>
  );
};

export default ProductCard;
