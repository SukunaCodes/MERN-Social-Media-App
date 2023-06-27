import express from 'express';
import {getUser, getUserFriends, addRemoveFriend} from '../middlewares/users.js';
import {verifyToken} from '../middlewares/auth.js';

const router = express.Router();

/*READ ROUTES*/
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

/*UPDATE ROUTES*/
router.patch('/:id/:friendID', verifyToken, addRemoveFriend);

export default router;
