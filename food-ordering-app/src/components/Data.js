export async function dishesData(){
  
    const data=await fetch("Mock.json")
    const jsonFormat=await data.json()
    return jsonFormat
}