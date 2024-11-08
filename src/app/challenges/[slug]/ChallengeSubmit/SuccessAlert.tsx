"use client";
import SuccessSvg from "@/assets/svgs/challenge/success.svg";
import Button from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";

const SuccessAlert = () => {
  return (
    <Stack
      direction="column"
      sx={{ p: "60px", backgroundColor: "rgba(186, 240, 247, 0.30)" }}
      alignItems="center"
    >
      <SuccessSvg className="h-auto w-[40px] sm:w-[56px]"></SuccessSvg>
      <Typography sx={{ fontSize: "20px", mt: "20px", fontWeight: 500 }}>
        Test passed!
      </Typography>
      <Typography sx={{ fontSize: "16px", mt: "10px" }}>
        Submit your challenge via the button below.{" "}
      </Typography>
      <Button
        size="large"
        sx={{
          position: "absolute",
          bottom: "60px",
          width: "calc(100% - 120px) !important",
          left: "60px",
          mt: "20px",
        }}
        href="/challenges/submission"
        onClick={() =>
          sendGAEvent("event", "hackathonClicked", {
            value: { slug: hackathonId },
          })
        }
      >
        Submit Challenge
      </Button>
    </Stack>
  );
};

export default SuccessAlert;
