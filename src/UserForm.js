import React, { useState } from "react";

const UserForm = () => {
    const INITIAL_STATE = {
        username: '',
        email: '',
        //password: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`created ${formData.username}`);
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />
        <button>enter</button>
        </form>
    )
}

export default UserForm;