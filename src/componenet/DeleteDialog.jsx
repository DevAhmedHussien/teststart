
// ** Third Party Mui 
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"

const DeleteDialog = ({openDeleteDialog, setOpenDeleteDialog, selectedSeminar, handleDelete}) =>{
    return (
    <>
        <Dialog 
            open={openDeleteDialog} 
            onClose={() => setOpenDeleteDialog(false)} 
            maxWidth="sm"
            fullWidth >
            <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    Delete {selectedSeminar?.title}?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
                    <Button onClick={() => handleDelete(selectedSeminar?.id)} color="error">
                        Delete
                    </Button>
                </DialogActions>
        </Dialog>
    </>
    )
}
export default DeleteDialog