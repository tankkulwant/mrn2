import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CompleteProfile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompleteProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || '';
  const displayName = location.state?.displayName || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: displayName,
    phoneNumber: '',
    jobTitle: '',
    companyName: '',
    location: '',
    preferences: {
      interestedInStartup: false,
      industry: '',
      stage: '',
    },
  });
  
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [loading, setLoading] = useState(false); // Added loading state

  const updateFormData = (newData) => {
    setFormData((prevState) => ({ ...prevState, ...newData }));
  };

  const goNext = () => setStep(step + 1);
  const goBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    setLoading(true); // Show loading state
    try {
      const response = await fetch('http://localhost:5000/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, ...formData }),
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Profile saved successfully!', { autoClose: 3000 });
        setTimeout(() => navigate('/'), 3000);
      } else {
        toast.error('Error saving profile. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('Network error. Please try again.', { autoClose: 3000 });
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const validateStep = () => {
    // Enhanced validation
    if (step === 1 && formData.name && formData.phoneNumber) {
      setIsNextDisabled(false);
    } else if (step === 2 && formData.jobTitle) {
      setIsNextDisabled(false);
    } else if (step === 3 && formData.location) {
      setIsNextDisabled(false);
    } else if (step === 4) {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }
  };

  useEffect(() => {
    validateStep();
  }, [formData, step]);

  const renderStep = () => {
    switch (step) {
      case 1:
  return (
    <div>
      <h2>Basic Information</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => updateFormData({ name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        disabled
      />
      <input
        type="tel"
        placeholder="Phone Number (with country code)"
        value={formData.phoneNumber}
        onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
      />
      <div className="button-container">
        <button disabled={step === 1} className="back" onClick={goBack}>Back</button>
        <button disabled={isNextDisabled} onClick={goNext}>Next</button>
      </div>
    </div>
  );

        case 2:
            return (
              <div>
                <h2>Professional Information</h2>
                <input
                  type="text"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={(e) => updateFormData({ jobTitle: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Company Name (optional)"
                  value={formData.companyName}
                  onChange={(e) => updateFormData({ companyName: e.target.value })}
                />
                <input
                  type="url"
                  placeholder="Website (optional)"
                  value={formData.website}
                  onChange={(e) => updateFormData({ website: e.target.value })}
                />
                <input
                  type="url"
                  placeholder="LinkedIn Profile (optional)"
                  value={formData.linkedInProfile}
                  onChange={(e) => updateFormData({ linkedInProfile: e.target.value })}
                />
                <select
                  value={formData.yearsOfExperience}
                  onChange={(e) => updateFormData({ yearsOfExperience: e.target.value })}
                >
                  <option value="">Years of Experience</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="3-5">3-5 Years</option>
                  <option value="6-10">6-10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
                <div className="button-container">
                  <button className="back" onClick={goBack}>Back</button>
                  <button disabled={isNextDisabled} onClick={goNext}>Next</button>
                </div>
              </div>
            );
            case 3:
                return (
                  <div>
                    <h2>Location Information</h2>
                    {/* Replace PlacesAutocomplete with a simple text input */}
                    <input
                      type="text"
                      placeholder="Enter your location"
                      value={formData.location}
                      onChange={(e) => updateFormData({ location: e.target.value })}
                    />
                    <div className="button-container">
                      <button className="back" onClick={goBack}>Back</button>
                      <button disabled={isNextDisabled} onClick={goNext}>Next</button>
                    </div>
                  </div>
                );
          
                case 4:
                    return (
                      
                      <div className="startup-preferences-container">
                        <h2 className="section-title">Startup Preferences</h2>
                        
                        <div className="startup-radio-buttons">
                          <label className="startup-radio-label">
                            <input
                              type="radio"
                              name="startupInterest"
                              checked={formData.preferences.interestedInStartup === true}
                              onChange={() => updateFormData({ preferences: { ...formData.preferences, interestedInStartup: true } })}
                            />
                            <span>Yes, I'm interested in a startup.</span>
                          </label>
                          <label className="startup-radio-label">
                            <input
                              type="radio"
                              name="startupInterest"
                              checked={formData.preferences.interestedInStartup === false}
                              onChange={() => updateFormData({ preferences: { ...formData.preferences, interestedInStartup: false } })}
                            />
                            <span>No, I'm not interested in a startup.</span>
                          </label>
                        </div>
                        
                        {formData.preferences.interestedInStartup && (
                          <div className="startup-dropdowns">
                            <div className="dropdown-container">
                              <label htmlFor="industry">Industry Preference</label>
                              <select
                                id="industry"
                                value={formData.preferences.industry}
                                onChange={(e) => updateFormData({ preferences: { ...formData.preferences, industry: e.target.value } })}
                              >
                                <option value="">Select an Industry</option>
                                <option value="Tech">Tech</option>
                                <option value="Finance">Finance</option>
                                <option value="Health">Health</option>
                              </select>
                            </div>
                  
                            <div className="dropdown-container">
                              <label htmlFor="stage">Startup Stage</label>
                              <select
                                id="stage"
                                value={formData.preferences.stage}
                                onChange={(e) => updateFormData({ preferences: { ...formData.preferences, stage: e.target.value } })}
                              >
                                <option value="">Select Startup Stage</option>
                                <option value="Idea">Idea</option>
                                <option value="Early Stage">Early Stage</option>
                                <option value="Growth">Growth</option>
                              </select>
                            </div>
                          </div>
                        )}
                  
                        <div className="button-container">
                          <button className="back-button" onClick={goBack}>Back</button>
                          <button className="next-button" disabled={isNextDisabled} onClick={goNext}>Next</button>
                        </div>
                      </div>
                    );
                  
          

        case 5:
  return (
    <div>
      <h2>Confirm Your Information</h2>
      <div>
        <h3>Basic Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
        <button onClick={() => setStep(1)}>Edit</button>
      </div>

      <div>
        <h3>Professional Information</h3>
        <p>Job Title: {formData.jobTitle}</p>
        <p>Company: {formData.companyName}</p>
        <p>Website: {formData.website}</p>
        <p>LinkedIn: {formData.linkedInProfile}</p>
        <p>Experience: {formData.yearsOfExperience}</p>
        <button onClick={() => setStep(2)}>Edit</button>
      </div>

      <div>
        <h3>Location Information</h3>
        <p>Location: {formData.location}</p>
        <button onClick={() => setStep(3)}>Edit</button>
      </div>

      <div>
        <h3>Startup Preferences</h3>
        <p>Interested in Startup: {formData.preferences.interestedInStartup ? 'Yes' : 'No'}</p>
        {formData.preferences.interestedInStartup && (
          <>
            <p>Industry: {formData.preferences.industry}</p>
            <p>Stage: {formData.preferences.stage}</p>
          </>
        )}
        <button onClick={() => setStep(4)}>Edit</button>
      </div>

      <button onClick={handleSubmit}>Confirm and Create Profile</button>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="step-indicator">Step {step} of 4</div>
      {renderStep()}
      <ToastContainer />
    </div>
  );
};

export default CompleteProfile;
