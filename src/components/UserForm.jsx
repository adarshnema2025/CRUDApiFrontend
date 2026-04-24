import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData = null, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ name: '', email: '', age: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        if (!initialData) {
            setFormData({ name: '', email: '', age: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 glass p-8 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {initialData ? 'Edit User' : 'Add New User'}
            </h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="25"
                        required
                    />
                </div>
            </div>
            <div className="flex gap-3 pt-2">
                <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl shadow-lg shadow-primary/20"
                >
                    {initialData ? 'Update User' : 'Create User'}
                </button>
                {initialData && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-6 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-3 rounded-xl"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default UserForm;
