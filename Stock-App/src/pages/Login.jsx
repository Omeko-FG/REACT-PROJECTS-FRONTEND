import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik"
import { Form } from "formik"
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { object, string } from 'yup';


const Login = () => {
  const navigate = useNavigate();
  const { currentUser, error } = useSelector((state) => state?.auth);

  let loginScheme = object({
    email: string().email().required(),
    
  });
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik 
          initianlValues={{email:"",pasword:""}}
          validationSchema={loginScheme}
          onSubmit={(values,actions)=>{
            
            actions.resetForm()
            actions.setSubmitting(false)
          }}
          >
            {({values,handleChange,handleBlur,errors,touched})=>(
              <Form>
                <Box
                 sx={{display:"flex", flexDirection:"column", gap:2}}>
                  <TextField
                  label="email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  value={values.email || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  />
                  <TextField
                  label="Password"
                  name="Password"
                  id="Password"
                  type="Password"
                  variant="outlined"
                  value={values.Password || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Password && Boolean(errors.Password)}
                  helperText={touched.Password && errors.Password}
                  />
                </Box>  
              </Form>
            )}

 
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;