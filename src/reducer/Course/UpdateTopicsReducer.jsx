import { 
   
  UPDATE_TOPICS_REQUEST,
  UPDATE_TOPICS_SUCCESS,
  UPDATE_TOPICS_FAILURE,
  SET_UPDATE_TOPICS_STATUS,
} from '../../action/Course/UpdateTopicsAction'

const initialState = {
  
  topics: [],
  loading: false,
  error: null,
  
};

const updateTopicsReducer = (state = initialState, action) => {
  
  switch (action.type) {
     
    case UPDATE_TOPICS_REQUEST:
      return{
        ...state,
        loading:true,
      };

    case UPDATE_TOPICS_SUCCESS:
      console.log("updatereducer",action.payload);
      return{
        ...state,
        topics:action.payload,
       
        loading:false,
        error:null,
      };
    case UPDATE_TOPICS_FAILURE:
      return{
        ...state,
        loading:false,
        error:action.payload,
      };
      case SET_UPDATE_TOPICS_STATUS:
        return{
          ...state,
          isRequesting:action.payload,
        };
      
    default:
      return state;
  }
};

export default updateTopicsReducer;