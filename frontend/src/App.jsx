import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import JobList from './components/JobList';
import CreateJob from './components/CreateJob';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey,setRefreshKey] = useState(0);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleJobCreated = () => {
    setRefreshKey(prev => prev+1);
  }
  return (
    <div>
      <Navbar onOpenModal={handleOpenModal} />
      {isModalOpen && <CreateJob onClose={handleCloseModal} onJobCreated={handleJobCreated} />}
      <SearchFilter />
      <JobList refresh={refreshKey}/>
    </div>
  );
}

export default App;

