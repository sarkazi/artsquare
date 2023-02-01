import {
  AppShell,
  Container,
  Box,
  TextInput,
  Checkbox,
  Button,
  Group,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";

import Header from "@/components/Common/Header";
import Title from "@/components/Common/Title";

import styles from "./loginPage.module.scss";

const useStyles = createStyles((_params) => ({
  formMask: {
    maxWidth: "256px",
    width: "100%",
  },
  sendBtn: {
    background: "linear-gradient(90deg, #1b74b4, #148dbc, #1195b1)",
  },
  mainBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    padding: "20px 0",
  },
}));

const LoginPage: React.FC = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <AppShell className={styles.main} header={<Header />}>
      <Container size="xs">
        <Box className={classes.mainBlock}>
          <Title style={{ marginBottom: "55px" }} />
          <Box className={classes.formMask} mx="auto">
            <form
              className={styles.form}
              onSubmit={form.onSubmit((values) => console.log(values))}
            >
              <TextInput
                className={styles.textInput}
                label="Phone number"
                placeholder="+"
                {...form.getInputProps("phone")}
              />
              <TextInput
                className={styles.textInput}
                label="Name"
                placeholder="name input"
                {...form.getInputProps("name")}
              />
              <TextInput
                className={styles.textInput}
                label="E-mail"
                placeholder="e-mail input"
                {...form.getInputProps("email")}
              />

              <Group className={styles.sendBtnBlock} position="right" mt="md">
                <Button data-disabled className={classes.sendBtn} type="submit">
                  Submit
                </Button>
              </Group>
            </form>
          </Box>
        </Box>
      </Container>
    </AppShell>
  );
};

export default LoginPage;
