import axios from "axios"
import {fetchFail, fetchStart,loginSuccess} from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
const useAuthCall = () => {
   const dispatch = useDispatch()
    const navigate = useNavigate
 const login = async (userInfo)=> {
        const BASE_URL='https://22155.fullstack.clarusway.com/'
    
        dispatchEvent(fetchStart())
       try {
        const {data} = await axios.post(`${BASE_URL}account/auth/login/`,userInfo)
        dispatch(loginSuccess(data))
        console.log(data)
        navigate("/stock")
       } catch (error) {
        dispatch(fetchFail())
        console.log(error)
       }
    }
    return {login}
}

export default useAuthCall