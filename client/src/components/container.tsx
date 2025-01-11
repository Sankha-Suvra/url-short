import * as React from 'react';
import FormContainer from './FormContainer';
import { UrlData } from '../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../helpers/Constants';
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
    const response = await axios.get(`http://ec2-3-109-201-181.ap-south-1.compute.amazonaws.com/api/shortUrl`);
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
