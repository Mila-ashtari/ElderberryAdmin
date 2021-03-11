import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    timeSlot:{
        backgroundColor:"#e0e0e0",
        marginBottom:"5px",
        padding:"5px"
    }
}));
const Availability = ({ schedule }) => {
  const classes = useStyles();
  const {
    sunday,
    monday,
    saturday,
    tuesday,
    wednesday,
    thrusday,
    friday,
  } = schedule.availability;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="bookings table">
        <TableHead>
          <TableRow>
            <TableCell>Sunday</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            <TableCell>Saturday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              {sunday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
            <TableCell>
              {monday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
            <TableCell>
              {tuesday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
            <TableCell>
              {wednesday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
            <TableCell>
              {thrusday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
            <TableCell>
              {friday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
            <TableCell>
              {saturday.map((item) => {
                return (
                  <Typography
                    className={classes.timeSlot}
                  >{`${item.startTime[0]}:${item.startTime[1]}-${item.endTime[0]}:${item.endTime[1]} `}</Typography>
                );
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Availability;
