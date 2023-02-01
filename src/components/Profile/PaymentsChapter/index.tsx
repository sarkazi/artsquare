import { Box, Button, Flex, Group, TextInput } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";
import styles from "./paymentsChapter.module.scss";

import SaveSvg from "../../../assets/svg/save.svg";

const paymentMethodVariants = ["PayPal", "Payoneer"];

const PaymentsChapter = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>(
    paymentMethodVariants[0]
  );

  return (
    <Box className={styles.paymentsBlock}>
      <Group className={styles.paymentsInfoList}>
        <Flex align="center" className={styles.paymentsInfoItem}>
          <p className={styles.paymentsBlockTitle}>Total Earned</p>
          <Box className={styles.paymentsInfoItemBlock}>
            <span>$85</span>
          </Box>
        </Flex>
        <Flex align="center" className={styles.paymentsInfoItem}>
          <p className={styles.paymentsBlockTitle}>Items Sold</p>
          <Box className={styles.paymentsInfoItemBlock}>
            <span>7</span>
          </Box>
        </Flex>
      </Group>
      <form className={styles.form}>
        <Flex
          className={styles.formButtonsBlock}
          direction="column"
          align="flex-start"
        >
          <p className={styles.paymentsBlockTitle}>
            Would you like to get paid through Paypal or Payoneer?
          </p>
          <Flex className={styles.formButtonsList} align="center">
            {paymentMethodVariants.map((method) => (
              <Button
                className={clsx(method === paymentMethod && styles.active)}
                onClick={() => setPaymentMethod(method)}
                key={method}
              >
                {method}
              </Button>
            ))}
          </Flex>
        </Flex>
        <Flex
          className={styles.formInputBlock}
          direction="column"
          align="flex-start"
        >
          <p className={styles.paymentsBlockTitle}>Your PayPal Email Address</p>
          <TextInput
            placeholder="Maria-S@gmail.com"
            className={styles.formInput}
          />
        </Flex>
        <Button className={styles.saveBtn} type="submit">
          <SaveSvg />
          <span>Save</span>
        </Button>
      </form>
    </Box>
  );
};

export default PaymentsChapter;
