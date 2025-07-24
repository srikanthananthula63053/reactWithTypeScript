import React, { useState } from "react";
type Person = {
    name: string
}
function Events() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        // adding type

        const text = formData.get('text') as string
        const person: Person = { name: text }
        console.log(data);
    };

    return (
        <section>
            <h2>Event Examples</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"              // ✅ required for FormData
                    className="form-input mb-1"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="email"
                    name="email"            // ✅ required for FormData
                    className="form-input mb-1"
                    value={email}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default Events;
