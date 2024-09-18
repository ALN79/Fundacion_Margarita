import { Header } from '../components/Header.jsx';

export function LandingPage() {

    return (
        <div className='bg-custom-bg-2 bg-cover h-screen'>
            <Header />,
            <main className="flex justify-center">
                <p className="text-black text-5xl mt-72">Contenido Principal</p>
            </main>
        </div>
    );
}
