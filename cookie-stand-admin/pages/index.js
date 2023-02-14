import Head from '@/components/Head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// import Header from '@/components/Header';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth';
import CookieStandAdmin from '@/components/CookieStandAdmin';
import useResource from '@/hooks/useResource';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const {user, login} = useAuth();

    const {resources, deleteResource} = useResource();

    return (
        <>
            <div className='bg-white h-screen w-screen'>
                <Head/> {
                user ? <CookieStandAdmin resources={resources}
                    deleteResource={deleteResource}
                    user={user}/> : <LoginForm onLogin={login}/>
            }</div>
        </>
    )
}
