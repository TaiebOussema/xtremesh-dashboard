import {
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { BsCalendar } from 'react-icons/bs'
  import SliderRange from '../SliderRange';
  import { useSelector, useDispatch } from 'react-redux';

  const TimeRange = () => {

    const open = useSelector((state) => state.drawer.open)

    return(
      <Card >
        <CardContent>
          <Grid
            container
            spacing={3}
            style={{ justifyContent: 'center' }}
          >
            <Grid item>
              <Typography
                variant="h7"
              >
                <BsCalendar style={{zoom:'100%', paddingBottom: '2px'}}/> {'   '}
                Set Time Range
              </Typography>
              <SliderRange />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
        
    )
    
    };
  
  export default TimeRange;