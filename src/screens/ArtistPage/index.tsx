import Header from "@/components/Common/Header";
import ModalProduct from "@/components/Artist/ModalProduct";
import ProductCard from "@/components/Artist/ProductCard";
import TabsCategory from "@/components/Main/TabsCategory";
import { AppShell, Box, Container, Flex } from "@mantine/core";
import { useState } from "react";
import styles from "./mainPage.module.scss";

const tabsVariants = [
  {
    text: "Image",
    count: 35,
  },
  {
    text: "Video",
    count: 7,
  },
  {
    text: "Text",
    count: 12,
  },
  {
    text: "Code",
    count: 8,
  },
];

const cardsVariant = [
  {
    imgLinks: [
      "/img/main2/card/img1.png",
      "/img/main2/card/img2.png",
      "/img/main2/card/img3.png",
    ],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit cumque soluta voluptatum voluptas aperiam asperiores totam inventore minus iste commodi deleniti repellat quos facilis, nobis eaque accusantium aliquid possimus, id voluptatem et autem assumenda, alias obcaecati! Consequatur, maiores alias.",
    id: 1,
  },
];

export type cardContentType = {
  imgLinks: string[];
  text: string;
  id: number;
};

const ArtistPage = () => {
  const [openedModal, setOpenedModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<cardContentType>(
    {} as cardContentType
  );

  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container size="sm">
        <Box className={styles.mask}>
          <TabsCategory
            style={{ marginBottom: "36px" }}
            tabsVariants={tabsVariants}
          />
          <ul className={styles.cardList}>
            {cardsVariant.map((card) => (
              <ProductCard
                key={card.id}
                onClick={() => {
                  setOpenedModal(true);
                  setModalContent(card);
                }}
                {...card}
              />
            ))}
          </ul>
        </Box>
      </Container>
      {openedModal && (
        <ModalProduct setOpenedModal={setOpenedModal} content={modalContent} />
      )}
    </AppShell>
  );
};

export default ArtistPage;
