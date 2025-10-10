import React, { useState } from 'react';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('add-question');

    // States for Add Question
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState(0);

    // States for User Management
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', role: 'user' },
        { id: 2, name: 'Bob', role: 'admin' }
    ]);
    const [newUser, setNewUser] = useState({ name: '', role: 'user' });

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...options];
        updatedOptions[index] = value;
        setOptions(updatedOptions);
    };

    const handleAddQuestion = (e) => {
        e.preventDefault();
        const questionData = {
            question,
            options,
            correctOption
        };
        console.log('Question Submitted:', questionData);
        // TODO: Send to backend API
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOption(0);
    };

    const handleRoleChange = (id, newRole) => {
        const updated = users.map(user =>
            user.id === id ? { ...user, role: newRole } : user
        );
        setUsers(updated);
    };

    const handleAddUser = () => {
        if (!newUser.name.trim()) return;
        const id = users.length + 1;
        setUsers([...users, { id, ...newUser }]);
        setNewUser({ name: '', role: 'user' });
    };

    return (
        <div className='h-screen w-full bg-[#2a1e55] flex pt-25'>
            {/* Sidebar */}
            <aside className='h-full w-64 bg-[#241a42] p-4'>
                <div className='profile flex items-center mb-10'>
                    <div className="user-box uppercase font-bold text-2xl bg-purple-400 text-white h-12 w-12 flex items-center justify-center rounded-full">
                        P
                    </div>
                    <div className='admin-name text-white ml-4 text-xl font-semibold'>
                        ADMIN
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <button onClick={() => setActiveTab('add-question')} className='text-white text-lg py-2 hover:bg-purple-700 rounded  cursor-pointer'>
                        Add Questions
                    </button>
                    <button onClick={() => setActiveTab('manage-users')} className='text-white text-lg py-2 hover:bg-purple-700 rounded cursor-pointer'>
                        Manage Users
                    </button>
                    <button onClick={() => setActiveTab('settings')} className='text-white text-lg py-2 hover:bg-purple-700 rounded cursor-pointer'>
                        Settings
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className='flex-1 p-8 text-white overflow-auto'>
                {activeTab === 'add-question' && (
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Add New Question</h2>
                        <form onSubmit={handleAddQuestion} className='space-y-4'>
                            <div>
                                <label>Question:</label><br />
                                <textarea
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    rows={3}
                                    className='w-full p-2 text-white border-2 border-black rounded-2xl outline-none'
                                />
                            </div>
                            {options.map((opt, index) => (
                                <div key={index}>
                                    <label>Option {index + 1}:</label>
                                    <input
                                        type="text"
                                        value={opt}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        className='w-full p-2 text-white border-2 border-black rounded-2xl outline-none '
                                    />
                                </div>
                            ))}
                            <div>
                                <label>Correct Option (1-4):</label>
                                <input
                                    type="number"
                                    value={correctOption}
                                    onChange={(e) => setCorrectOption(parseInt(e.target.value))}
                                    className='w-full p-2 text-white border-2 border-black rounded-2xl outline-none '
                                    min={1}
                                    max={4}
                                />
                            </div>
                            <button type="submit" className='bg-purple-600 px-4 py-2 rounded hover:bg-purple-800'>
                                Submit Question
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === 'manage-users' && (
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>User Management</h2>

                        {/* Add New User */}
                        <div className='mb-6'>
                            <h3 className='text-lg mb-2'>Add New User</h3>
                            <input
                                type="text"
                                placeholder="Name"
                                value={newUser.name}
                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                className='p-2 mr-2 text-white'
                            />
                            <select
                                value={newUser.role}
                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                className='p-2 text-white'
                            >
                                <option className='text-black' value="user">User</option>
                                <option className='text-black' value="admin">Admin</option>
                            </select>
                            <button onClick={handleAddUser} className='ml-2 bg-purple-600 px-4 py-2 rounded hover:bg-purple-800'>
                                Add User
                            </button>
                        </div>

                        {/* Users Table */}
                        <table className='w-full text-left border-collapse border border-white '>
                            <thead>
                                <tr>
                                    <th className='border border-white px-4 py-2'>ID</th>
                                    <th className='border border-white px-4 py-2'>Name</th>
                                    <th className='border border-white px-4 py-2'>Role</th>
                                    <th className='border border-white px-4 py-2'>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td className='border border-white px-4 py-2'>{user.id}</td>
                                        <td className='border border-white px-4 py-2'>{user.name}</td>
                                        <td className='border border-white px-4 py-2'>{user.role}</td>
                                        <td className='border border-white px-4 py-2'>
                                            <select
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                className='text-white p-1'
                                            >
                                                <option className='text-black' value="user">User</option>
                                                <option className='text-black' value="admin">Admin</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Settings</h2>
                        <p>Settings page content will go here (e.g. password reset, theme, etc.)</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminPage;
