
export const setData = (posts) => {
    console.log(posts)
    localStorage.setItem("formdata", JSON.stringify(posts))
}
export const getData =() => {
    const data =localStorage.getItem("formdata")
    console.log("this is data", data)
    return data ? JSON.parse(data) : []
}
