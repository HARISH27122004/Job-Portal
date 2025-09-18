import React from "react";
import "../css/joblist.css";

const CreatedJobList = ({ createdJobs }) => {
  return (
    <div className="job-list">
      {createdJobs.map((job, index) => (
        <div key={index} className="job-card created">
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.jobtype}</p>
          <p><strong>Salary:</strong> ₹{job.minSalary} - ₹{job.maxSalary}</p>
          <p><strong>Deadline:</strong> {job.deadline}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CreatedJobList;
