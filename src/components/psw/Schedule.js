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
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";

const Schedule = ({ schedule, currentBookings }) => {
  console.log({ schedule, currentBookings });
  const schedule = [
    {
      startDate: "2021-05-04T09:45",
      endDate: "2021-05-04T11:00",
      title: "available",
    },
    {
      startDate: "2021-05-11T09:45",
      endDate: "2021-05-11T11:00",
      title: "booked",
      id:"675567576567",
      clientID:"786868867",
    },
  ];

  const [data, setData] = useState(schedulerData);
  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState defaultCurrentViewName="Month" />

        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={10} endDayHour={19} />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip showCloseButton showOpenButton />
        <AppointmentForm readOnly />
        <ViewSwitcher />
      </Scheduler>
    </Paper>
  );
};

export default Schedule;
