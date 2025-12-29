import { useCallback, useState } from 'react'

import { TicketDTO } from '@dtos/TicketDTO'
import { ResponseDTO } from '@dtos/ResponseDTO'

import api from '@services/axiosService'

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketDTO[]>([])
  const [ticket, setTicket] = useState<TicketDTO>()

  const fetchGetAllTickets = useCallback(async () => {
    const request = await api.get<ResponseDTO<TicketDTO[]>>('/tickets')
    setTickets(request.data.data)
  }, [])

  const fetchGetOneTicket = useCallback(async (id: number) => {
    const request = await api.get<ResponseDTO<TicketDTO>>(`/tickets/${id}`)
    setTicket(request.data.data)
  }, [])

  return {
    tickets,
    ticket,
    fetchGetAllTickets,
    fetchGetOneTicket,
  }
}
