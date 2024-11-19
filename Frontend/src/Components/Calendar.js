import React from "react";
import "./Calendar.css";
import Box from "@mui/material/Box";

const Calendar = ({ selectYear, selectMonth, calenderData }) => {
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const isAttendanceDay = (day) => {
    let digit = day >= 10 ? day : Number(`0${day}`);
    const matchedHoliday = calenderData?.find((holiday) => {
      return Number(holiday?.date?.split("-")[2]) === digit;
    });
    if (matchedHoliday) {
      const status = matchedHoliday.attendance_status;
      if (status === "Present") return "Present";
      else if (status === "leave") return "leave";
      else if (status === "wfh") return "wfh";
      else if (status === "Absent") return "Absent";
      else if (status === "Holiday") return "Holiday";
      else if (
        status === "Saturday" ||
        status === "Sunday" ||
        status === "Weekend"
      )
        return "Weekend";
    }
    return undefined;
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(selectYear, selectMonth);
    const firstDayOfMonth = new Date(selectYear, selectMonth - 1, 1).getDay();
    const adjustedStartDay = (firstDayOfMonth + 6) % 7;
    const calendarDays = [];

    for (let i = 0; i < adjustedStartDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const attendanceStatus = isAttendanceDay(day);
      calendarDays.push(
        <div
          key={day}
          className={`day ${attendanceStatus === "Weekend" ? "weekend" : ""} 
          ${attendanceStatus === "Holiday" ? "holiday" : ""} 
          ${attendanceStatus === "Absent" ? "absent" : ""} 
          ${attendanceStatus === "wfh" ? "wfh" : ""} 
          ${attendanceStatus === "leave" ? "leave" : ""} 
          ${attendanceStatus === "Present" ? "present" : ""}`}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const getDayNames = () => {
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return dayNames.map((dayName, index) => (
      <div key={index} className="day-name">
        {dayName}
      </div>
    ));
  };

  return (
    <Box
      sx={{
        margin: "20px 0",
        alignItems: "stretch",
        // , gap: "2rem"
      }}
      className="flex-to-display"
    >
      <div className="calender-box">
        <div className="calendar">
          <div className="day-names">{getDayNames()}</div>
          <div className="calendar-days">{generateCalendar()}</div>
        </div>
      </div>
      <Box
        style={{
          width: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          // height: "100%",
        }}
      >
        <div className="flex-center">
          <div className="color-indicator present"></div>
          <div className="ml-15">Present</div>
        </div>
        <div className="flex-center">
          <div className="color-indicator absent"></div>
          <div className="ml-15">Absent</div>
        </div>
        <div className="flex-center">
          <div className="color-indicator wfh"></div>
          <div className="ml-15">WFH</div>
        </div>
        <div className="flex-center">
          <div className="color-indicator leaves"></div>
          <div className="ml-15">Leaves</div>
        </div>
        <div className="flex-center">
          <div className="color-indicator weekend"></div>
          <div className="ml-15">Weekends</div>
        </div>
        <div className="flex-center">
          <div className="color-indicator holiday"></div>
          <div className="ml-15">Holiday</div>
        </div>
      </Box>
    </Box>
  );
};

export default Calendar;
