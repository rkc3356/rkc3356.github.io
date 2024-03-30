import welcomePet from '../assets/character/welcome-pet.svg';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Copyright from '../components/Copyright';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const dayDurationInputProps = {
  step: 1,
  min: 1,
  max: 60,
};

export default function CatWelcome() {
  const history = useNavigate();
  const [nameValue, setNameValue] = useState('Loof');
  const [dayDurationValue, setDayDurationValue] = useState(5);

  
 const handleNameChange = (event) => {
    setNameValue(event.target.value);
 }

 const handleDayDurationChange = (event) => {
    setDayDurationValue(event.target.value);
 }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (nameValue !== '' && dayDurationValue !== '') {
      history.push('/play/' + encodeURIComponent(nameValue) + "/" + dayDurationValue);
    }

  }  

  return (
    <Grid container sx={{height: '100vh'}}>
      <Grid 
        item 
        xs={false} 
        sm={4} 
        md={7} 
        sx={{
          backgroundImage: `url(${welcomePet})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000000',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div 
          style={{
            margin: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar 
            sx={{
              margin: 5,
              backgroundColor: '#000000'
            }}
          >
          </Avatar>
          <Typography component="h1" variant="h5">
            Start your game by giving your pet a name and setting the speed!
          </Typography>
          <form 
            style={{
              width: '100%', 
              marginTop: 1,
            }} 
            onSubmit={handleSubmit} 
            method="post"
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              required
              id="pet-name"
              label="Your Pet Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={nameValue} 
              onChange={handleNameChange}
            />
            <TextField
              id="day-duration"
              label="Day Duration (in seconds)"
              variant="outlined"
              type="number"
              defaultValue={dayDurationValue}
              inputProps={dayDurationInputProps}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleDayDurationChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Start Game!
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}