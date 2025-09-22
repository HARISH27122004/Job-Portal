import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import JobList from './JobList';
import jobs from '../mockjobs';

const JobsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredJobs = searchTerm
        ? jobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.company.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : jobs;

    return (
        <div>
            <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <JobList jobs={filteredJobs} />
        </div>
    );
};

export default JobsPage;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CreatedJobList from "./CreatedJobList";
// import CreateJob from "./CreateJob";

// const JobsPage = () => {
//   const [createdJobs, setCreatedJobs] = useState([]);
//   const [showCreateModal, setShowCreateModal] = useState(false);

//   // Fetch jobs once on mount
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get("http://localhost:7070/details");
//         setCreatedJobs(res.data);
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//       }
//     };
//     fetchJobs();
//   }, []);

//   // Add new job without duplication
//   const handleJobCreated = (newJob) => {
//     setCreatedJobs((prevJobs) => {
//       const alreadyExists = prevJobs.some(
//         (job) =>
//           job._id === newJob._id || // MongoDB style ID check
//           (job.title === newJob.title && job.company === newJob.company)
//       );
//       if (alreadyExists) return prevJobs; // skip duplicate
//       return [...prevJobs, newJob];
//     });
//   };

//   return (
//     <div>
//       <h2>Available Jobs</h2>
//       <button onClick={() => setShowCreateModal(true)}>+ Create Job</button>

//       {/* Job list */}
//       <CreatedJobList createdJobs={createdJobs} />

//       {/* Create Job Modal */}
//       {showCreateModal && (
//         <CreateJob
//           onClose={() => setShowCreateModal(false)}
//           onJobCreated={handleJobCreated}
//         />
//       )}
//     </div>
//   );
// };

// export default JobsPage;
