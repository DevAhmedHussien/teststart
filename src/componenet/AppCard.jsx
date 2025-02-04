// ** Third Party Mui 
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';

// ** Third Party Icon Mui 
import { Delete, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// ** Redux
import { searchItem } from '../redux/seminarSlice';
import { useDispatch } from 'react-redux';

const AppCard = ({seminar, setSelectedSeminar, setOpenEditDialog, setEditedData, setOpenDeleteDialog}) => {
  
  // ** Redux
  const dispatch = useDispatch()

  return (
        <Card  sx={{height:'auto', minHeight:400, position:"relative"}} >
            <Link to={`/seminar/${seminar.id}`} style={{ textDecoration: "none" }} aria-label={`go to seminar ${seminar.id}`}>
              <CardMedia 
                onClick={()=> dispatch(searchItem(''))}
                component="img"
                height="200"
                image={seminar.photo}
                alt={seminar.title}
              />
             </Link>
            <CardContent >
              <div>
                <Typography variant="h6">{seminar.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {seminar.date} {seminar.time}
                </Typography>
              </div>
            
              <Typography variant="body2">{seminar.description}</Typography>

              <Box position="absolute" bottom={5} right={5} >
              <Tooltip title="Edit Card" placement="top">
                  <IconButton
                    onClick={() => {
                      setSelectedSeminar(seminar);
                      setOpenEditDialog(true);
                      setEditedData(seminar);
                    }}
                  >
                    <Edit />
                  </IconButton>
              </Tooltip>
              <Tooltip title="Delete Card" placement="top">
                <IconButton
                  onClick={() => {
                    setSelectedSeminar(seminar);
                    setOpenDeleteDialog(true);
                  }}
                >
                  <Delete sx={{color : 'red'}}/>
                </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
        </Card>
  )
}

export default AppCard