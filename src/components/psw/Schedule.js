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
    backgroundColor: "#0aae6a3d",
  },
}));

const Schedule = ({ schedule, currentBookings }) => {
  const classes = useStyles();
  const { saturday, sunday, monday, tuesday, wednesday, thursday, friday } =
    schedule.availability;
  console.log(wednesday);
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

  // wednesday.map((item) => {
  //   const dateString= new Date().toDateString()
  //   console.log(new Date(`${dateString} ${item.startTime[0]}:${item.startTime[1]}`))
  // });

  const TimeTableCell = (props) => {
    const { startDate } = props;
    const date = new Date(startDate);
    const dateString = date.toDateString();
    const time= date.getTime()
    let result = <WeekView.TimeTableCell />;
    console.log(dateString)
    if (date.getDay() === 3) {
      wednesday.forEach((item) => {
        const endTime = new Date(`${dateString} ${item.endTime[0]}:${item.endTime[1]}`);
        const startTime = new Date(`${dateString} ${item.startTime[0]}:${item.startTime[1]}`);
        if (startTime< time < endTime) {
          result = <WeekView.TimeTableCell className={classes.available}/>
        }
      });
    }
    return result;
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
          // dayScaleLayoutComponent={dayScaleLayout}
          cellDuration={60}
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
