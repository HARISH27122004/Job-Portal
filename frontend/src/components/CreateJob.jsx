import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../css/createjob.css';

const CreateJob = ({ onClose, onJobCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobtype: 'FullTime',
    minSalary: '',
    maxSalary: '',
    deadline: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:7070/details', formData);
      console.log('Job saved:', res.data);
      onJobCreated(res.data);
      onClose();
    } catch (error) {
      console.error('Error saving job:', error);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className='heading'>Create Job Opening</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <div className="form-row">
            <div className="form-group">
              <label className='forLabel'>Job Title</label>
              <input name='title' type="text" placeholder="Full Stack Developer" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='forLabel'>Company Name</label>
              <input name='company' type="text" placeholder="Amazon, Microsoft, Swiggy" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className='forLabel'>Location</label>
              <input name="location" type="text" placeholder="Choose Preferred Location" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className='forLabel'>Job Type</label>
              <select name='jobtype' onChange={handleChange}>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className='forLabel'>Salary Range</label>
              <div className='salary-inputs'>
                <input name="minSalary" type="text" placeholder="₹0" onChange={handleChange} />
                <input name="maxSalary" type="text" placeholder="₹12,00,000" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className='forLabel'>Application Deadline</label>
              <input name='deadline' type='date' onChange={handleChange} />
            </div>
          </div>

          <div className="form-group full-width">
            <label className='forLabel'>Job Description</label>
            <textarea name='description' placeholder="Please share a description to let the candidate know more about the job role" onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-save">Save Draft</button>
          <button className="btn btn-publish" onClick={handleSubmit}>Publish &raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
