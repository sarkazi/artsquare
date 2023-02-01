import React, { forwardRef } from "react";
import {
  Button,
  createStyles,
  Group,
  Header as MantineHeader,
  Box,
  List,
  Burger,
} from "@mantine/core";
import Link from "next/link";
import clsx from "clsx";
import styles from "./header.module.scss";
import { useRouter } from "next/router";
import PictureSvg from "../../../assets/svg/picture.svg";
import LikeSvg from "../../../assets/svg/like-filled.svg";
import CartSvg from "../../../assets/svg/cart.svg";
import ProfileSvg from "../../../assets/svg/profile.svg";

const useStyles = createStyles((_params) => ({
  createBtn: {
    background: "linear-gradient(90deg, #1b74b4, #148dbc, #1195b1)",
  },
  loginBtn: {
    backgroundColor: "#25262b",
    color: "#6D6E72",
    "&:hover": {
      backgroundColor: "#25262b",
    },
  },
  artistBtn: {
    color: "#6D6E72",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  toggleStatusBlock: {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
    fontSize: "14px",
    lineHeight: "19px",
  },
}));

const Header = ({}) => {
  const { classes } = useStyles();

  const router = useRouter();

  return (
    <MantineHeader
      className={clsx(
        styles.header,
        router.pathname === "/login" ? styles.end : styles.between
      )}
      height={60}
    >
      {/*{router.pathname === "/" && (
        <Group className={styles.buttonsGroup} position="right" spacing="xs">
          <Button className={classes.artistBtn} variant="subtle">
            Artist Sign Up
          </Button>
          <Button
            className={classes.loginBtn}
            variant="filled"
            onClick={() => router.push("/login")}
          >
            Log In
          </Button>
          <Button className={classes.createBtn} variant="filled">
            Create Account
          </Button>
        </Group>
      )}*/}
      {router.pathname.includes("login") && (
        <Group
          className={clsx([
            classes.toggleStatusBlock,
            styles.toggleStatusBlock,
          ])}
        >
          <span>Already a member?</span>
          <Link href="/">Sign In</Link>
        </Group>
      )}
      {router.pathname !== "/login" && (
        <>
          <Group className={styles.logoBlock}>
            <Link href="/">
              <Box className={styles.decor}></Box>
              <span className={styles.logoTitle}>Artsquare</span>
            </Link>
          </Group>
          <nav className={styles.nav}>
            <List className={styles.iconList}>
              <List.Item className={styles.listItem}>
                <Link href="/projects">
                  <PictureSvg />
                  <span>3</span>
                </Link>
              </List.Item>
              <List.Item className={styles.listItem}>
                <Link href="/">
                  <LikeSvg />
                  <span>6</span>
                </Link>
              </List.Item>
              <List.Item className={styles.listItem}>
                <Link href="/cart">
                  <CartSvg />
                  <span>2</span>
                </Link>
              </List.Item>
              <List.Item className={styles.listItem}>
                <Link href="/profile/1">
                  <ProfileSvg />
                </Link>
              </List.Item>
            </List>
          </nav>
        </>
      )}
    </MantineHeader>
  );
};

export default Header;
