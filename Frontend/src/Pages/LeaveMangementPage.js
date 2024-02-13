// LoginPage.js
import {
  Typography,
  Box,
  TextField,
  FormLabel,
  Button,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const cls = "";

export default function LeaveMangementPage() {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleCheckboxChange = (rowId) => {
    const isSelected = selectedRows.includes(rowId);
    setSelectedRows((prevSelected) =>
      isSelected
        ? prevSelected.filter((id) => id !== rowId)
        : [...prevSelected, rowId]
    );
  };
  const currentDate = new Date().toDateString();
  const rows = [
    {
      id: 1,
      startDate: "13-03-21",
      endDate: "15-03-21",
      days: "2",
      leaveType: "Casual",
      extendedLeave: "Casual",
      approvedrejected: "Approved",
      manager: "HR",
    },
    // Add more rows as needed
  ];
  let row;
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            margin: "12px 0px",
            width: "630px",
            height: "42px",
            fontFamily: "Poppins",
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "42px",
            color: "#121843",
          }}
        >
          Leave Management
        </Typography>
        <Typography
          sx={{
            margin: "12px 0px",
            width: "542px",
            height: "28px",
            fontFamily: "Racing Sans One",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "28px",
            color: "#121843",
          }}
        >
          AMEMP00012 - Sanjana Jain
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#161E54",
            height: "auto",
            width: "100%",
            p: 3,
            borderRadius: "10px",
            overflow: "auto",
          }}
          spacing={2}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              lineHeight: "25px",
            }}
          >
            Today’s Date 15th Sept 2021
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              marginTop: "10px",
              fontFamily: "Poppins",
              flexWrap: "wrap",
            }}
            spacing={2}
          >
            <Card
              sx={{
                width: "125px",
                height: "70px",
                margin: "10px 0px",
                marginRight: "10px",
                backgroundColor: "#FFEFE7",
                padding: "3px 3px 3px 15px",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Annual
              </Typography>
              <CardContent sx={{ padding: "0px" }}>
                <Typography sx={{ fontWeight: "500", fontFamily: "Poppins" }}>
                  <strong style={{ fontSize: "1.5rem" }}>10</strong>/10
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "125px",
                height: "70px",
                margin: "10px 0px",
                marginRight: "10px",
                backgroundColor: "#FFEFE7",
                padding: "3px 3px 3px 15px",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Casual
              </Typography>
              <CardContent sx={{ padding: "0px" }}>
                <Typography sx={{ fontWeight: "500", fontFamily: "Poppins" }}>
                  <strong style={{ fontSize: "1.5rem" }}>02</strong>/05
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "125px",
                height: "70px",
                margin: "10px 0px",
                marginRight: "10px",
                backgroundColor: "#FFEFE7",
                padding: "3px 3px 3px 15px",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Sick
              </Typography>
              <CardContent sx={{ padding: "0px" }}>
                <Typography sx={{ fontWeight: "500", fontFamily: "Poppins" }}>
                  <strong style={{ fontSize: "1.5rem" }}>02</strong>/05
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "125px",
                height: "70px",
                margin: "10px 0px",
                marginRight: "10px",
                backgroundColor: "#FFEFE7",
                padding: "3px 3px 3px 15px",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Unpaid
              </Typography>
              <CardContent sx={{ padding: "0px" }}>
                <Typography sx={{ fontWeight: "500", fontFamily: "Poppins" }}>
                  <strong style={{ fontSize: "1.5rem" }}>02</strong>/05
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "125px",
                height: "70px",
                margin: "10px 0px",
                marginRight: "10px",
                backgroundColor: "#FFEFE7",
                padding: "3px 3px 3px 15px",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Half-day
              </Typography>
              <CardContent sx={{ padding: "0px" }}>
                <Typography sx={{ fontWeight: "500", fontFamily: "Poppins" }}>
                  <strong style={{ fontSize: "1.5rem" }}>02</strong>/05
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                width: "125px",
                height: "70px",
                margin: "10px 0px",
                marginRight: "10px",
                backgroundColor: "#F3F8EB",
                padding: "3px 3px 3px 15px",
              }}
            >
              <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                Remaining
              </Typography>
              <CardContent sx={{ padding: "0px" }}>
                <Typography sx={{ fontWeight: "500", fontFamily: "Poppins" }}>
                  <strong style={{ fontSize: "1.5rem" }}>03</strong>/15
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography
            variant="h6"
            sx={{
              margin: "14px 0px",
              color: "#ffffffa6",
              fontFamily: "Poppins",
              lineHeight: "25px",
            }}
          >
            Holidays List 2021
          </Typography>
          <Card
            sx={{
              height: "48%",
              width: "fit-content",
              paddingTop: "8px",
              overflow: "auto",
              display: "flex",
              alignItems: "center",
              padding: "12px",
            }}
          >
            <ol
              style={{
                fontFamily: "poppins",
                fontSize: "0.9rem",
                fontWeight: "400",
                paddingLeft: "1rem",
              }}
            >
              <li style={{ fontFamily: "poppins" }}>13th March - Holi</li>
              <li style={{ fontFamily: "poppins" }}>23rd Aug - Rakhi</li>
              <li style={{ fontFamily: "poppins" }}>
                15th Aug - Independence Day
              </li>
              <li style={{ fontFamily: "poppins" }}>
                2nd Oct - Gandhi Jayanti
              </li>
              <li style={{ fontFamily: "poppins" }}>8th Nov - Diwali</li>
            </ol>
          </Card>
        </Box>
        <Grid
          container
          spacing={1}
          sx={{ margin: "6px 0px", justifyContent: "space-between" }}
        >
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              p={1}
              sx={{
                backgroundColor: "#FFFFFF",
                height: "auto",
                width: "auto",
                border: "1px solid #E0E0E0E0",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="subtitle-1"
                  sx={{ color: "#161E54", fontSize: "1.4rem" }}
                >
                  Leave Application{" "}
                </Typography>
                <Box sx={{ width: "25%" }}>
                  <Accordion sx={{ margin: "4px 0px", height: "auto" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{ minHeight: "30px", height: "30px" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.6rem",
                          minHeight: "25px",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        From Date
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "white",
                        position: "absolute",
                        zIndex: "1000",
                      }}
                    >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker label="Start Date" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ margin: "4px 0px", height: "auto" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{ minHeight: "30px", height: "30px" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.6rem",
                          minHeight: "25px",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        To Date
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "white",
                        position: "absolute",
                        zIndex: "1000",
                      }}
                    >
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker label="End Date" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
              <FormLabel sx={{ fontSize: "12px" }}>Subject</FormLabel>
              <TextField
                variant="outlined"
                sx={{ width: "100%", backgroundColor: "#E0E0E0E0" }}
              />
              <FormLabel sx={{ margin: "2px 0px", fontSize: "12px" }}>
                Body
              </FormLabel>
              <TextField
                multiline
                rows={4}
                variant="outlined"
                sx={{ width: "100%", backgroundColor: "#E0E0E0E0" }}
              />
            </Box>
            <Button
              variant="outlined"
              sx={{
                color: "red",
                borderColor: "white",
                border: "1px solid #E0E0E0E0",
                width: "100%",
                borderBottomLeftRadius: "12px",
                borderBottomRightRadius: "12px",
                textTransform: "none",
                marginTop: "9px",
                "&:hover": {
                  borderColor: "#E0E0E0E0",
                },
              }}
            >
              Send to admin
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              p={1}
              sx={{
                backgroundColor: "#FFFFFF",
                height: "auto",
                width: "auto",
                border: "1px solid #E0E0E0E0",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="subtitle-1"
                  sx={{ color: "#161E54", fontSize: "1.4rem" }}
                >
                  Leaves Overview
                </Typography>
                <Accordion
                  sx={{
                    margin: "4px 0px",
                    height: "auto",
                    width: "39%",
                    zIndex: "1000",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ minHeight: "31px", height: "30px" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.6rem",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        color: "gray",
                      }}
                    >
                      {currentDate}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ backgroundColor: "white", position: "absolute" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Select" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </AccordionDetails>
                </Accordion>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#686868",
                  fontSize: "12px",
                  marginTop: "4px",
                }}
              >
                {" "}
                Details of Leave taken in the Past
              </Typography>
              <Box
                sx={{
                  width: "auto",
                  height: "241px",
                  overflow: "auto",
                  margin: "4px 0px",
                }}
              >
                <List
                  sx={{ width: "100%", padding: "4px 0px", height: "222px" }}
                >
                  <ListItem
                    sx={{
                      backgroundColor: "#E0E0E0",
                      margin: "5px 0px",
                      border: "0.5px solid #E0E0E0",
                      borderRadius: "6px",
                    }}
                  >
                    <ListItemText
                      primary="Brother’s Marriage "
                      secondary={
                        <React.Fragment>
                          {"24th Jan 2021 - 26th Jan 2021"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#E0E0E0",
                      margin: "5px 0px",
                      border: "0.5px solid #E0E0E0",
                      borderRadius: "6px",
                    }}
                  >
                    <ListItemText
                      primary="Rakhi Leave"
                      secondary={
                        <React.Fragment>{"15th Aug 2021"}</React.Fragment>
                      }
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#E0E0E0",
                      margin: "5px 0px",
                      border: "0.5px solid #E0E0E0",
                      borderRadius: "6px",
                    }}
                  >
                    <ListItemText
                      primary="Due to personal reason "
                      secondary={
                        <React.Fragment>
                          {"1st Sep 2021 - 4th Sep 2021"}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ textAlign: "end" }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ textTransform: "none" }}
                >
                  Apply for Leave
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography
          color="error"
          variant="h6"
          my={2}
          sx={{ fontFamily: "Preahvihear" }}
        >
          Leave Description
        </Typography>
        <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
          <Table>
            <TableHead>
              <TableRow style={{ fontFamily: "Poppins" }}>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                    minWidth: "100px",
                    height: "40px",
                  }}
                >
                  <Checkbox onChange={() => handleCheckboxChange(row.id)} />
                  S.no
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  Start Date
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  End Date
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  Days
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  Leave Type
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  Extended Leave
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  Approved/Rejected
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#161e54",
                    color: "#ffffff",
                    fontFamily: "Poppins",
                  }}
                >
                  Manager
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell style={{ fontFamily: "Poppins" }}>
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                    {row.id}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.startDate}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.endDate}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.days}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.leaveType}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.extendedLeave}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.approvedrejected}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "Poppins", color: "#74828F" }}
                  >
                    {row.manager}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
