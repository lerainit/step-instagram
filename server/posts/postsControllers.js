import { getPostsData, addNewPostData, addLikesData, deletePostData, addCommentsData,removeLikesData } from "./postsDataLayers.js";



export const getPosts = async (req, res) => {
    try{
    const data = await getPostsData()
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }
}
export const addNewPost = async (req, res) => {
    try{
    const data = await addNewPostData(req.body.post)
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }
}
export const addLikes = async (req, res) => {
try{
    const data = await addLikesData(req.body.userId, req.params.index,req.body.user,req.body.fill)
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }
}
export const removeLikes = async (req, res) => {
try{
    const data = await removeLikesData(req.body.userId, req.params.index,req.body.user,req.body.fill)
    res.json({ status: 'success', data })}
    catch(error){
            res.status(400).json({ status: "error", message: error.message });
    }
}
export const addComments = async (req, res) => {
      try{
    const data = await addCommentsData(req.body.comment, req.body.userId, req.params.index)

    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }

}

export const deletePost = async (req, res) => {
    try{

    await deletePostData(req.body.userId, req.params.index)

    res.json({ status: 'success' })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }
}