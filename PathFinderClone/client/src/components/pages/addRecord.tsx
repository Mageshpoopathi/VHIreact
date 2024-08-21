import React,{useState} from 'react'
import { useDispatch} from 'react-redux';
import {insertCourseInfo} from '../../redux/actions/index'

const AddRecord = () => {
    const dispatch = useDispatch()
    const initialState = {
        programName: '',
        startDate: '',
        endDate: '',
        duration: '',
        participantId: '',
        participantName: '',
        trainerId: '',
        trainerName: ''
      };
    const [formData, setFormData] = useState(initialState);
    
      const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async(event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const result = await dispatch(insertCourseInfo(formData))
        result['messageCode'] == "MSG200" ? 'Successfully Added!!': "Last insertion Failed"r3f2sqdzsz
        console.log("result", result);
        console.log('Form Submitted:', formData);
        setFormData(initialState);
        // You can also send the formData to an API here
      };
    
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">VHI Training Details</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="programName"
                placeholder="Program Name"
                value={formData.programName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="duration"
                placeholder="Duration (in minutes)"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="participantId"
                placeholder="Participant Employee ID"
                value={formData.participantId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="participantName"
                placeholder="Participant Employee Name"
                value={formData.participantName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="trainerId"
                placeholder="Trainer Employee ID"
                value={formData.trainerId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="trainerName"
                placeholder="Trainer Employee Name"
                value={formData.trainerName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      

  )
}

export default AddRecord