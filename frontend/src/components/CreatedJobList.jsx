import React from "react";
import "../css/Joblist.css";

const CreatedJobList = ({ createdJobs }) => {
    return (
        <div className="job-list-container">
            <div className="jobs-grid">
                {createdJobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <h5 className="title">{job.title}</h5>
                        <p className="forNewJob"><strong>Company:</strong> {job.company}</p>
                        <p className="forNewJob"><strong>Location:</strong> {job.location}</p>
                        <p className="forNewJob"><strong>Type:</strong> {job.jobtype}</p>
                        <p className="forNewJob"><strong>Salary:</strong> ₹{job.minSalary} - ₹{job.maxSalary}</p>
                        <p className="forNewJob"><strong>Deadline:</strong> {job.deadline}</p>
                        <p className="forNewJob">{job.description}</p>
                        <button className="apply-btn">Apply now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreatedJobList;
