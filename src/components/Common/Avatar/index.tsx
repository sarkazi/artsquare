import { Box } from "@mantine/core";
import styles from "./avatar.module.scss";
import clsx from "clsx";
import Image from "next/image";

interface IAvatarProps {
  size: "medium" | "xl" | "sm";
}

const Avatar: React.FC<IAvatarProps> = ({ size }) => {
  return (
    <Box
      className={clsx(
        styles.avatarBlock,
        size === "medium" && styles.medium,
        size === "xl" && styles.xl,
        size === "sm" && styles.sm
      )}
    >
      <Image
        src="/img/profile/avatar.jpg"
        alt="avatar"
        width={20}
        height={20}
      />
    </Box>
  );
};

export default Avatar;
