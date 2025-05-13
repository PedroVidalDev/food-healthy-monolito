import { useCallback, useState } from 'react'

import { TicketDTO } from '@dtos/TicketDTO'
import { ResponseDTO } from '@dtos/ResponseDTO'

import api from '@services/axiosService'

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketDTO[]>([])

  const fetchGetAllTickets = useCallback(async () => {
    const request = await api.get<ResponseDTO<TicketDTO[]>>('/tickets')
    setTickets(request.data.data)
  }, [])

  return {
    tickets,
    fetchGetAllTickets,
  }
}
