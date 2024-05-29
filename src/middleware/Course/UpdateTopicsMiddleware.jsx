import axios from 'axios';
import { UPDATE_TOPICS_REQUEST,SET_UPDATE_TOPICS_STATUS,updateTopicsSuccess,updateTopicsFailure } from '../../action/Course/UpdateTopicsAction';



const API_URL = 'http://localhost:5199/lxp/course/topic';

 const updateTopicsApi = ({ dispatch,getState }) => (next) => async (action) => {
  const ReducerUpdateTopicsData=getState().updateTopic;

  if(!ReducerUpdateTopicsData.isRequesting){
    dispatch({type:SET_UPDATE_TOPICS_STATUS,payload:true})
  

  if (action.type === UPDATE_TOPICS_REQUEST) {
    try {
      console.log("update api",action.payload)
      // Assuming 'action.payload' contains the data you want to senda
      const response = await axios.put(API_URL,action.payload);
      console.log('API Response:', response.data); // Log the response data
      dispatch(updateTopicsSuccess(response.data));
      
      
    } catch (error) {

      console.error('API Error:', error.message);
      dispatch(updateTopicsFailure(error.message));
      
    }finally{
      dispatch({type:SET_UPDATE_TOPICS_STATUS,payload:false})
    }
  }
  }
  return next(action);
  
};

export default updateTopicsApi;
