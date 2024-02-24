import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { MyContext } from './context/context';
import axios from 'axios';

export default function StarRating() {
  const {selectedBookData}=React.useContext(MyContext);
  const [value, setValue] = React.useState(0);
  const name=localStorage.getItem("value");
  axios.get(`http://localhost:8080/rating/${name}/${selectedBookData.bookId}`,{
    headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})
  .then(res=>setValue(res.data))
  .catch(()=>console.log());
  React.useEffect(()=>{
    // console.log(typeof(value));
    if(typeof(value)=="object")
      setValue(0);
  })
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        size="large" 
        onChange={(event, newValue) => {
          setValue(newValue);
          if(typeof(newValue)=="object")
          newValue=0;

          const userEmail=JSON.parse(localStorage.getItem("value"));
          axios.post(`http://localhost:8080/rating/${userEmail}/${selectedBookData.bookId}/${newValue}`,null,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        }
      }
      />
    </Box>
  );
}