import Button from './Buttons'
import WithStyles from './withStyles'
import ThemeUi from './themeui'
import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#000000'
        },
        secondary:{
            main:'#b2ebf2'
        }
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Button/>
          <WithStyles/>
          <ThemeUi/>
        </div>        
    </ThemeProvider>
    
  );
}

export default App;
