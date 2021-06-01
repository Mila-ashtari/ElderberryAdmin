import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { createBooking } from "../../actions/booking";

const useStyles = makeStyles((theme) => ({
  available: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

// const styles = theme => ({
//   button: {
//     color: theme.palette.background.default,
//     padding: 0,
//   },
//   text: {
//     paddingTop: theme.spacing(1),
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//   },
// });

// const AppointmentBase = ({
//   children,
//   data,
//   onClick,
//   classes,
//   toggleVisibility,
//   onAppointmentMetaChange,
//   ...restProps
// }) => (
//   <Appointments.Appointment
//     {...restProps}
//   >
//     <React.Fragment>
//       <IconButton
//         className={classes.button}
//         onClick={({ target }) => {
//           toggleVisibility();
//           onAppointmentMetaChange({ target: target.parentElement.parentElement, data });
//         }}
//       >
//         <InfoIcon fontSize="small" />
//       </IconButton>
//       {children}
//     </React.Fragment>
//   </Appointments.Appointment>
// );

// const Appointment = withStyles(styles, { name: 'Appointment' })(AppointmentBase);

const Schedule = (props) => {
  const classes = useStyles();
  const { schedule, currentBookings, id, createBooking } = props;
  const { saturday, sunday, monday, tuesday, wednesday, thursday, friday } =
    schedule.availability;
  const data = [];
  currentBookings.forEach((booking) => {
    const { client, provider } = booking;
    data.push({
      startDate: `${booking.startTime}`,
      endDate: `${booking.endTime}`,
      title: `${provider.firstName}'s appointment with ${client.firstName}`,
      id: booking.id,
    });
  });
  const [schedulerData, setSchedulerData] = useState(data);
  // const [addedAppointment, setAddedAppointment] = useState();
  // const [appointmentChanges, setAppointmentChanges] = useState({});
  // const [editingAppointment, setEditingApointment] = useState(undefined);
  // const [visible, setVisible] = useState(false);
  // const [appointmentMeta, setAppointmentMeta] = useState({
  //   terget: null,
  //   data: {},
  // });
  console.log(id)
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
  // const handleAddedAppointment = (addedAppointment) => {
  //   setAddedAppointment({ addedAppointment });
  //   console.log(addedAppointment);
  // };
  // const handleAppointmentChanges = (appointmentChanges) => {
  //   setAppointmentChanges({ appointmentChanges });
  // };
  // const handleEditingAppointment = (editingAppointment) => {
  //   setEditingApointment({ editingAppointment });
  // };
  // const onAppointmentMetaChange = ({ data, target }) => {
  //   setAppointmentMeta({ appointmentMeta: { data, target } });
  // };
  // const toggleVisibility = () => {
  //   setVisible(!visible);
  // };
  // const myAppointment = (props) => {
  //   return (
  //     <Appointment
  //       {...props}
  //       toggleVisibility={toggleVisibility}
  //       onAppointmentMetaChange={onAppointmentMetaChange}
  //     />
  //   );
  // };
  const commitChanges = ({ added, changed, deleted }) => {
    let data = [...schedulerData];
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      createBooking({...added, pswID:id});
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted);
    }
    console.log(data);
    setSchedulerData(data);
  };

  return (
    <Paper>
      <Scheduler data={schedulerData} height={660}>
        <ViewState defaultCurrentViewName="Week" />
        <EditingState
          onCommitChanges={commitChanges}
          // addedAppointment={addedAppointment}
          // onAddedAppointmentChange={handleAddedAppointment}
          // appointmentChanges={appointmentChanges}
          // onAppointmentChangesChange={handleAppointmentChanges}
          // editingAppointment={editingAppointment}
          // onEditingAppointmentChange={handleEditingAppointment}
        />
        <IntegratedEditing />

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
        {/* <Appointments appointmentComponent={myAppointment}/> */}
        <Appointments />
        <AppointmentTooltip
          showCloseButton
          showOpenButton
          showDeleteButton
          // visible={visible}
          // onVisibilityChange={toggleVisibility}
          // appointmentMeta={appointmentMeta}
          // onAppointmentMetaChange={(e)=>{console.log(e.target)}}
        />
        <AppointmentForm />
        <ViewSwitcher />
      </Scheduler>
    </Paper>
  );
};

export default connect(null, { createBooking })(Schedule);
