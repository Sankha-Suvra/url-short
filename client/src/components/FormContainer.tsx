import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  return <div className='container mx-auto p-2'>
    <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
        <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
            <h2 className='text-white text-4xl text-center pb-4'>URL Shortner</h2>
            <p className='text-white text-center pb-2 text-xl font-extralight'>Paste your untidy link to shorten it</p>
            <p className='text-white text-center pb-4 text-sm font-thin'>Free tool to shorten any link</p>

            <form action="">
                <div className='flex'>
                    <div className='relative w-full'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>urlshortner.link /</div>
                        <input type="text" placeholder='add your link' required className='block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' />
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>;
};

export default FormContainer;
