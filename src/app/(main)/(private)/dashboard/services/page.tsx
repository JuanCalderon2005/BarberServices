import { ServicesService } from '@/app/infrastructure/services/service.service';
import { IGetServiceRequest } from '@/models/requestApi.models';
import DataServices from '@/ui/template/DataServices';
import React from 'react'


interface Props {
  searchParams: IGetServiceRequest
}

const useServices = new ServicesService()

export default async function ServicesPage({ searchParams }: Props) {

  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1

  const response = await useServices.AllServices({ page, size: 10 })


  return (
    <>
      <DataServices data={response} pagination={response.pageable} />
    </>
  )
}
