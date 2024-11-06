'use client'
import { IResponseDataServices, Pageable } from '@/app/core/application/dto/services/services-response.dto'
import React from 'react'
import MainComponent from '../organisms/Main'

interface DataServicesProps {
    pagination:Pageable
    data: IResponseDataServices
}

export default function DataServices({pagination, data}: DataServicesProps) {

    const handleEdit = ()=>{
        console.log('edit')
    }
    const handleDelete = ()=>{
        console.log('delete')
    }
  return (
    <div className="">
        <MainComponent onEdit={handleEdit} onDelete={handleDelete} pagination={pagination} data={data}/>
    </div>
  )
}
