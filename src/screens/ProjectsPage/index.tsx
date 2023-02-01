import { AppShell, Box, Button, Container, Flex } from "@mantine/core";
import styles from "./projectsPage.module.scss";
import Header from "@/components/Common/Header";
import { useState, useRef } from "react";
import clsx from "clsx";
import ActiveProjectCard from "@/components/Projects/ActiveProjectCard";
import FinishedProjectCard from "@/components/Projects/FinishedProjectCard";

const tabsVariants = [
  { text: "Active projects", count: 3 },
  { text: "Finished projects", count: 10 },
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState(tabsVariants[0].text);

  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container size="sm">
        <Box className={styles.mask}>
          <Flex align="center" className={styles.tabsBlock}>
            {tabsVariants.map((el) => (
              <Button
                onClick={() => setActiveTab(el.text)}
                className={clsx(
                  el.text === activeTab ? styles.active : styles.passive
                )}
                variant={el.text === activeTab ? "filled" : "subtle"}
                key={el.text}
              >
                <span>{el.text}</span>
                <span>{el.count}</span>
              </Button>
            ))}
          </Flex>
          {activeTab === tabsVariants[0].text ? (
            <ul className={styles.cardList}>
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
              <ActiveProjectCard />
            </ul>
          ) : (
            <ul className={styles.finishedCardList}>
              <FinishedProjectCard />
              <FinishedProjectCard />
              <FinishedProjectCard />
            </ul>
          )}
        </Box>
      </Container>
    </AppShell>
  );
};

export default ProjectsPage;
