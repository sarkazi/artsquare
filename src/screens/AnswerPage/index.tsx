import FileUpload from "@/components/Common/FileUpload";
import Header from "@/components/Common/Header";
import ProductCard from "@/components/Artist/ProductCard";
import Title from "@/components/Common/Title";
import { AppShell, Box, Button, Container, TextInput } from "@mantine/core";
import styles from "./answerPage.module.scss";
import ShareSvg from "../../assets/svg/share.svg";

const AnswerPage: React.FC = () => {
  const cardVariant = {
    imgLinks: [
      "/img/main2/card/img1.png",
      "/img/main2/card/img2.png",
      "/img/main2/card/img3.png",
    ],
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit cumque soluta voluptatum voluptas aperiam asperiores totam inventore minus iste commodi deleniti repellat quos facilis, nobis eaque accusantium aliquid possimus, id voluptatem et autem assumenda, alias obcaecati! Consequatur, maiores alias.",
    id: 1,
  };
  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container size="sm">
        <Box className={styles.mask}>
          <ProductCard {...cardVariant} style={{ marginBottom: "36px" }} />
          <Title text="Answer" style={{ marginBottom: "36px" }} />
          <form className={styles.form}>
            <TextInput className={styles.descInput} placeholder="description" />
            <FileUpload
              style={{ marginBottom: "36px" }}
              size="xl"
              title="File"
            />
            <Button className={styles.answerBtn} type="submit">
              <ShareSvg />
              <span>Answer</span>
            </Button>
          </form>
        </Box>
      </Container>
    </AppShell>
  );
};

export default AnswerPage;
