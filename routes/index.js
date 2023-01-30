const Router = require('express');
const router = new Router();
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/post', postRouter);

module.exports = router;