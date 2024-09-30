import React from 'react'
import NavBar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import CompaniesTable from './CompaniesTable'

const Companies = () => {
    return (
        <div>
            <NavBar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className='w-fit'
                        placeholder='Filter by Name'
                    />
                    <Button>New Company</Button>
                </div>
                <CompaniesTable/>
            </div>
        </div>
    )
}

export default Companies
