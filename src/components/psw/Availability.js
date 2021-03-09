import React, { useState } from "react";
import { Calendar, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Availability = () => {
    const [date, setDate]=useState(new Date())
    
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Calendar date={date} onChange={(date)=> setDate(date)} allowKeyboardControl/>
    </MuiPickersUtilsProvider>
  );
};

export default Availability;
