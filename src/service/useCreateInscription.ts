import {
  CreateInscriptionsInput,
  useCreateInscriptionMutation
} from '../generated/graphql'

export const useCreateInscription = () => {
  const [createInscriptionMutation] = useCreateInscriptionMutation()
  return {
    CreateInscription: async (input: CreateInscriptionsInput) => {
      const res = await createInscriptionMutation({
        variables: { input }
      })

      const data = res.data?.createInscription.data
      console.log(data)
      if (data) {
        return {
          respose: data,
          status: true
        }
      } else {
        return {
          message: res?.data?.createInscription?.errors![0].message,
          status: false
        }
      }
    }
  }
}
