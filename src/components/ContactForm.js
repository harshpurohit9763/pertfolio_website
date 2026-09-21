import React, { useState } from 'react';

// The mailto logic and form state live here once and get reused by both the
// desktop and mobile Contact views — only the CSS classes differ, passed in
// via `classes` (each view supplies its own module.css / global class names).
function ContactForm({ classes = {} }) {
  const {
    form: formClass = 'contact-form',
    row: rowClass = 'contact-form-row',
    input: inputClass,
    button: buttonClass = 'btn btn-primary',
  } = classes;

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:Harshpurohit1706@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <div className={rowClass}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </div>
      <textarea
        name="message"
        placeholder="What's on your mind?"
        rows="5"
        value={form.message}
        onChange={handleChange}
        className={inputClass}
        required
      />
      <button type="submit" className={buttonClass}>Send Message</button>
    </form>
  );
}

export default ContactForm;