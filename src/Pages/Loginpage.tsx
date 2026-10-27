
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

type LoginFormValues = {
  name: string;
};

type LoginPageProps = {
  onLogin: (name: string) => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    onLogin(data.name.trim());
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        bgcolor: "#F2F9FC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 554,
          minHeight: 324,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1.1fr 0.9fr",
          },
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        {/* Login Form */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{
            p: { xs: 3, sm: 4.5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 324,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
              textAlign="center"
              fontSize={14}
              mb={2}
            >
              Login
            </Typography>

            <Box
              sx={{
                borderBottom: "1px solid #E0E0E0",
                mb: 1.5,
              }}
            />

            <TextField
              fullWidth
              size="small"
              placeholder="Enter Your Name"
              error={Boolean(errors.name)}
              helperText={errors.name?.message || " "}
              {...register("name", {
                required: "Please enter your name",
                validate: (value) =>
                  value.trim().length > 0 ||
                  "Name cannot contain only spaces",
              })}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: 11,
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3px",
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
            sx={{
              minHeight: 26,
              fontSize: 10,
              borderRadius: "3px",
              bgcolor: "#2196F3",
              "&:hover": {
                bgcolor: "#087DD1",
              },
            }}
          >
            LOGIN
          </Button>
        </Box>

        {/* Weather Illustration */}
        <Box
          sx={{
            bgcolor: "#D2E1E7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            position :'relative'
            
          }}
        >
          {/* <Typography sx={{ fontSize: 65 }}>🌧️</Typography>
          <Typography sx={{ fontSize: 65 }}>🌬️</Typography> */}
          <Box 
          component="img"
          src="./img/dc5674da7415fc93ad3656c3d4ca4a2379e80c63.png"
          sx={{
            width : '150px',
            position : 'absolute',
            top : 0,
            right : 0
          
          }}
          />
          <Box
          component="img"
          src="./img/06509ff97ca4966e34e878881cc49db475d84799.png"
          sx={{
            width : '150px',
            position : 'absolute',
            left : 10
            
          }}
          />
          <Box
          component="img"
          src="./img/52e7a10c792d6dd947742b32d669accc2f1a969a.png"
          sx={{
            width : '150px',
            position : 'absolute', 
            bottom : 0, 
            right : 0
            

          }}
          />
        
        </Box>
        
      </Paper>
      
    </Box>
  );
}
