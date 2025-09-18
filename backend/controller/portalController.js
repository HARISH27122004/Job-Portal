const { details } = require("../model/portalModel");

const saveDetails = async (req, res) => {
    try {
        const detail = await details.create(req.body);
        res.status(200).json(detail);
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const getDetails = async (req, res) => {
    try {
        const detail = await details.find({})
        res.status(200).json(detail)
    }
    catch (e) {
        res.status(500).json({ message: e.message })
    }
}

module.exports = { saveDetails, getDetails }