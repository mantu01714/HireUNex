import { createContext, useEffect } from "react";
import { useState } from "react";
import { jobsData } from '../assets/assets'
export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const [searchfilter, setSearchFilter] = useState({
        title:'',
        location:''
    })

    const [issearched, setIsSearched] = useState(false)
    const[jobs,setJobs]=useState([])
    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)

    // function to fetch jobs
    const fetchJobs=async()=>{
        setJobs(jobsData)
    }
    useEffect(()=>{
        fetchJobs()
    },[])
    const value={
        setSearchFilter,searchfilter,
        issearched,setIsSearched,
        jobs,setJobs,
        showRecruiterLogin,setShowRecruiterLogin
    }
    return (

        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}