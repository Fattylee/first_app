const express = require ('express');
const router = express. Router();

router. get('/', (req, res, next)=>{
res. render('index', {header:"This is my dynamic header", p: 'this is my dynamic paragraph' });
});

module. exports = router ;