import React, { useState } from "react";

import BookingList from "../booking/BookingList"


function Bookings({ bookings }) {
  return (
    <BookingList bookings={bookings}/>
  );
}

export default Bookings;
