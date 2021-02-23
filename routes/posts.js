const express = require('express');
const  router = express.Router();


// router.get('/',((req, res) => {
//     res.send('This Works')
// }));

router.get('/',getPosts);
router.post('/',createPost);



export  default  router;
