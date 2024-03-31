import React, { useState } from 'react';
import ImageButton from '../components/ImageButton';
import { useNavigate } from "react-router-dom";
import ParticleComponent from '../components/Particle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as WelcomePet } from '../assets/character/cat.svg';
import Home from '../media/home.png';

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
    <div>
      <ImageButton to={'/'} img={Home} width={40} divStyle={{ display: 'flex', margin: 10 }} />
      <Grid container sx={{ height: '100vh' }} style={{ alignItems: 'center', flexDirection: 'column' }}>
        <WelcomePet width={'100px'} height={'100px'} style={{ margin: 20 }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'black'
            }}
          >
            <form
              style={{
                width: '100%',
                marginTop: 1,
              }}
              onSubmit={handleSubmit}
              method="post"
            >
              <TextField
                margin="normal"
                fullWidth
                required
                id="pet-name"
                label="Your Cat's Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={nameValue}
                onChange={handleNameChange}
                style={{ marginTop: 10, marginBottom: 5 }}
              />
              <TextField
                id="day-duration"
                label="Day Duration (in seconds)"
                type="number"
                defaultValue={dayDurationValue}
                inputProps={dayDurationInputProps}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleDayDurationChange}
                style={{ marginTop: 5, marginBottom: 10 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ color: 'white', backgroundColor: 'black', border: '1px white solid', fontFamily: 'Garamond' }}
              >
                Start Game!
              </Button>
            </form>
          </div>
        </Grid>
        <ParticleComponent />
      </Grid>
    </div>
  );
}