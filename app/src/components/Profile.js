import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Img from "../assets/image/img2.jpg";
import { FormControl, useFormControlContext } from "@mui/base/FormControl";
import { Input, inputClasses } from "@mui/base/Input";
import clsx from "clsx";

const SplButton = styled(Button)({
  display: "flex",
  flexDirection: "row",
  textTransform: "none",
  color: "#000000",
  textAlign: "left",
  backgroundColor: "#fff",
  margin: "20px",

  "&:hover": {
    borderColor: "#0062cc",
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fff",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.1rem rgba(0,123,255,.5)",
  },
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledInput = styled(Input)(
  ({ theme }) => `
  
    .${inputClasses.input} {
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      box-shadow: 0px 2px 2px ${
        theme.palette.mode === "dark" ? grey[900] : grey[50]
      };
  
      &:hover {
        border-color: ${blue[400]};
      }
  
      &:focus {
        outline: 0;
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${
          theme.palette.mode === "dark" ? blue[600] : blue[200]
        };
      }
    }
  `
);

const Label = styled(({ children, className }) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return <p>{children}</p>;
  }

  const { error, required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return (
    <p className={clsx(className, error || showRequiredError ? "invalid" : "")}>
      {children}
      {required ? " *" : ""}
    </p>
  );
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  margin-bottom: 4px;

  &.invalid {
    color: red;
  }
`;

const HelperText = styled((props) => {
  const formControlContext = useFormControlContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export default function Profile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        {/* Left Grid */}
        <Grid
          item
          xs={2.9}
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <SplButton variant="contained" size="medium">
            <div>
              <h3>Account Settings</h3>
              Edit your personal information
            </div>
          </SplButton>
          <SplButton variant="contained" size="medium">
            <div>
              <h3>Notification</h3>
              See all the recent work updates
            </div>
          </SplButton>
          <SplButton variant="contained" size="medium">
            <div>
              <h3>Subscription</h3>
              Checkout all your subscriptions
            </div>
          </SplButton>
          <SplButton variant="contained" size="medium">
            <div>
              <h3>Password and Security</h3>
              Forgot password? Click to reset
            </div>
          </SplButton>
        </Grid>
        {/* Right Grid */}
        <Grid
          item
          xs={7.8}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Box
            boxShadow={1}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              backgroundColor: "#fff",
              padding: "30px 60px 30px 60px",
              borderRadius: "10px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Avatar src={Img} sx={{ width: 86, height: 86 }} />
              </Grid>
              <Grid
                item
                xl={6}
                style={{ marginLeft: "40px", marginTop: "15px", gap: "10px" }}
              >
                <h2
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: 20,
                    marginBottom: "6px",
                  }}
                >
                  Upload a New Photo
                </h2>
                <i>profile-pic.jpg</i>
              </Grid>
              <Grid
                item
                xm={1}
                style={{
                  alignItems: "right",
                  marginLeft: "40px",
                  marginTop: "25px",
                }}
              >
                <Button component="label" variant="outlined">
                  Update
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box
            boxShadow={1}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              backgroundColor: "#fff",
              padding: "30px 50px 30px 50px",
              borderRadius: "10px",
            }}
          >
            <Grid container spacing={20}>
              <Grid
                item
                md={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  gap: "20px",
                }}
              >
                <FormControl defaultValue="" required>
                  <Label>Full Name</Label>
                  <StyledInput placeholder="Write your name here" />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="" required>
                  <Label>E-Mail Address</Label>
                  <StyledInput placeholder="Write your e-mail here" />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="" required>
                  <Label>ID</Label>
                  <StyledInput placeholder="Write your ID here" />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="">
                  <Label>Phone Number</Label>
                  <StyledInput placeholder="Write your phone number here" />
                  <HelperText />
                </FormControl>
              </Grid>
              <Grid
                item
                md={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  gap: "20px",
                }}
              >
                <FormControl defaultValue="" required>
                  <Label>Role</Label>
                  <StyledInput placeholder="Write your Role here" />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="">
                  <Label>City</Label>
                  <StyledInput placeholder="Write your city here" />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="">
                  <Label>State/Province</Label>
                  <StyledInput placeholder="Write your state here" />
                  <HelperText />
                </FormControl>
                <FormControl defaultValue="">
                  <Label>Name of Institute</Label>
                  <StyledInput placeholder="Write your Institute's here" />
                  <HelperText />
                </FormControl>
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem 2rem 0rem 2rem",
              }}
            >
              <Button
                type="submit"
                style={{
                  backgroundColor: "#0052B4",
                  color: "#fff",
                  width: "25%"
                }}
              >
                Submit
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
