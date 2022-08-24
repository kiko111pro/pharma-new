import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  InputAdornment,
  Button,
  OutlinedInput,
  Box,
} from "@mui/material";
import TocIcon from "@mui/icons-material/Toc";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { colors } from "../../mui_theme/theme";
import { useDispatch } from "react-redux";
import { getSearchResult } from "../../features/search_product/search.reducer";

function Banner() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleClick = () => {
    navigate("/search");
    dispatch(getSearchResult(input));
  };

  return (
    <Box sx={{ mb: 3 }} className="landingpage_banner_container">
      <Container>
        <Stack sx={{ py: { md: 10, xs: 2 }, mx: { md: 25 }, mb: 3 }}>
          <Typography
            textAlign="center"
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
            }}
            variant="h2"
          >
            The Largest B2B Pharmaceutical Products Marketplace
          </Typography>
          <Stack direction="row" spacing={{ md: 6, xs: 2 }} sx={{ mt: 5 }}>
            <OutlinedInput
              sx={{ flexGrow: 7, bgcolor: "#eee" }}
              fullWIdth
              placeholder="Search 97000+ products"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              endAdornment={
                <InputAdornment position="start">
                  <TocIcon />
                </InputAdornment>
              }
            />
            <Button
              onClick={handleClick}
              sx={{
                flexGrow: 1,
                bgcolor: "#eee",
                ":hover": { color: "#fff", bgcolor: colors.primary },
              }}
              variant="outlined"
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Banner;
