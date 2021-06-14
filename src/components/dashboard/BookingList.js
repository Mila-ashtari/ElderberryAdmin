import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Dialog, Modal, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "20px",
  },
}));

function BookingList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <section className={classes.container}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        Create Booking
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} >
        <div>eret</div>
      </Dialog>
    </section>
  );
}

export default BookingList;
