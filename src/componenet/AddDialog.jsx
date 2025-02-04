//  ** React 
import { useState, useEffect } from "react";

// ** Redux 
import { useDispatch, useSelector } from "react-redux";
import { addSeminar, fetchSeminars } from "../redux/seminarSlice";

// ** third Pary MUI
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Grid } from "@mui/material";

// ** date-fns and date 
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";

// ** context 
import { useSnackbar } from "../context/SnackBarContext";

const AddDialog = ({ open, setOpen }) => {

  const dispatch = useDispatch();
  const { items } = useSelector(state => state.seminars);
  const { showSnackbar } = useSnackbar();

  // ** Generate ID (Last ID + 1)
  const getNextId = () => (items.length === 0 ? 1 : Math.max(...items.map(seminar => seminar.id)) + 1);

  // ** State for New Seminar
  const [newSeminar, setNewSeminar] = useState({
    id: String(getNextId()),
    title: "",
    description: "",
    date: null,
    time: null,
    photo: "",
  });

    // ** Update ID dynamically when items change
    useEffect(() => {
        setNewSeminar(prev => ({ ...prev, id: getNextId() }));
    }, [items]);

    // ** Handle Add Seminar
    const handleAdd = async () => {
        if (!newSeminar.title || !newSeminar.date || !newSeminar.time) {
        showSnackbar("Title, Date, and Time are required!", "error");
        return;
    } 

    const formattedDate = newSeminar.date ? format(newSeminar.date, "dd.MM.yyyy") : "";
    const formattedTime = newSeminar.time ? format(newSeminar.time, "HH:mm") : "";

    const seminarData = {
    ...newSeminar,
    id: String(getNextId()),
    date: formattedDate,
    time: formattedTime,
    };

    let res = await dispatch(addSeminar(seminarData));

    if (res.meta && res.meta.requestStatus === "fulfilled") {
        showSnackbar("Seminar added successfully!", "success");
        await dispatch(fetchSeminars());
        setNewSeminar({})
      } else {
        showSnackbar("Failed to added seminar. Please try again!", "error");
      }
    setOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Seminar</DialogTitle>
        <DialogContent  sx={{ mt: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                value={newSeminar.title}
                onChange={(e) => setNewSeminar({ ...newSeminar, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={3}
                value={newSeminar.description}
                onChange={(e) => setNewSeminar({ ...newSeminar, description: e.target.value })}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                label="Date"
                value={newSeminar.date}
                onChange={(date) => setNewSeminar({ ...newSeminar, date })}
                format="dd.MM.yyyy"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TimePicker
                label="Time"
                value={newSeminar.time}
                onChange={(time) => setNewSeminar({ ...newSeminar, time })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Photo URL"
                fullWidth
                value={newSeminar.photo}
                onChange={(e) => setNewSeminar({ ...newSeminar, photo: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default AddDialog;
