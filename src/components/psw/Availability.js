import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

const Availability = () => {
  const currentDate = "2018-11-01";
  const schedulerData = [
    {
      startDate: "2018-11-01T09:45",
      endDate: "2018-11-01T11:00",
      title: "Meeting",
    },
    {
      startDate: "2018-11-01T12:00",
      endDate: "2018-11-01T13:30",
      title: "Go to a gym",
    },
  ];
  return (
    <Paper>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <WeekView startDayHour={9} endDayHour={24} />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Availability;
