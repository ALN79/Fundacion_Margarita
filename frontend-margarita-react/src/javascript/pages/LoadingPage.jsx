import React from 'react'

export function LoadingPage() {
    return (
        <div>
            <main className="bg-slate-300">
                <div className="flex flex-col justify-center items-center rounded-full h-screen w-screen">
                    <img src="img/loadingImage.png" alt="" width="400" height="400" className="animate-spin" />
                    <h2 className='text-3xl text-white'>Cargando...</h2>
                </div>
            </main>
        </div>
    )
}
