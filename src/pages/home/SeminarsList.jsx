//  ** React 
import { useEffect, useState, useCallback, useMemo } from "react";

// ** Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSeminars, deleteSeminar, updateSeminar } from "../../redux/seminarSlice";

// ** third Pary MUI
import {Grid, CircularProgress, Alert, Box, Typography, Fab} from "@mui/material";

//** Reusable componenet 
import DeleteDialog from "../../componenet/DeleteDialog";
import EditDialog from "../../componenet/EditDialog";
import AppCard from "../../componenet/AppCard";
import AddDialog from "../../componenet/AddDialog";

// ** logix
import { formatDate, formatTime, safeString } from "../../lib/utils";

// ** context 
import { useSnackbar } from "../../context/SnackBarContext";

// ** Icon
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

const SeminarsList = () => {
  // ** State Hooks
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedSeminar, setSelectedSeminar] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [openAddDialog, setOpenAddDialog] = useState(false);

  // ** context just to inform that what is this 
  const { showSnackbar } = useSnackbar(); 
  
  // ** Redux Hooks
  const dispatch = useDispatch();
  const { items, status, error, searchQuery } = useSelector(state => state.seminars);

  // ** Fetch Data on Mount
  useEffect(() => {
    dispatch(fetchSeminars());
  }, [dispatch]);

  // ** Delete Seminar
  const handleDelete = useCallback(async (id) => {
    let res = await dispatch(deleteSeminar(id));
    setOpenDeleteDialog(false);
    if (res.meta && res.meta.requestStatus === "fulfilled") {
      showSnackbar("Seminar deleted successfully!", "success");
    } else {
      showSnackbar("Failed to delete seminar. Please try again!", "error");
    }
  }, [dispatch]);

  // ** Update Seminar
  const handleUpdate = useCallback(async () => {
    if (!editedData.title || !editedData.date || !editedData.time) {
      showSnackbar("Title, Date, and Time are required!", "error");
      return;
    } 
    let res = await dispatch(updateSeminar(editedData));
    setOpenEditDialog(false);
    if (res.meta && res.meta.requestStatus === "fulfilled") {
      showSnackbar("Seminar updated successfully!", "success");
    } else {
      showSnackbar("Failed to update seminar. Please try again!", "error");
    }
  }, [dispatch, editedData]);


  // ** Highlight Search Text
  const highlightText = useCallback((text, searchQuery) => {
    if (!searchQuery || typeof text !== "string") return text;
    try {
      const regex = new RegExp(`(${searchQuery})`, "gi");
      return text.split(regex).map((part, index) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: "yellow", fontWeight: "bold" }}>
            {part}
          </span>
        ) : (
          part
        )
      );
    } catch (error) {
      console.error("HighlightText Error:", error);
      return text;
    }
  }, []);

  // ** Search & Filter Function
  const filteredSeminars = useMemo(() => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(seminar =>
      safeString(seminar.title).includes(query) ||
      safeString(seminar.description).includes(query) ||
      safeString(seminar.date).includes(query) ||
      safeString(seminar.time).includes(query) ||
      formatDate(seminar.date).includes(query) ||
      formatTime(seminar.time).includes(query)
    );
  }, [items, searchQuery, formatDate, formatTime]);

  // ** Loading State
  if (status === "loading")
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );

  // ** Error State
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Grid container spacing={3} sx={{ p: 3, mt: "2rem" }}>
      {filteredSeminars.length > 0 ? (
        filteredSeminars.map((seminar) => (
          <Grid item xs={12} sm={6} md={4} key={seminar.id}>
            <AppCard
              seminar={{
                ...seminar,
                title: highlightText(safeString(seminar.title), searchQuery),
                description: highlightText(safeString(seminar.description), searchQuery),
                date: highlightText(safeString(seminar.date), searchQuery),
                time: highlightText(safeString(seminar.time), searchQuery),
              }}
              setSelectedSeminar={setSelectedSeminar}
              setOpenEditDialog={setOpenEditDialog}
              setEditedData={setEditedData}
              setOpenDeleteDialog={setOpenDeleteDialog}
            />
          </Grid>
        ))
      ) : (
        <Box sx={{ textAlign: "center", width: "100%", mt: 3 }}>
          <Typography variant="h5" color="textSecondary" sx={{ m: "10% auto" }}>
            No Records Found <br />
            Make sure search query:{" "}
            <span style={{ color: "red" }}> '{searchQuery}' </span> is correct
          </Typography>
        </Box>
      )}

      {/* Delete Dialog */}
      <DeleteDialog
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
        selectedSeminar={selectedSeminar}
        handleDelete={handleDelete}
      />

      {/* Edit Dialog */}
      <EditDialog
        openEditDialog={openEditDialog}
        setOpenEditDialog={setOpenEditDialog}
        editedData={editedData}
        setEditedData={setEditedData}
        handleUpdate={handleUpdate}
      />

      {/* Floating Add Button */}
      <Fab color="primary" aria-label="add" sx={{ position: "fixed", bottom: 20, right: 20 }} onClick={() => setOpenAddDialog(true)}>
        <AddCircleOutline />
      </Fab>

      <AddDialog open={openAddDialog} setOpen={setOpenAddDialog} />
    </Grid>
  );
};

export default SeminarsList;
