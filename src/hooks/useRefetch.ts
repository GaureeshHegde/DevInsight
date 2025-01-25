import React from 'react'
import { useQueryClient } from 'react-query'

const useRefetch = () => {
    const queryClient = useQueryClient()
  return async() => (
    await queryClient.invalidateQueries({
        queryKey : "active"
        //type : 'active'
    })
  )
}

export default useRefetch