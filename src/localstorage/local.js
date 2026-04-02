

export const setData = (posts) =>{
    console.log(posts)
    localStorage.getItem("posts",JSON.stringify(posts))
}