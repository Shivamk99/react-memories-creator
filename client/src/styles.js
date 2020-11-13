import { makeStyles } from '@material-ui/core/styles';


export default makeStyles( () => ({
  appBar: {
      background: 'rgb(196,114,12)',
      // eslint-disable-next-line
      background: 'linear-gradient(90deg, rgba(196,114,12,1) 26%, rgba(187,185,16,0.9948354341736695) 76%, rgba(237,140,2,1) 94%)',
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    image: {
      marginLeft: '15px',
    },
}));
