import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  transitions: { create: () => 'none' },
  palette: {
    primary: blueGrey,
    secondary: {
      main: '#303030',
    },
    type: 'dark',
  },
})

export default theme
