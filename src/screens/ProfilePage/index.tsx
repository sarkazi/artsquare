import Header from "@/components/Common/Header";
import {
  AppShell,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  TextInput,
} from "@mantine/core";
import styles from "./profilePage.module.scss";
import Title from "@/components/Common/Title";
import Avatar from "@/components/Common/Avatar";
import { useState } from "react";
import clsx from "clsx";
import EditChapter from "@/components/Profile/EditChapter";
import PaymentsChapter from "@/components/Profile/PaymentsChapter";

const navVariants = [
  {
    text: "Edit Profile",
  },
  {
    text: "Password",
  },
  {
    text: "Notifications",
  },
  {
    text: "Payments",
  },
  {
    text: "Delete Account",
  },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(navVariants[0].text);

  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container>
        <Box className={styles.mask}>
          <Title
            style={{ marginBottom: "64px", alignSelf: "center" }}
            text="Profile"
          />
          <Box className={styles.block}>
            <Box className={styles.blockHeader}>
              <Group className={styles.nameBlock}>
                <Avatar size="medium" />
                <span>Maria Smith</span>
              </Group>
              <Button>Customer</Button>
            </Box>
            <Grid className={styles.mainBlock}>
              <nav className={styles.navBlock}>
                <ul className={styles.navList}>
                  {navVariants.map((el) => (
                    <li
                      key={el.text}
                      className={clsx(el.text === activeTab && styles.active)}
                    >
                      <button onClick={() => setActiveTab(el.text)}>
                        <span>{el.text}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              {activeTab === "Edit Profile" && <EditChapter />}
              {activeTab === "Payments" && <PaymentsChapter />}
            </Grid>
          </Box>
        </Box>
      </Container>
    </AppShell>
  );
};

export default ProfilePage;
