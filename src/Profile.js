import React, { useState } from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const initialProfile = {
    name: "John Doe",
    location: "New York, USA",
    skills: ["JavaScript", "React", "Node.js"],
    connections: 182,
    followers: 2000,
    bio: "A passionate developer and tech enthusiast who loves building innovative solutions.",
    email: "johndoe@example.com",
    website: "https://www.johndoewebsite.com",
    certificates: [
      { title: "Certified JavaScript Developer", provider: "Codecademy", year: 2022 },
      { title: "React Professional Certificate", provider: "Coursera", year: 2023 },
    ],
    workExperience: [
      {
        role: "Frontend Developer",
        company: "Tech Innovators Inc.",
        duration: "Jan 2021 - Present",
        description: "Developed responsive web applications and collaborated with cross-functional teams.",
      },
      {
        role: "Web Developer Intern",
        company: "Startup Hub",
        duration: "Jun 2020 - Dec 2020",
        description: "Built and optimized landing pages, improving conversion rates by 15%.",
      },
    ],
    resources: {
      idea: { available: true, description: "A groundbreaking idea in AI-driven automation." },
      team: { available: false, description: "" },
      investment: { available: false, description: "" },
      mentorship: { available: true, description: "Guidance from seasoned industry experts." },
      labour: { available: true, description: "Access to skilled freelance developers." },
    },
    cvLink: "/john-doe-cv.pdf",
  };

  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleArrayChange = (arrayName, index, key, value) => {
    const updatedArray = [...profile[arrayName]];
    updatedArray[index][key] = value;
    setProfile({ ...profile, [arrayName]: updatedArray });
  };

  const addNewItem = (arrayName, newItem) => {
    setProfile({ ...profile, [arrayName]: [...profile[arrayName], newItem] });
  };

  const handleResourceChange = (key, field, value) => {
    setProfile({
      ...profile,
      resources: {
        ...profile.resources,
        [key]: { ...profile.resources[key], [field]: value },
      },
    });
  };

  const saveChanges = () => {
    setIsEditing(false);
    console.log("Saved profile:", profile);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="bg-white shadow-md rounded-lg overflow-hidden mx-4 md:mx-auto md:max-w-4xl">
          {/* Profile Header */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/profile-user.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="text-3xl font-semibold mt-4 bg-transparent text-center text-white outline-none border-b-2 border-white"
              />
            ) : (
              <h1 className="text-3xl font-semibold mt-4">{profile.name}</h1>
            )}
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleInputChange}
                className="text-sm text-center text-gray-100 bg-transparent outline-none border-b border-white mt-1"
              />
            ) : (
              <p className="text-sm text-gray-100">{profile.location}</p>
            )}
          </div>

          {/* Profile Details */}
          <div className="p-8">
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Skills Section */}
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
    <ul className="space-y-2">
      {profile.skills.map((skill, index) => (
        <li key={index}>
          {isEditing ? (
            <input
              type="text"
              value={skill}
              onChange={(e) =>
                handleArrayChange("skills", index, null, e.target.value)
              }
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
            />
          ) : (
            <span className="text-gray-700">{skill}</span>
          )}
        </li>
      ))}
      {isEditing && (
        <button
          onClick={() => addNewItem("skills", "")}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800 underline"
        >
          Add Skill
        </button>
      )}
    </ul>
  </div>

  {/* Statistics Section */}
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h2>
    <p className="text-gray-700">
      <strong>Connections:</strong> {profile.connections}
    </p>
    <p className="text-gray-700">
      <strong>Followers:</strong> {profile.followers}
    </p>
  </div>
</div>


            {/* Bio Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Bio</h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                ></textarea>
              ) : (
                <p className="text-gray-700">{profile.bio}</p>
              )}
            </div>
           
            {/* Certificates Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Certificates</h2>
              {profile.certificates.map((cert, index) => (
                <div key={index} className="mb-4">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={cert.title}
                        placeholder="Certificate Title"
                        onChange={(e) =>
                          handleArrayChange("certificates", index, "title", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-2"
                      />
                      <input
                        type="text"
                        value={cert.provider}
                        placeholder="Provider"
                        onChange={(e) =>
                          handleArrayChange("certificates", index, "provider", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-2"
                      />
                      <input
                        type="number"
                        value={cert.year}
                        placeholder="Year"
                        onChange={(e) =>
                          handleArrayChange("certificates", index, "year", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                      />
                    </>
                  ) : (
                    <p className="text-gray-700">
                      {cert.title} - {cert.provider} ({cert.year})
                    </p>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() =>
                    addNewItem("certificates", { title: "", provider: "", year: "" })
                  }
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Add Certificate
                </button>
              )}
            </div>

            {/* Work Experience Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Work Experience</h2>
              {profile.workExperience.map((job, index) => (
                <div key={index} className="mb-4">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={job.role}
                        placeholder="Role"
                        onChange={(e) =>
                          handleArrayChange("workExperience", index, "role", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-2"
                      />
                      <input
                        type="text"
                        value={job.company}
                        placeholder="Company"
                        onChange={(e) =>
                          handleArrayChange("workExperience", index, "company", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-2"
                      />
                      <input
                        type="text"
                        value={job.duration}
                        placeholder="Duration"
                        onChange={(e) =>
                          handleArrayChange("workExperience", index, "duration", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-2"
                      />
                      <textarea
                        value={job.description}
                        placeholder="Description"
                        onChange={(e) =>
                          handleArrayChange("workExperience", index, "description", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                      ></textarea>
                    </>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold">{job.role} at {job.company}</h3>
                      <p className="text-gray-700">{job.duration}</p>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() =>
                    addNewItem("workExperience", { role: "", company: "", duration: "", description: "" })
                  }
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Add Experience
                </button>
              )}
            </div>

            {/* Resources Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Resources</h2>
              {Object.entries(profile.resources).map(([key, resource]) => (
                <div key={key} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 capitalize">{key}</h3>
                  {isEditing ? (
                    <>
                      <label className="flex items-center space-x-2">
                        <span className="text-gray-700">Available:</span>
                        <input
                          type="checkbox"
                          checked={resource.available}
                          onChange={(e) =>
                            handleResourceChange(key, "available", e.target.checked)
                          }
                          className="form-checkbox"
                        />
                      </label>
                      <textarea
                        value={resource.description}
                        placeholder="Description"
                        onChange={(e) =>
                          handleResourceChange(key, "description", e.target.value)
                        }
                        className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mt-2"
                      ></textarea>
                    </>
                  ) : (
                    <p className="text-gray-700">
                      <strong>Status:</strong> {resource.available ? "Available" : "Not Available"}
                      <br />
                      {resource.description && (
                        <>
                          <strong>Description:</strong> {resource.description}
                        </>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
              {isEditing ? (
                <>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-2 mb-2"
                  />
                  <input
                    type="url"
                    name="website"
                    value={profile.website}
                    onChange={handleInputChange}
                    placeholder="Website"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                  />
                </>
              ) : (
                <>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {profile.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Website:</strong> <a href={profile.website} className="text-blue-600 hover:text-blue-800">{profile.website}</a>
                  </p>
                </>
              )}
            </div>

           {/* CV Section */}
{/* CV Section */}
<div
  className="mb-8 p-4 rounded-md border border-gray-300"
  style={{ backgroundColor: "#E3F2FD" }} // Light blue background
>
  <h2 className="text-xl font-semibold text-gray-800 mb-4">CV</h2>
  {isEditing ? (
    <input
      type="url"
      name="cvLink"
      value={profile.cvLink}
      onChange={handleInputChange}
      placeholder="Add link to CV"
      className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
    />
  ) : (
    <a
      href={profile.cvLink}
      className="text-blue-600 hover:text-blue-800"
      download
    >
      Download CV
    </a>
  )}
</div>


            {/* Buttons */}
            <div className="mt-8 flex justify-end space-x-4">
              {isEditing ? (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveChanges}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
