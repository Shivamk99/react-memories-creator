import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
  },
  paper: {
    padding: theme.spacing(0),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderColor: 'rgb(1,0,0)',
    borderRadius: '8px',
    background: 'hsla(0, 100%, 70%, 0.3)',
    padding: '16px 32px',
    margin: '4px 2px',
    cursor: 'pointer',    
    
  },

  fileInput: {
    width: '100%',
    margin: '12px 0',
  },
  buttonSubmit: {
    color: 'black',
    marginBottom: 10,
  },
}));
