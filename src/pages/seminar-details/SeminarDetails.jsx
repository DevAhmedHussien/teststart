//  ** React 
import { useEffect, useState } from "react";

// ** Router
import { useParams, Link, useNavigate} from "react-router-dom";

// ** Redux 
import { useDispatch, useSelector } from "react-redux";
import { fetchOneFromSeminars, deleteSeminar, updateSeminar } from "../../redux/seminarSlice";

// ** third Pary MUI
import { 
  Box, Typography, CircularProgress, Button, Paper, 
} from "@mui/material";

//** Reusable componenet 
import DeleteDialog from "../../componenet/DeleteDialog";
import EditDialog from "../../componenet/EditDialog";

// ** context 
import { useSnackbar } from "../../context/SnackbarContext";

const SeminarDetails = () => {
    // ** States
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [editedData, setEditedData] = useState({});
    
    // ** context just to inform that what is this 
    const { showSnackbar } = useSnackbar(); 

    // ** Navigaion & params
    const { id } = useParams();
    const navigate = useNavigate();

    // ** Redux
    const { item, itemStatus, itemError  } = useSelector((state) => state.seminars);
    const dispatch = useDispatch();
    
   
  
    // ** handling fetch one item 
    useEffect(() => { fetchItem() }, [dispatch]);
    const fetchItem = async() =>{
        await dispatch(fetchOneFromSeminars(id));
    }

    // ** Handle Delete Confirmation
    const handleDeleteConfirm = async () => {
       let res =  await dispatch(deleteSeminar(id)).then(() => {
        navigate("/"); 
        if (res.meta && res.meta.requestStatus === "fulfilled") {
            showSnackbar("Seminar deleted successfully!", "success");
          } else {
            showSnackbar("Failed to delete seminar. Please try again!", "error");
          }
        });
    };

    // ** Edit Card
    const handleUpdate = async () => {
        if (!editedData.title || !editedData.date || !editedData.time) {
            showSnackbar("Title, Date, and Time are required!", "error");
            return;
          } 
        const res = await dispatch(updateSeminar(editedData));
        setOpenEditDialog(false);
        if (res.meta && res.meta.requestStatus === "fulfilled") {
            showSnackbar("Seminar updated successfully!", "success");
            fetchItem() 
          } else {
            showSnackbar("Failed to update seminar. Please try again!", "error");
          }
    };

    // ** Loading, Error & Not Found States
    if (itemStatus === "loading") {
        return (
        <Box display="flex" justifyContent="center" m={20}>
            < CircularProgress />
        </Box>
        );
    }
    if (itemError) {
        return (
        <Typography color="error" textAlign="center" m={20}>
            {itemError}
        </Typography>
        );
    }
    if (!item) {
        return (
        <Typography variant="h6" textAlign="center" m={20}>
            Seminar Not Found
        </Typography>
        );
    }
    return (
        <Box sx={{ mt:10 , height:"81vh"}}>
            <Paper sx={{ p: 3 }}>

                {/* Seminar Image */}
                <img 
                src={item.photo} 
                alt={item.title} 
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px" }} 
                />

                <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>{item.title}</Typography>
                <Typography variant="h6" color="textSecondary">
                {item.date} at {item.time}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>{item.description}</Typography>

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "start", gap: 2, mt: 3 }}>

                <Button onClick={()=>{ 
                    setEditedData(item)
                    setOpenEditDialog(true)}}
                    > Edit  </Button>
                <Button color="error" onClick={() => setOpenDeleteDialog(true)} >  Delete</Button>
                <Button variant="outlined" component={Link}  to="/"> Å Back to List</Button>
                </Box>
            </Paper>

            {/* Delete Dialog */}
            <DeleteDialog
                    openDeleteDialog = {openDeleteDialog}
                    setOpenDeleteDialog = {setOpenDeleteDialog}
                    selectedSeminar = {item}
                    handleDelete = {handleDeleteConfirm}
                />

            {/* Edit Dialog */}
            <EditDialog
                openEditDialog = {openEditDialog} 
                setOpenEditDialog = {setOpenEditDialog}
                editedData = {editedData}
                setEditedData = {setEditedData}
                handleUpdate = {handleUpdate} 
            />
        </Box>
    );
    };

    export default SeminarDetails;
