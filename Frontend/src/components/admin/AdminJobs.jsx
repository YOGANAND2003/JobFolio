import React, { useEffect, useState } from 'react'
import NavBar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchCompanyByText } from '@/redux/companySlice'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { searchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
    useGetAllAdminJobs();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(searchJobByText(input));
    },[input]);
    return (
        <div>
            <NavBar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className='w-fit'
                        placeholder='Filter by Name, role'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={()=>navigate("/admin/jobs/create")}>New Jobs</Button>
                </div>
                <AdminJobsTable/>
            </div>
        </div>
    )
}

export default AdminJobs
