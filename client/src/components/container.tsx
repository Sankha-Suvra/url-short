import * as React from 'react';
import FormContainer from './FormContainer';
import { UrlData } from '../interface/UrlData';
import axios from 'axios';
import DataTable from './DataTable';
interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const[data, setData] = React.useState<UrlData[]>([])
  const[reload, setReload] = React.useState<boolean>(false)

  const updateReloadState = ():void =>{
    setReload(true)
  }
  const fetchTableData = async () => {
    // http://65.0.122.38/api/shortUrl
    const response = await axios.get(`https://url-shortener-76fl.onrender.com/api/shortUrl`);
    console.log("the response from server is", response);
    setData(response.data)   
    setReload(false)
    
  }
  React.useEffect(()=>{
    fetchTableData()
  },[reload])
  return (
  <>
    <FormContainer updateReloadState={updateReloadState}/>
    <DataTable updateReloadState={updateReloadState} data={data}/>
  </>);
};

export default Container;
