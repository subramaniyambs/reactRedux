const NEWPOST = 'NEWPOST';
const GETPOST = 'GETPOST';
export const getPost = () => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
    }).then(res=>res.json())
    .then(posts => {
        dispatch({
            type: GETPOST,
            payload: posts
        })
    })
} 

export const createPost = postData => dispatch =>{
    console.log("postData",postData);
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    }).then(res=>res.json())
    .then(post => {
        dispatch({
            type:NEWPOST,
            payload:post
        })
    })
} 



