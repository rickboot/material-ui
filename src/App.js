import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 5,
    color: 'white',
    padding: '5px 20px',
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 20
    },
  },
  palette: {
    primary: {
      main: green[300],
    },
    secondary: {
      main: orange[300],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <FormControlLabel 
        control={<Checkbox
          checked={checked}
          icon={<DeleteIcon/ >}
          checkedIcon={<SaveIcon />}
          onChange={(e)=>setChecked(e.target.checked) }
          color="secondary"
          inputProps={{
            'aria-label': 'primary checkbox'
          }}
        />}
        label="Your ad here!"
      />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="md">
    <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              MUI Theme!
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h2" component="div">
          Welcome to Material UI
        </Typography>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Grid container spacing={2} justify="center">
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: 75, width: '100%', }}/>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: 75, width: '100%', }}/>
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height: 75, width: '100%', }}/>
          </Grid>
        </Grid>
        
        <ButtonStyled />
        <TextField 
          variant="filled"
          color="secondary"
          type="email"
          label="email"
          placeholder="test@test.com"
        />

        <CheckboxExample />
        <ButtonGroup size="large" variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <Button 
            startIcon={<DeleteIcon />}
            color="secondary"
          >
            Discard
          </Button>
        </ButtonGroup>
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
