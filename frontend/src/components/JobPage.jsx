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

