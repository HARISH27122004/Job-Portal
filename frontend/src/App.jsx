import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import CreatedJobList from './components/CreatedJobList';
import { useState } from 'react';
import jobs from './mockjobs';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdJobs, setCreatedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleJobCreated = (newJob) => {
    setCreatedJobs((prev) => [...prev, newJob]);
    setIsModalOpen(false);
  };

  const allJobs = [...jobs];

  const filteredJobs = searchTerm
    ? allJobs.filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : allJobs;

  return (
    <div>
      <Navbar onOpenModal={handleOpenModal} />
      {isModalOpen && (
        <CreateJob onClose={handleCloseModal} onJobCreated={handleJobCreated} />
      )}

      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <JobList jobs={filteredJobs} />

      <CreatedJobList createdJobs={createdJobs} />
    </div>
  );
}

export default App;

