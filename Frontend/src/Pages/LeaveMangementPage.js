//
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
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useAuth } from "../Components/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import Alert from "@mui/material/Alert";
import Loading from "../sharable/Loading";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const cls = "";

export default function LeaveMangementPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [leaveType, setLeaveType] = React.useState("Casual Leave");
  const [subject, setSubject] = React.useState("");
  const [body, setBody] = React.useState("");
<<<<<<< HEAD
  const [rows , setRows] = React.useState([]);
  const [leaveOverviewData , setLeaveOverviewData] = React.useState([]);
=======
  const [rows, setRows] = React.useState([]);
  const [leaveOverviewData, setLeaveOverviewData] = React.useState([]);
  const [leaveTypes, setLeaveTypes] = React.useState([]); // State for le
  const apiUrl = process.env.REACT_APP_API_URL;

>>>>>>> a977ca4 (setting page bugs fixes)
  ////

  // new code
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

  const [errorr, setErrorr] = React.useState(null);
<<<<<<< HEAD
  const {user} = useAuth();
=======
  const { user } = useAuth();
  const token = encodeURIComponent(user?.token || ""); // Ensure the token is encoded properly
>>>>>>> a977ca4 (setting page bugs fixes)
  const today = new Date();

  // const [error, setError]  = React.useState(null);
  

  // const handleClick = async() => {

  const leaveOverView = async () => {
<<<<<<< HEAD
    try{
      const res = await axios.post(`${process.env.REACT_APP_API_URI}/leave/fetch-leave-overview` ,{
        emp_id : user?.user_id,
        status : "approved"
      } , {
        headers : {
          "x-access-token" : user?.token
=======
    try {
      const res = await axios.post(
        `${apiUrl}/leave/fetch-leave-overview`,
        {
          emp_id: user?.user_id,
          status: "approved",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
>>>>>>> a977ca4 (setting page bugs fixes)
        }
      })
      setLeaveOverviewData(res?.data?.data)
    }catch(err){
      toast.error(err?.response?.message);
    }
<<<<<<< HEAD
  }
    
  const getUserLeaves = async() => {
    try{
      const res = await axios.get(`${process.env.REACT_APP_API_URI}/leave/user-all-leave-data` , {
        headers : {
          "x-access-token" : user?.token
        }
      });
      setRows(res?.data?.data);
    }catch(err){
      console.log(err);
    }
  }
=======
  };
  const fetchLeaveData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URI}/leave/fetch-leave-type-and-count`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      setLeaveTypes(response.data.data); // Update the leave types state
    } catch (error) {
      console.error("Error fetching leave types:", error);
    }
  };

  const getUserLeaves = async () => {
    try {
      const res = await axios.post(
        `${apiUrl}/leave/user-all-leave-data`,
        {
          emp_id: user?.user_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      setRows(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
>>>>>>> a977ca4 (setting page bugs fixes)
  React.useEffect(() => {
    async function getData() {
      try {
        setLoading(true);

        const response = await axios.get(
          // `${process.env.REACT_APP_BASE_URL}/api/v1/leave/get-all-leave-count/AMEMP010`
<<<<<<< HEAD
          `${process.env.REACT_APP_API_URI}/leave/get-user-leave-dashboard-data/${user?.user_id}` , {
            headers : {
              "x-access-token" : user?.token
            }
=======
          `${apiUrl}/leave/get-user-leave-dashboard-data/${user?.user_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token,
            },
>>>>>>> a977ca4 (setting page bugs fixes)
          }
        );
        setData(response?.data?.data);

        setLoading(false);
      } catch (errorr) {
        setErrorr(errorr);

        setLoading(false);
      }
    }
    const fetchData = async () => {
<<<<<<< HEAD
      await Promise.all([
        getData(),
        getUserLeaves(),
        leaveOverView()
      ]);
      setIsLoading(false);
    }
    fetchData();
  },[]);
=======
      await Promise.all([getData(), getUserLeaves(), leaveOverView()]);
      fetchLeaveData(); // Fetch leave types on component mount
      setIsLoading(false);
    };
    fetchData();
  }, []);
>>>>>>> a977ca4 (setting page bugs fixes)

  const handleUpdate = async () => {


    try {
      const response = await axios.post(
        `${apiUrl}/leave/leave-request`,
        {
          emp_id: user?.user_id,
          leave_type: leaveType,
          from_date: fromDate,
          to_date: toDate,
          subject: subject,
          body: body,
<<<<<<< HEAD
        } , {
          headers : {
              "x-access-token" : user?.token
            }
          
=======
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
>>>>>>> a977ca4 (setting page bugs fixes)
        }
      );

      toast.success(response?.data?.message);
    } catch (error) {
      const errors = error?.response?.data?.errors;
      errors.forEach((item) => {
        toast.error(item?.msg);
      });
      console.error("Error:", error);
    }
  };

  function handleToDateChange(newDate) {
    const datee = new Date(newDate);
    const strDatee = datee.toISOString();
    const formatttedDate = strDatee.split("T")[0];

    setToDate(formatttedDate);
  }

  const formattedDate = (date) => {
    const newDate = new Date(date);
    const datestr = newDate.toString().split(" ");
    return datestr[2] + " " + datestr[1];
    
  } 
  ////
  function handleFromDateChange(newDate) {
    const date = new Date(newDate);
    const strDate = date.toISOString();
    const formattedDate = strDate.split("T")[0];
    setFromDate(formattedDate);
    // If toDate is selected and it's less than fromDate, reset toDate
    if (toDate && newDate > toDate) {
      setToDate(null);
    }
  }
  function handleChange(e) {
    setLeaveType(e.target.value);
  }

  const formattedLeaveDate = (date) => {
    const newdate = new Date(date);
    const dateStr = newdate.toString().split(" ");
    return dateStr[2] + " " + dateStr[1] + " " + dateStr[3];
  }
  const currentDate = new Date();

  let row;
  if (isLoading) {
    return <Loading />;
  } else {
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
          <ToastContainer />
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
            {user?.user_id} - {user?.user_name}
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
              Today’s Date {today.toString().split(" ")[2]}
              {today.toString().split(" ")[1]} {today.toString().split(" ")[3]}
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
              {data?.user_data?.map((item) => (
                <Card
                  sx={{
                    minHeight: "110px",
                    minWidth: "144px",
                    width: "125px",
                    height: "70px",
                    margin: "10px 0px",
                    marginRight: "10px",
                    backgroundColor: "#FFEFE7",
                    padding: "3px 3px 3px 15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: "500" }}>
                    {item?.leave_type}
                  </Typography>
                  <CardContent sx={{ padding: "0px" }}>
                    <Typography
                      sx={{ fontWeight: "500", fontFamily: "Poppins" }}
                    >
                      <strong style={{ fontSize: "1.5rem" }}>
                        {item?.leave_taken_count}
                      </strong>
                      /{item?.leave_count}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
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
              Holidays List {today.toString().split(" ")[3]}
            </Typography>
            <Card
              sx={{
                height: "48%",
                width: "fit-content",
                overflow: "auto",
                padding: "2px 12px",
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
                {data?.holiday_list_data?.map((item) => (
                  <li style={{ fontFamily: "poppins" }}>
                    {formattedDate(item?.date)} - {item?.holiday}
                  </li>
                ))}
              </ol>
            </Card>
          </Box>
          <Grid
            container
            spacing={1}
            sx={{ margin: "6px 0px", justifyContent: "space-between" }}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
                    color: "#161E54",
                    fontSize: "1.4rem",
                  }}
                >
                  Leave Application{" "}
                  <Box
                    sx={{
                      width: { lg: "35%", md: "40%", sm: "40%", xs: "43%" },
                    }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        sx={{
                          margin: "4px 0px",
                          "&.MuiTextField-root .MuiInputBase-input::placeholder":
                            {
                              fontSize:
                                "14px" /* Adjust the font size as needed */,
                            },
                        }}
                        label="From Date"
                        value={fromDate}
                        minDate={currentDate}
                        onChange={handleFromDateChange}
                        renderInput={(params) => (
                          <TextField {...params} size="small" />
                        )}
                        slotProps={{ textField: { size: "small" } }}
                      />
                      <DatePicker
                        label="To Date"
                        sx={{
                          "&.MuiTextField-root .MuiInputBase-input::placeholder":
                            {
                              fontSize:
                                "14px" /* Adjust the font size as needed */,
                            },
                        }}
                        value={toDate}
                        minDate={fromDate} // Set the minDate based on fromDate
                        // onChange={(newDate) => setToDate(newDate)}
                        onChange={handleToDateChange}
                        renderInput={(params) => (
                          <TextField {...params} size="small" />
                        )}
                        slotProps={{ textField: { size: "small" } }}
                      />
                    </LocalizationProvider>
                  </Box>
                </Box>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ fontSize: "12px" }}
                >
                  Leave Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={leaveType}
                  label="leaveType"
                  sx={{ width: "100%", backgroundColor: "#fafafa" }}
                  onChange={handleChange}
                >
<<<<<<< HEAD
                  <MenuItem value={"Casual leave"}>casual  </MenuItem>
                  <MenuItem value={"Sick leave"}>Sick </MenuItem>
=======
                  {leaveTypes?.map((type) => (
                    <MenuItem key={type.leave_type} value={type.leave_type}>
                      {type.leave_type}
                    </MenuItem>
                  ))}
>>>>>>> a977ca4 (setting page bugs fixes)
                </Select>
                <br />
                <FormLabel sx={{ fontSize: "12px" }}>Subject</FormLabel>
                <TextField
                  variant="outlined"
                  onChange={(e) => setSubject(e.target.value)}
                  sx={{ width: "100%", backgroundColor: "#fafafa" }}
                />
                <FormLabel sx={{ margin: "2px 0px", fontSize: "12px" }}>
                  Body
                </FormLabel>
                <TextField
                  multiline
                  rows={3}
                  variant="outlined"
                  onChange={(e) => setBody(e.target.value)}
                  sx={{ width: "100%", backgroundColor: "#fafafa" }}
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
                onClick={handleUpdate}
              >
                Send to admin
              </Button>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
                    color: "#161E54",
                    fontSize: "1.4rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  Leaves Overview
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      sx={{
                        width: "35%",
                        "&.MuiTextField-root .MuiInputBase-input::placeholder":
                          {
                            fontSize:
                              "14px" /* Adjust the font size as needed */,
                          },
                      }}
                      label={"MM/YYYY"}
                      views={["month", "year"]}
                      slotProps={{ textField: { size: "small" } }}
                    />
                  </LocalizationProvider>
                  {/* date code ends here */}
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
                    overflow: "auto",
                    margin: "4px 0px",
                  }}
                >
                  <List
                    sx={{
                      width: "100%",
                      padding: "4px 0px",
                      height: { lg: "340px", md: "362px", sm: "305px" },
                    }}
                  >
<<<<<<< HEAD
<<<<<<< HEAD
                    {leaveOverviewData?.map((item) => (<ListItem
=======
=======
>>>>>>> 2e2bcaf (leave page change)
                    {leaveOverviewData?.map((item) => (
                      <ListItem
                        sx={{
                          backgroundColor: "#fafafa",
                          margin: "5px 0px",
                          border: "0.5px solid #E0E0E0",
                          borderRadius: "6px",
                        }}
                      >
                        <ListItemText
                          primary={item?.leave_type}
                          secondary={
                            <React.Fragment>
                              {formattedLeaveDate(item?.from_date)} -{" "}
                              {formattedLeaveDate(item?.to_date)}
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    ))}
<<<<<<< HEAD
                    <ListItem
>>>>>>> a977ca4 (setting page bugs fixes)
                      sx={{
                        backgroundColor: "#fafafa",
                        margin: "5px 0px",
                        border: "0.5px solid #E0E0E0",
                        borderRadius: "6px",
                      }}
                    >
                      <ListItemText
<<<<<<< HEAD
                        primary={item?.leave_type}
                        secondary={
                          <React.Fragment>
                            {formattedLeaveDate(item?.from_date)} - {formattedLeaveDate(item?.to_date)}
                          </React.Fragment>
                        }
                      />
                    </ListItem>))}
=======
                        primary="Rakhi Leave"
                        secondary={
                          <React.Fragment>{"15th Aug 2021"}</React.Fragment>
                        }
                      />
                    </ListItem>
                    <ListItem
                      sx={{
                        backgroundColor: "#fafafa",
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
                    <ListItem
                      sx={{
                        backgroundColor: "#fafafa",
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
>>>>>>> a977ca4 (setting page bugs fixes)
=======
>>>>>>> 2e2bcaf (leave page change)
                  </List>
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
                      minWidth: "110px",
                      height: "40px",
                    }}
                  >
                    <Box
                      component="img"
                      src={`${process.env.PUBLIC_URL}/Images/Check (1).svg`}
                      alt="Check"
                      sx={{ paddingRight: "10px" }}
                      // onClick= {handleClick}
                    />
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
                {rows?.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8}>
                      <Alert severity="warning">Data not found.</Alert>
                    </TableCell>
                  </TableRow>
                ) : (
                  rows?.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell
                        style={{ fontFamily: "Poppins", minWidth: "110px" }}
                      >
                        <Box
                          component="img"
                          src={`${process.env.PUBLIC_URL}/Images/Check (1).svg`}
                          alt="Check"
                          style={{ filter: "invert(1)" }}
                          sx={{ paddingRight: "9px" }}
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
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
  }
}
