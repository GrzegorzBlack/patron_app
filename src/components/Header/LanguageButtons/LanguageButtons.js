import React, { useContext } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IntiveLogo from "../../../assets/intive_logo.jpg";
import { LanguageContext } from "../../../contexts/LanguageContext";
import Avatar from "@mui/material/Avatar";

export const LanguageButtons = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        color={language === "en" ? "secondary" : "primary"}
        onClick={() => setLanguage("en")}
      >
        ENG
      </Button>
      <Button
        variant="contained"
        color={language === "pl" ? "secondary" : "primary"}
        onClick={() => setLanguage("pl")}
      >
        PL
      </Button>
    </Stack>
  );
};

// Hidden modal

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Child = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        onDoubleClick={handleOpen}
        sx={{
          "&:hover": { backgroundColor: "transparent" },
          cursor: "default",
        }}
      >
        <Avatar
          alt="logo"
          src={IntiveLogo}
          style={{ height: "60px", width: "60px", cursor: "default" }}
        />
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <h2 id="child-modal-title">Znowu to zrobiłeś!</h2>
          <p id="child-modal-description"></p>
          <p>20 punktów dla Griffindoru!</p>
          <Button onClick={handleClose}>Zamknij wiadomość</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export const Nested = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{ cursor: "default" }}>
        <Avatar
          alt="logo"
          src={IntiveLogo}
          style={{ height: "60px", width: "60px", cursor: "default" }}
        />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Gratulacje!</h2>

          <p id="parent-modal-description">Udało Ci się znaleźć sekret!</p>
          <p> 10 punktów dla Griffindoru!</p>
          <Child />
        </Box>
      </Modal>
    </div>
  );
};
