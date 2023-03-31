import { Box } from "@mui/system";
import Head from "next/head";
import { red100 } from "../../config/colors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Vita-OS-POS Web App by Bright & Abdulhameed"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Box sx={{ width: "100%", color: red100 }}>
          Welcome to Our POS Web App
        </Box>
      </main>
    </>
  );
}
