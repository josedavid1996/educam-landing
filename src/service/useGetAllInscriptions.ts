import { useGetAllCountInscriptionsQuery } from '../generated/graphql'
export const useGetAllCountInscriptions = () => {
  const { data, refetch } = useGetAllCountInscriptionsQuery({
    fetchPolicy: 'network-only'
  })
  const nroItems = data?.getAllCountInscriptions
  return {
    nroItems,
    refetch
  }
}
