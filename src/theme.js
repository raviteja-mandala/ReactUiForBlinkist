import { createMuiTheme }  from '@material-ui/core/styles';
import "@fontsource/raleway"

const theme = createMuiTheme({
    
  palette: {
    primary: {
        main : '#00cc00',
        dark : '#006600'
    }
  },

  cardcolor : {
      main : '#cccccc'
  },

  bookStatusButtonColor : {
      main : '#ffffff'
  },

  typography : {
      fontFamily : 'Raleway',
      fontSize : {
          cardIconsFont : 15,
          reads : 13,
          bookStatusFontSize : 20
      }
  }
})

export default theme;