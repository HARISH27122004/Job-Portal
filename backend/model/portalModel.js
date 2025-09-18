const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'enter your job title']
  },
  company: {
    type: String,
    required: [true, 'enter your company name']
  },
  location: {
    type: String,
    required: [true, 'enter your location']
  },
  jobtype: {
    type: String,
    enum: ["FullTime", "PartTime", "Contract", "Internship"]
  },
  minSalary: {
    type: String,
    required: [true, 'enter your minimum salary']
  },
  maxSalary: {
    type: String,
    required: [true, 'enter your maximum salary']
  },
  deadline: {
    type: Date,
    required: [true, 'enter date']
  },
  description: {
    type: String,
    required: [true, 'enter job description']
  }
},
  {
    timestamps: true,
  }
)

const details = mongoose.model("Details", jobSchema)
module.exports = { details }