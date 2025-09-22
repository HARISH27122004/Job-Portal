import React, { useState } from 'react';
import axios from 'axios';
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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({
      ...prev,
      [e.target.name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'Kindly fill this field';
      }
    });
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
              <input
                name='title'
                type="text"
                placeholder="Full Stack Developer"
                onChange={handleChange}
                className={errors.title ? 'input-error' : ''}
              />
              {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label className='forLabel'>Company Name</label>
              <input
                name='company'
                type="text"
                placeholder="Amazon, Microsoft, Swiggy"
                onChange={handleChange}
                className={errors.company ? 'input-error' : ''}
              />
              {errors.company && <span className="error">{errors.company}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className='forLabel'>Location</label>
              <input
                name="location"
                type="text"
                placeholder="Choose Preferred Location"
                onChange={handleChange}
                className={errors.location ? 'input-error' : ''}
              />
              {errors.location && <span className="error">{errors.location}</span>}
            </div>

            <div className="form-group">
              <label className='forLabel'>Job Type</label>
              <select
                name='jobtype'
                onChange={handleChange}
                className='createJobDD'
              >
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
              {errors.jobtype && <span className="error">{errors.jobtype}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className='forLabel'>Salary Range</label>
              <div className='salary-inputs'>
                <div className='salary-input-group'>
                  <input
                    name="minSalary"
                    type="text"
                    placeholder="₹0"
                    onChange={handleChange}
                    className={errors.minSalary ? 'input-error' : ''}
                  />
                  {errors.minSalary && <span className="error">{errors.minSalary}</span>}
                </div>
                <div className='salary-input-group'>
                  <input
                    name="maxSalary"
                    type="text"
                    placeholder="₹12,00,000"
                    onChange={handleChange}
                    className={errors.maxSalary ? 'input-error' : ''}
                  />
                  {errors.maxSalary && <span className="error">{errors.maxSalary}</span>}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className='forLabel'>Application Deadline</label>
              <input
                name='deadline'
                type='date'
                onChange={handleChange}
                className={errors.deadline ? 'input-error' : ''}
              />
              {errors.deadline && <span className="error">{errors.deadline}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className='forLabel'>Job Description</label>
            <textarea
              name='description'
              placeholder="Please share a description to let the candidate know more about the job role"
              onChange={handleChange}
              className={errors.description ? 'input-error' : ''}
            ></textarea>
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-save">
            Save Draft
            <svg width="10" height="10" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 7.5L5 11.5L1 7.5M9 1.5L5 5.5L1 1.5" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn btn-publish" onClick={handleSubmit}>Publish
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1.5L11 5.5L7 9.5M1 1.5L5 5.5L1 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
