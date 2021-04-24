import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function OrderForm({ handleClose, handleOrderSubmit, open, formErrors }) {
    const [client, setClient] = useState({
        nume: '',
        email: '',
        telefon: '',
        observatii: ''
    })
    
    return (
        <form>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Trimitere comanda</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Va rugam sa ne oferiti datele dumneavaostra de contact iar noi va vom contacta curand !
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nume"
                        type="text"
                        fullWidth
                        onChange={(e) => setClient({ ...client, nume: e.target.value })}
                    />
                    { formErrors.hasOwnProperty('nume') ? <p>{formErrors.nume}</p> : null }
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        onChange={(e) => setClient({ ...client, email: e.target.value })}
                    />
                    { formErrors.hasOwnProperty('email') ? <p>{formErrors.email}</p> : null }
                    <TextField
                        margin="dense"
                        label="Telefon"
                        type="text"
                        fullWidth
                        onChange={(e) => setClient({ ...client, telefon: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Observatii"
                        type="text"
                        fullWidth
                        multiline
                        onChange={(e) => setClient({ ...client, observatii: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" onClick={() => handleOrderSubmit(client)} color="primary">
                        Trimite comanda
                 </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}