import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import logo from "../Images/images.jpg";
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Box
          bgcolor="white"
          boxShadow="2"
          borderRadius="12px"
          textAlign="center"
          p="240px"
          mt="50px"
        >
          <img src={logo} height="50px" />
          <Typography variant="h5" color="textSecondary">
            ADMIN
          </Typography>
          <TextField
            label="Email"
            id="outlined-size-small"
            defaultValue="Small"
            color="secondary"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
          />
          <TextField
            label="password"
            type="password"
            id="outlined-size-small"
            color="secondary"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
          />
          <br />
          <br />
          <CircularProgress size={30} thickness={6} color="primary" />
          <br />
          <br />
          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth
          >
            LOG IN
          </Button>
        </Box>
      </Container>
    );
  }
}
