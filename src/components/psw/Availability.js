import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

const Availability = () => {
  const schedulerData = [
    {
      startDate: "2021-03-09T09:45",
      endDate: "2021-03-09T11:00",
      title: "Meeting",
    },
    {
      startDate: "2021-03-11T09:45",
      endDate: "2021-03-11T11:00",
      title: "Going to Gym",
    },
  ];
  return (
    <Paper>
      <Scheduler data={schedulerData} height={660}>
        <ViewState defaultCurrentViewName="Week" />

        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={10} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm />
        <ViewSwitcher />
      </Scheduler>
    </Paper>
  );
};

export default Availability;