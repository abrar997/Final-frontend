import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#eee",
  border: "2px solid #eee",
  boxShadow: 24,
  p: 8,
  textAlign: "center",
};
const buttonStyle = {
  border: "1px solid  #0000ff",
  width: "200px",
  textAlign: "center",
  backgroundColor: "#0000ff",
  color: "white",
  margin: "auto",
  textTransform: "capitalize",
};

const ModalBox = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{  fontSize: 24,width:"160px", color: "#0000ff",textTransform:"lowercase" }}
      >
        Start now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            select your courses
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
              style={buttonStyle}
              className="btn ml-2 mr-2 mt-2 mb-4"
              to="/WebdevelopmentCourses"
            >
              Web development
            </Link>
            <Link
              style={buttonStyle}
              className="btn ml-2 mr-2 mt-2 mb-4"
              to="/GameDevelopmentCourses"
            >
              Game development
            </Link>
            <Link
              style={buttonStyle}
              className="btn ml-2 mr-2 mt-2 mb-4"
              to="/MobileDevelopmentCourses"
            >
              Mobile development
            </Link>
            <Link
              style={buttonStyle}
              className="btn ml-2 mr-2 mt-2 mb-4"
              to="/DataScienceCourses"
            >
              data science
            </Link>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default ModalBox;
