import React, { useState } from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  ButtonBase,
  Grid,
} from "@mui/material";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "../../mui_theme/theme";
import Sidebar from "./Sidebar";
import Result from "./Result";
import SwipeableEdgeDrawer from "./SwipeDrawer";
import Footer from "../../components/layout/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResult } from "../../features/search_product/search.reducer";

function Search() {
  const dispatch = useDispatch();
  const { loading, isError, error, searchResult } = useSelector(
    (state) => state.search
  );

  const handleSearch = (val) => {
    if (val === "") return;

    const params = {
      searchTerm: "paracetamol",
    };

    dispatch(getSearchResult(params));
  };

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleRemoveFilter = (item) => {
    const filtered = selectedFilters.filter((ele) => ele !== item);
    setSelectedFilters(filtered);
  };

  const removeAll = () => setSelectedFilters([]);

  console.log(searchResult);

  return (
    <>
      <Container>
        <Stack sx={{ my: 2 }}>
          <Typography>{"Medical Darpan > Search > Fabiflu Teblet"}</Typography>
          <Box sx={{ alignSelf: "center", width: "100%", maxWidth: 600 }}>
            <SearchInput handleSearch={handleSearch} />
          </Box>
          <Box sx={{ display: "flex", gap: 2, my: 2 }}>
            <Typography variant="h5">
              Paracetamol{" "}
              <span style={{ fontSize: "1.2rem" }}>(128 products)</span>
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {selectedFilters.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    bgcolor: colors.secondary,
                    color: colors.white,
                    display: "flex",
                    // height: 30,
                    alignItems: "center",
                    px: 1,
                    gap: 1,
                    borderRadius: 2,
                  }}
                >
                  <Typography>{item}</Typography>
                  <ButtonBase onClick={() => handleRemoveFilter(item)}>
                    <CloseIcon fontSize="small" sx={{ color: "#fff" }} />
                  </ButtonBase>
                </Box>
              ))}

              {selectedFilters.length > 0 && (
                <ButtonBase onClick={removeAll}>
                  <Typography
                    sx={{ my: "auto", color: colors.primary }}
                    variant="subtitle2"
                  >
                    Remove all
                  </Typography>
                </ButtonBase>
              )}
            </Box>
          </Box>
          <Grid container columnSpacing={{ xs: 0, md: 2 }}>
            <Grid item md={2}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {" "}
                <Sidebar
                  setSelectedFilters={setSelectedFilters}
                  selectedFilters={selectedFilters}
                />
              </Box>
              <SwipeableEdgeDrawer>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <Sidebar
                    setSelectedFilters={setSelectedFilters}
                    selectedFilters={selectedFilters}
                  />
                </Box>
              </SwipeableEdgeDrawer>
            </Grid>
            <Grid item xs={12} md={10} sx={{ mt: { xs: 8, md: 0 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  width: "100%",
                }}
              >
                {loading ? (
                  <Loading />
                ) : (
                  searchResult?.products?.map((item, key) => (
                    <Result key={key} product={item} />
                  ))
                )}
                {/* {} */}
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
