import { Box, Grid, Typography } from "@mui/material"
import { CommonProps } from "../App.props"
import { skillData } from "../utils/data"
import MotionStack from "./MotionStack"

const Skills = ({ secHeight, navID }: CommonProps) => {
  return (
    <section id={navID} style={{ minHeight: secHeight }}>
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xs={12} my={3}>
          <Typography variant="h3" textAlign={"center"}>
            My Skills
          </Typography>
        </Grid>
        {skillData?.map(({ name, imgURL }, i) => (
          <Grid item key={name} xs={6} sm={4} md={3} lg={2}>
            <MotionStack
              gap={1}
              sx={{ height: 1 }}
              initial={{ opacity: 0, y: 20 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.2 } }}
            >
              <Box
                sx={{
                  height: 80,
                  width: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component={"img"}
                  sx={{
                    maxInlineSize: "80%",
                    blockSize: "auto",
                    objectFit: "contain",
                  }}
                  src={imgURL}
                  alt={name}
                />
              </Box>
              <Typography variant="h6" textAlign={"center"}>
                {name}
              </Typography>
            </MotionStack>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Skills
