import { Box, Button, clsx } from "@mantine/core";
import { CSSProperties } from "react";
import styles from "./fileUpload.module.scss";
import UploadSvg from "../../../assets/svg/upload.svg";

interface IFileUploadProps {
  style: CSSProperties | undefined;
  size: "xl" | "sm";
  title: "Example" | "File";
}

const FileUpload: React.FC<IFileUploadProps> = ({ style, size, title }) => {
  return (
    <Box
      style={style}
      className={clsx(
        styles.uploadBlock,
        size === "xl" && styles.xl,
        size === "sm" && styles.sm
      )}
    >
      <h3>{title}</h3>
      <input id="file-input" type="file" />
      <label
        className={clsx(styles.mainLabel, size === "xl" && styles.xl)}
        htmlFor="file-input"
      >
        <p>Drag a file here</p>
        <p>or</p>
        <Button>
          <label htmlFor="file-input" className={styles.labelBtn}>
            <UploadSvg />
            <span>Upload a file</span>
          </label>
        </Button>
      </label>
    </Box>
  );
};

export default FileUpload;
