import {useState} from 'react';
import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Grid
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeDeleteDialog, openDeleteDialog} from "../store/UserSlice";
import {deleteNote, getUserNotes} from "../store/NoteSlice";

export default function DeleteDialog(item) {
  const dispatch = useDispatch();
  const {deleteDialogOpen} = useSelector((state) => state.deleteDialogOpen);
  const {username} = useSelector((state) => state.username);
  const {userId} = useSelector((state) => state.userId);


  const handleClose = async() => {
      await dispatch(closeDeleteDialog())
  };
  const handleAgree = async() => {
      await dispatch(closeDeleteDialog())
      await dispatch(deleteNote({user:username, title:item.title}))
            .then(async()=>{
                await dispatch(getUserNotes(userId))
            })
  };

  return (
    <div>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Удаление</DialogTitle>
              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      Вы уверены, что хотите удалить заметку "{item.title}"?
                  </DialogContentText>
              </DialogContent>
              <DialogActions>
                  <Button
                      onClick={handleClose}
                      color="primary" autoFocus>
                      Отмена!
                  </Button>
                  <Button
                      onClick={handleAgree}
                      color="primary" autoFocus>
                      Абсолютно.
                  </Button>
              </DialogActions>


      </Dialog>
    </div>
  );
}
