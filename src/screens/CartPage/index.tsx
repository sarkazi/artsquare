import CartItem from "@/components/Cart/CartItem";
import Header from "@/components/Common/Header";
import Title from "@/components/Common/Title";
import { AppShell, Box, Button, Container } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useState } from "react";
import styles from "./cartPage.module.scss";

export type ProductCartType = {
  id: number;
  checked: boolean;
};

const CartPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },
  });

  const [arr, setArr] = useState<ProductCartType[]>([
    { id: 1, checked: false },
    { id: 2, checked: true },
    { id: 3, checked: false },
  ]);

  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container size="sm">
        <Box className={styles.mask}>
          <Title
            style={{ textAlign: "center", marginBottom: "53px" }}
            text="Your shopping cart"
          />
          <form
            className={styles.form}
            onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <ul className={styles.cardList}>
              {arr?.map((el) => (
                <CartItem key={el.id} {...el} setArr={setArr} arr={arr} />
              ))}
            </ul>
            <Button type="submit">Ordering</Button>
          </form>
        </Box>
      </Container>
    </AppShell>
  );
};

export default CartPage;
