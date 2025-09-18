import React from "react";
import "../css/joblist.css";

const CreatedJobList = ({ createdJobs }) => {
    return (
        <div className="job-list-container">
            <div className="jobs-grid">
                {createdJobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <h5 className="title">{job.title}</h5>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Type:</strong> {job.jobtype}</p>
                        <p><strong>Salary:</strong> ₹{job.minSalary} - ₹{job.maxSalary}</p>
                        <p><strong>Deadline:</strong> {job.deadline}</p>
                        <p>{job.description}</p>
                        <button className="apply-btn">Apply now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreatedJobList;
