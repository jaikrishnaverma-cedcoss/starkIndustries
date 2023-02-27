
const usePrimaryKey = () => {
// recursion for generating Primary key max capacity 1990 products
    const keyGenerator = (lists:any) => {
      let uniqueId='id_'+parseInt((Math.random()*(2000-10)+10).toString())
      let exists=lists.filter((x:any)=>x.id===uniqueId)
      if(exists.length===0)
        return uniqueId
      else
      keyGenerator(lists)
    }
    return {keyGenerator}
}
export default usePrimaryKey