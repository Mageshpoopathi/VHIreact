import { config } from '../../config';
import axios from 'axios';

export const FETCH_SUCCESS_RESPONSE = 'FETCH_SUCCESS_RESPONSE';
export const FETCH_ERROR_RESPONSE = 'FETCH_ERROR_RESPONSE';

export const insertCourseInfo = (data: { programName: string; startDate: string; endDate: string; duration: string; participantId: string; participantName: string; trainerId: string; trainerName: string; }) => 
  async (dispatch: any) => {
    try {
      const body = JSON.stringify(data);
      const response = await axios.post(config.serviceUrl + config.insertData, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: FETCH_SUCCESS_RESPONSE,
        payload: response.data, // Use response.data to get the actual data from the response
      });

      return response.data; // Return the actual data, not the entire response
    } catch (error) {
      console.log("error", error);
      return error
    }
  };
