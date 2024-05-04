"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/firebase"; // Adjust this path as necessary
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const SignInComponent = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isClient, setIsClient] = useState(false);

    const router = useRouter(); // Initialize the router

    useEffect(() => {
        setIsClient(true); // Indicates component is mounted and client-side
    }, []);

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isClient) return; // Guard clause to ensure client-side execution

        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        setLoading(true);
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Signed in:', userCredential.user);
            router.push('/dashboard'); // Redirect to the dashboard route
        } catch (error) {
            console.error(error);
            setError('Login failed: ' + error);
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async () => {
        const email = (document.getElementsByName('email')[0] as HTMLInputElement).value;
        const password = (document.getElementsByName('password')[0] as HTMLInputElement).value;

        if (!isClient) return; // Ensure this runs client-side only

        setLoading(true);
        setError('');

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log('User created:', userCredential.user);
            router.push('/dashboard'); // Optionally redirect after sign up
        } catch (error) {
            console.error(error);
            setError('Signup failed: ' + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center mt-24">
            <form onSubmit={handleSignIn} className="grid grid-cols-1 gap-2 w-[350px] min-w-fit items-center justify-center shadow-lg p-6 rounded-md">
                <h1 className="text-center font-bold mb-3">Sign In</h1>
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
                <input 
                    className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ease-in-out"
                    type="email" 
                    name="email" 
                    placeholder='Email' 
                    required 
                />
                <input 
                    className="mb-2 p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition ease-in-out"
                    type="password" 
                    name="password" 
                    placeholder='Password' 
                    required
                />
                <button type='submit' className="block w-full text-center text-white py-3 rounded-full mb-2 shadow-lg bg-orange-500 hover:bg-orange-600 transition ease-in-out">Log In</button>
                <button onClick={handleSignUp} type="button" className='block w-full text-center text-orange-500 py-3 rounded-full mb-2 shadow-lg bg-white border border-orange-500 transition ease-in-out'>Sign Up</button>
                <p className='text-center'>{loading ? 'Processing...' : ''}</p>
            </form>
        </div>
    );
}

export default SignInComponent;
