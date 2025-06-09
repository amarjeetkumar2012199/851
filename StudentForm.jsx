import React, { useRef, useState } from 'react';

const StudentForm = () => {
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-xl space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Student Admission Form</h2>
      <input className="input" type="text" placeholder="Student's Name" required />
      <input className="input" type="text" placeholder="Father's Name" required />
      <input className="input" type="tel" placeholder="Mobile Number" required />
      <input className="input" type="date" placeholder="Date of Birth" required />
      <input className="input" type="text" placeholder="Receipt Number" />
      <input className="input" type="date" placeholder="Admission Date" required />
      <select className="input" required>
        <option value="">Select Batch</option>
        <option>Batch A</option>
        <option>Batch B</option>
      </select>
      <input className="input" type="number" placeholder="Fee (Optional)" />
      <textarea className="input" placeholder="Notes (Optional)"></textarea>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        className="input"
      />
      {photo && <img src={photo} alt="Preview" className="w-32 h-32 object-cover rounded-full mx-auto" />}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
