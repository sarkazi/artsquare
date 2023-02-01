import { Box } from "@mantine/core";
import styles from "./avatar.module.scss";
import clsx from "clsx";

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
      <img src="/img/profile/avatar.jpg" alt="avatar" />
    </Box>
  );
};

export default Avatar;
