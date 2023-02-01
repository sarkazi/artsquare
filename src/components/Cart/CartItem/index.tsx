import styles from "./cartItem.module.scss";
import Link from "next/link";
import Avatar from "@/components/Common/Avatar";
import { Box, Flex } from "@mantine/core";
import { useState } from "react";
import React from "react";
import { ProductCartType } from "../../../screens/CartPage";

import CheckboxCheckedSvg from "../../../assets/svg/checkbox-checked.svg";
import CheckboxUncheckedSvg from "../../../assets/svg/checkbox-unchecked.svg";

interface ICartItemProps {
  id: number;
  checked: boolean;
  setArr: (value: (prevState: any) => any) => void;
  arr: ProductCartType[];
}

const CartItem: React.FC<ICartItemProps> = ({ arr, setArr, id, checked }) => {
  const handleChange = () => {
    setArr((prevState) => {
      return prevState.map((item: ProductCartType) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      });
    });
  };

  return (
    <li className={styles.cardItem} onClick={() => console.log(id)}>
      <Box className={styles.cardContentBlock}>
        <Box
          style={{ backgroundImage: "url(/img/result/img1.png)" }}
          className={styles.cardImageBlock}
        ></Box>
        <Flex
          className={styles.cardCenterBlock}
          direction="column"
          align="flex-start"
        >
          <h2>Colorful 3d render of stylized tree stump</h2>
          <Link href="/profile/1">
            <Flex className={styles.cardAvatarBlock} align="center">
              <Avatar size="sm"></Avatar>
              <p>Maria Smith</p>
              <span>8.7</span>
            </Flex>
          </Link>
        </Flex>
        <Flex className={styles.cardRightBlock} align="center">
          <p>Image</p>
          <span>$15</span>
        </Flex>
      </Box>
      <Box className={styles.emptyBlock}></Box>
      <Box className={styles.checkboxBlock}>
        <input
          id="card-checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <label className={styles.checkbox} htmlFor="card-checkbox">
          {checked ? <CheckboxCheckedSvg /> : <CheckboxUncheckedSvg />}
        </label>
      </Box>
    </li>
  );
};

export default CartItem;
