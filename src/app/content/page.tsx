import { headers } from "next/headers";

import { Container, Stack, Typography } from "@mui/material";
import List from "./List";

import Data from "./content.json";
import { PAGE_MIN_HEIGHT } from "@/constants";

const ContentPage = async () => {
  const { origin } = new URL(headers().get("x-url")!);
  const markdownData = await fetch(
    `${origin}/data/contents/markdownData.json`,
  ).then((res) => res.json());
  const data = [...markdownData, ...Data];

  return (
    <Container sx={{ py: ["6rem", "8.4rem"], minHeight: PAGE_MIN_HEIGHT }}>
      <Stack direction={["column", "row"]} gap={["20px", "100px"]}>
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
            width: "min-content",
          }}
        >
          Content
        </Typography>
        <List data={data} />
      </Stack>
    </Container>
  );
};

export default ContentPage;
