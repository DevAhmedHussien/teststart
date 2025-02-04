// ** Third party mui
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid
} from "@mui/material";

// ** Third party mui data / time 
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// ** Third party date-fns
import { format, parse } from "date-fns";

const EditDialog = ({ 
  openEditDialog, 
  setOpenEditDialog, 
  editedData, 
  setEditedData, 
  handleUpdate 
}) => {

  // Handle date change
  const handleDateChange = (date) => {
    if (date) {
      setEditedData({ ...editedData, date: format(date, "dd.MM.yyyy") });
    }
  };

  // Handle time change
  const handleTimeChange = (time) => {
    if (time) {
      setEditedData({ ...editedData, time: format(time, "HH:mm") });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog 
        open={openEditDialog} 
        onClose={() => setOpenEditDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ bgcolor: "primary.main", color: "white"  }}>
          Edit Seminar Details
        </DialogTitle>
        <DialogContent>
          <Grid container sx={{ mt: 1}} spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Title"
                fullWidth
                variant="outlined"
                value={editedData.title || ""}
                onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Date"
                value={editedData.date ? parse(editedData.date, "dd.MM.yyyy", new Date()) : null}
                onChange={handleDateChange}
                format="dd.MM.yyyy"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TimePicker
                label="Time"
                value={editedData.time ? parse(editedData.time, "HH:mm", new Date()) : null}
                onChange={handleTimeChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                value={editedData.description || ""}
                onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Photo URL"
                fullWidth
                variant="outlined"
                value={editedData.photo || ""}
                onChange={(e) => setEditedData({ ...editedData, photo: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpenEditDialog(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="success" sx={{ ml: 2 }}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default EditDialog;
