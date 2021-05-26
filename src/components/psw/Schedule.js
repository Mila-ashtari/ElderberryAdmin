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
import { makeStyles } from "@material-ui/core/styles";
import { result } from "lodash";

const useStyles = makeStyles((theme) => ({
  available: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Schedule = ({ schedule, currentBookings }) => {
  const classes = useStyles();
  const { saturday, sunday, monday, tuesday, wednesday, thursday, friday } =
    schedule.availability;
  console.log(currentBookings);
  const schedulerData = [];
  currentBookings.forEach((booking) => {
    const {client, provider}=booking
    schedulerData.push({
      startDate: `${booking.startTime}`,
      endDate: `${booking.endTime}`,
      title: `${provider.firstName}'s appointment with ${client.firstName}`,
    });
  });
  const TimeTableCell = (props) => {
    const { startDate } = props;
    const date = new Date(startDate);
    const dateString = date.toDateString();
    const time = date.getTime();
    let result = <WeekView.TimeTableCell />;
    const getAvailablity = (day) => {
      day.forEach((item) => {
        const endTime = new Date(
          `${dateString} ${item.endTime[0]}:${item.endTime[1]}`
        ).getTime();
        const startTime = new Date(
          `${dateString} ${item.startTime[0]}:${item.startTime[1]}`
        ).getTime();
        if (time >= startTime && time < endTime) {
          result = <WeekView.TimeTableCell className={classes.available} />;
        }
      });
      return result;
    };
    switch (date.getDay()) {
      case 0:
        return getAvailablity(sunday);
      case 1:
        return getAvailablity(monday);
      case 2:
        return getAvailablity(tuesday);
      case 3:
        return getAvailablity(wednesday);
      case 4:
        return getAvailablity(thursday);
      case 5:
        return getAvailablity(friday);
      case 6:
        return getAvailablity(saturday);
      default:
        return result;
    }
  };
  const [data, setData] = useState(schedulerData);
  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState defaultCurrentViewName="Week" />

        <DayView startDayHour={0} endDayHour={24} />
        <WeekView
          startDayHour={0}
          endDayHour={24}
          timeTableCellComponent={TimeTableCell}
          cellDuration={30}
        />
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
