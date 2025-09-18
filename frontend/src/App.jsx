import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import CreatedJobList from './components/CreatedJobList';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdJobs, setCreatedJobs] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleJobCreated = (newJob) => {
    setCreatedJobs((prev) => [...prev, newJob]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar onOpenModal={handleOpenModal} />
      {isModalOpen && (
        <CreateJob onClose={handleCloseModal} onJobCreated={handleJobCreated} />
      )}
      <SearchFilter />

      <JobList />

      <CreatedJobList createdJobs={createdJobs} />
    </div>
  );
}

export default App;
