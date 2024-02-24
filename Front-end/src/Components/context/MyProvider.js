import * as React from 'react'
import { MyContext } from './context';

const MyProvider = ({children}) => {
  const [selectedBookData, setSelectedBook]=React.useState({});
  React.useEffect(()=>{
    const storedValue = localStorage.getItem('value');
    // console.log(localStorage.getItem('book'));
    if(storedValue){
          setValue(JSON.parse(storedValue));
          
        }
    const storedBookData=localStorage.getItem('book');
    if(storedBookData){
          setSelectedBook(JSON.parse(storedBookData));
          console.log(typeof(JSON.parse(storedBookData)));
        }
        // console.log("ai"+storedBookData);
        // console.log(selectedBookData);

    }, []);
    const [value, setValue] = React.useState("");
    const [isSideBarEnabled,setSideBarEnable]=React.useState(false);

    localStorage.setItem('isSideBarEnabled',isSideBarEnabled);


    const toggleSideBar=(str)=>{
      if(str==="false")
      setSideBarEnable(false);
      else
      setSideBarEnable(!isSideBarEnabled);
      localStorage.setItem('isSideBarEnabled',isSideBarEnabled);
    }
    const updateValue = (newValue) => {
      setValue(newValue);
      localStorage.setItem('value', JSON.stringify(newValue))
    }
    const selectBook=(book)=>{
      setSelectedBook(book);
      localStorage.setItem('book',JSON.stringify(book));
      // localStorage.setItem('bookname',JSON.stringify(selectedBookData.name));
      // console.log(selectedBookData);
      // console.log(selectedBookData);
    }

  return (
    <MyContext.Provider value={{value, updateValue, isSideBarEnabled, toggleSideBar, selectedBookData, selectBook}}>
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider;