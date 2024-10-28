import Modal from "@mui/material/Modal";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const style = {
  flexGrow: "1",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "25px",
  fontFamily: "Poppins",
  border: "1px solid #FFFFFF",
  borderRadius: "16px",
  backgroundColor: "rgb(233, 235, 247)",
  width: { lg: "55%", md: "45%", sm: "50%", xs: "80%" },
  padding: { lg: "55px", md: "45px", sm: "30px", xs: "25px" },
};
const inputControl = {
  border: "none",
  borderRadius: "4px",
  height: "31px",
  width: "100%",
  padding: "5px",
  fontWeight: "500",
  margin: "2px 0px",
};
const labelStyle = {
  fontWeight: "600",
  fontSize: { lg: "1rem", md: "1rem", sm: "1rem", xs: "0.9rem" },
  color: "rgb(120, 120, 122)",
};

export default function AddNewAssets({
  assetsData,
  handleAdd,
  handleClose,
  open,
  fetchAssets,
  isApiHit,
  setIsApiHit
}) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { user, encryptionKey } = useAuth();
  const token = encodeURIComponent(user?.token || "");
  
  const assetsType = {
    "Hardware": ["Laptop", "Mouse", "Headphone", "Keyboard", "Printer", "Battery"],
    "Networking": [],
    "Email": [],
    "Server or Account Access": [],
    "Others": []
  };
  
  const itemNewDescription = useRef("");
  const itemNewRepairs = useRef("");
  const itemNewIssuedFrom = useRef("");
  const itemNewItem = useRef("");
  const itemNewAssignee = useRef("");
  const fileInputRef = useRef(null);
  
  const [selectedAssetType, setSelectedAssetType] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const handleAssetTypeChange = (e) => {
    const assetType = e.target.value;
    setSelectedAssetType(assetType);
    setSelectedItem(""); // Reset item selection when asset type changes
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("asset_type", selectedAssetType);
    formData.append("item", selectedItem);
    formData.append("purchase_date", itemNewDescription.current.value);
    formData.append("warranty_period", itemNewRepairs.current.value);
    formData.append("price", itemNewIssuedFrom.current.value);
    formData.append("model_number", itemNewItem.current.value);
    formData.append("item_description", itemNewAssignee.current.value);
    formData.append("file", fileInputRef.current.files[0]);

    if (fileInputRef.current.files && 
       (fileInputRef.current.files[0]?.type !== "image/png" && 
        fileInputRef.current.files[0]?.type !== "image/jpeg")) {
      toast.warning("Image should be in jpeg or png format only");
      return;
    }

    try {
      setIsApiHit(true);
      const response = await fetch(`${apiUrl}/asset/admin/create-asset`, {
        method: "POST",
        credentials: 'include',
        headers: { "x-encryption-key": encryptionKey },
        body: formData
      });

      if (!response.ok) {
        toast.error("Please Fill all the fields");
        throw new Error("Network response was not ok");
      }

      const newItem = await response.json();
      handleAdd((prevData) => [...prevData, newItem]);
      fetchAssets();
      handleClose();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setIsApiHit(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography sx={{ textAlign: "center", margin: "10px", color: "#121843", fontFamily: "Prosto One", fontWeight: "600" }} variant="h6">
              Add Asset
            </Typography>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="assetType" style={labelStyle}>Asset Type</label>
                <select id="assetType" style={inputControl} value={selectedAssetType} onChange={handleAssetTypeChange}>
                  <option value="" disabled>Select Asset Type</option>
                  {Object.keys(assetsType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="item" style={labelStyle}>Item</label>
                {assetsType[selectedAssetType]?.length > 0 ? (
                  <select id="item" style={inputControl} value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                    <option value="" disabled>Select Item</option>
                    {assetsType[selectedAssetType].map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                ) : (
                  <input type="text" id="item" style={inputControl} value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} placeholder="Enter item" />
                )}
              </Grid>
              {/* Additional fields for asset details */}
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="assignee" style={labelStyle}>Item Description</label>
                <input type="text" id="assignee" style={inputControl} ref={itemNewAssignee} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="itemModel" style={labelStyle}>Model Number</label>
                <input type="text" id="itemModel" style={inputControl} ref={itemNewItem} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="purchaseDate" style={labelStyle}>Purchase Date</label>
                <input type="date" id="purchaseDate" style={inputControl} ref={itemNewDescription} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="price" style={labelStyle}>Price</label>
                <input type="text" id="price" style={inputControl} ref={itemNewIssuedFrom} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="file" style={labelStyle}>Image</label>
                <input type="file" id="file" style={inputControl} ref={fileInputRef} />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={6}>
                <label htmlFor="warrantyPeriod" style={labelStyle}>Warranty Period</label>
                <input type="text" id="warrantyPeriod" style={inputControl} ref={itemNewRepairs} />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div style={{ textAlign: "center", padding: "15px" }}>
                  <Button variant="contained" color="error" type="submit" disabled={isApiHit} sx={{ ...(isApiHit && { "&.MuiButtonBase-root.MuiButton-root.Mui-disabled": { backgroundColor: "#F90716" } }) }}>
                    {isApiHit ? <CircularProgress size="20px" color="inherit" /> : "Submit"}
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}
