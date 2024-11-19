import * as React from "react";
import { Box, Grid } from "@mui/material";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

export default function EmployeeAttendencePieChart({ empData }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        boxShadow: "none",
        width: "50%",
        border: "1px solid #8f9995",
        padding: "10px",
      }}
    >
      <Grid xs={12} md={9} lg={7}>
        <PieChart
          colors={[
            "rgb(0 91 157)",
            "rgb(15 127 207)",
            "rgb(85 157 209)",
            "rgb(184, 208, 236)",
            "#8C8C8C",
            "#454545",
          ]}
          series={[
            {
              arcLabel: (item) => `${Number(item?.value)}%`,
              arcLabelMinAngle: 30,
              data: [
                {
                  id: 0,
                  value: empData?.percentages?.presentPercentage,
                  label: "Employees Present",
                },
                {
                  id: 1,
                  value: empData?.percentages?.workFromHomePercentage,
                  label: "WFH",
                },
                {
                  id: 2,
                  value: empData?.percentages?.leavePercentage,
                  label: "Employees Leaves",
                },
                {
                  id: 3,
                  value: empData?.percentages?.absentPercentage,
                  label: "Employees Absent",
                },
                {
                  id: 4,
                  value: 0,
                  label: "Weekends",
                },
                {
                  id: 5,
                  value: empData?.percentages?.holidayPercentage,
                  label: "Holiday",
                },
              ],
              // cx: 130,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontWeight: "bold",
            },
          }}
          slotProps={{ legend: { hidden: true } }}
          width={500}
          height={240}
          
        />
      </Grid>
    </Box>
  );
}