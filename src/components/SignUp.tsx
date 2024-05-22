// src/components/SignUp.tsx
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmationCode, setConfirmationCode] = useState('');
    const [isConfirmationCodeSent, setIsConfirmationCodeSent] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSignUp = async () => {
        try {
            await Auth.signUp({
                username,
                password,
                attributes: { email },
            });
            setIsConfirmationCodeSent(true);
            setError(null);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleConfirmSignUp = async () => {
        try {
            await Auth.confirmSignUp(username, confirmationCode);
            setError(null);
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {!isConfirmationCodeSent ? (
                <>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSignUp}>Sign Up</button>
                </>
            ) : (
                <>
                    <input type="text" placeholder="Confirmation Code" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} />
                    <button onClick={handleConfirmSignUp}>Confirm Sign Up</button>
                </>
            )}
        </div>
    );
};

export default SignUp;
