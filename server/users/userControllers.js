import { getUsersData, addNewSubscriberData, becomeFollowerData, unFollowData, removeSubscriberData } from "./userDataLayers.js";

export const getUsers = async (req, res) => {
    try{
    const data = await getUsersData()
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }
}
export const addNewSubscriber = async (req, res) => {
  try{
    const data = await addNewSubscriberData(req.body.subscriber, req.body.userId);
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }

}
export const removeSubscriber = async (req, res) => {
   try{
    const data = await removeSubscriberData(req.body.index, req.body.userId);
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }

}
export const becomeFollower = async (req, res) => {
  try{
    const data = await becomeFollowerData(req.body.userId);
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }

}
export const unFollow = async (req, res) => {
  try{
    const data = await unFollowData(req.body.userId);
    res.json({ status: 'success', data })}
    catch(error){
        res.status(400).json({ status: "error", message: error.message });
    }

}

