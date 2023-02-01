import Avatar from "@/components/Common/Avatar";
import { Box, Button, Group, TextInput } from "@mantine/core";
import styles from "./editChapter.module.scss";

import UploadSvg from "../../../assets/svg/upload.svg";
import SaveSvg from "../../../assets/svg/save.svg";

const EditChapter = () => {
  return (
    <Box className={styles.boxForm}>
      <form className={styles.form}>
        <Group className={styles.formUpBlock}>
          <Avatar size="xl" />
          <Button>
            <UploadSvg />
            <span>Upload New Avatar</span>
          </Button>
          <Button>Delete</Button>
        </Group>
        <Box className={styles.inputsBlock}>
          <TextInput label="Name" placeholder="Megan Li" />
          <TextInput label="E-mail" placeholder="Megan-M@gmail.com" />
        </Box>

        <Button>
          <SaveSvg />
          <span>Save</span>
        </Button>
      </form>
    </Box>
  );
};

export default EditChapter;
