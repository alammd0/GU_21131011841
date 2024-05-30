import React, { useState } from 'react'

const NumberTypeForm = ({onSubmit}) => {

    const[numberType, setNumberType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(numberType);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Number Type:
                    <input
                        type="text"
                        value={numberType}
                        onChange={(e) => setNumberType(e.target.value)}
                        placeholder="Enter p, f, e, or r"
                    />
                </label>
                <button type="submit">Fetch</button>
            </form>
        </div>
    )
}

export default NumberTypeForm
