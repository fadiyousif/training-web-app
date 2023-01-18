import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"

export const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <CircularProgress />
  </Box>
)
