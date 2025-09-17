const express = require('express');
const router = express.Router();
const {saveDetails, getDetails} = require("../controller/portalController");

router.post('/',saveDetails);

router.get('/getDetails',getDetails)

module.exports = router;