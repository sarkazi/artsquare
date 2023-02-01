import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, createEmotionCache } from "@mantine/core";

const appendCache = createEmotionCache({ key: "mantine", prepend: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      emotionCache={appendCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        //  components: {
        //    Button: {
        //      styles: {
        //        root: {
        //          "&:disabled": {
        //            backgroundColor: "#25262B",
        //            color: "#6D6E72",
        //          },
        //        },
        //      },
        //    },
        //  },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
