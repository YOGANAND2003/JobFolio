import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Edit2, MoreHorizontal } from 'lucide-react';

const CompaniesTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>A list of your recent registered Companies</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableCell>
                    <Avatar>
                        <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"/>
                    </Avatar>
                </TableCell>
               <TableCell>Company Name</TableCell>
               <TableCell>10-08-2023</TableCell>
               <TableCell>
                <Popover>
                    <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                    <PopoverContent className="w-32">
                        <div>
                            <Edit2/>
                            <span>Edit</span>
                        </div>
                    </PopoverContent>
                </Popover>
               </TableCell>
            </TableBody>
        </Table>
    </div>
  )
};
export default CompaniesTable