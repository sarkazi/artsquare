import { Button, Flex } from "@mantine/core";
import clsx from "clsx";
import { CSSProperties, useState } from "react";
import styles from "./tabsCategory.module.scss";

type tabsVariantsType = {
  text: string;
  count?: number;
};

interface ITabsCategoryProps {
  style?: CSSProperties | undefined;
  tabsVariants: tabsVariantsType[];
}

const TabsCategory: React.FC<ITabsCategoryProps> = ({
  tabsVariants,
  style,
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <Flex className={styles.tabs} style={style}>
      {tabsVariants.map((btn) => (
        <Button
          onClick={() => setActiveTab(btn.text)}
          key={btn.text}
          variant="subtle"
          className={clsx(styles.tab, activeTab === btn.text && styles.active)}
        >
          <span>{btn.text}</span>
          {btn.count && <span>{btn.count}</span>}
        </Button>
      ))}
    </Flex>
  );
};

export default TabsCategory;
