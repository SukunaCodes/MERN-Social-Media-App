import User from '../models/user.js';

/*READ*/
export const getUsers = async (req, res) => {
  try{
      const {id} = req.params;
      const user = await User.findById(id);
  } catch (error) {
      res.status(404).json({message: error.message});
  }
};
export const getUserFriends = async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, picturePath, occupation, location}) => {
                return {_id, firstName, lastName, picturePath, occupation, location};
            }
        );
        res.status(200).json(formattedFriends);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

/*UPDATE*/
