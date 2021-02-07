import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow:
          "0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 1px 0px rgb(0 0 0 / 12%)",
      },
    },
    MuiCard: {
      root: {
        width: "96%",
      },
    },
    MuiGrid: {
      root: {
        flexGrow: 1,
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "translate(11px, 16px) scale(1)",
      },
    },
    MuiSelect: {
      selectMenu: {
        height: "0.5rem",
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginBottom: 0,
        marginTop: 0,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "8.5px 14px",
      },
    },
  },
});
export default theme;
