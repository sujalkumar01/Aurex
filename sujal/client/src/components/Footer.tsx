import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='bg-gray-200 dark:bg-darkBg pt-6 pb-2 flex-shrink'>
            <div className='container px-8 sm:px-16 mx-auto'>
                <div className='flex justify-around'>
                    <div className='w-full -mx-6 lg:w-2/5'>
                        <div className='px-6'>
                            <div>
                                <Link to='/' className='text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'>
                                    AureX
                                </Link>
                            </div>

                            <div className='flex mt-4 -mx-2'>
                            
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-20'>
                            <h3 className='text-gray-700 uppercase dark:text-white'>Stack</h3>
                            <a
                                href='https://www.mongodb.com/mern-stack'
                                className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                                target='_blank'
                                rel='noopener noreferrer'>
                                MERN
                            </a>
                            <a
                                href='https://graphql.org/'
                                className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                                target='_blank'
                                rel='noopener noreferrer'>
                                GraphQL
                            </a>
                        </div>

                        <div>
                            <h3 className='text-gray-700 uppercase dark:text-white'>Portfolio</h3>
                            <a
                                
                                className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                                target='_blank'
                                rel='noopener noreferrer'>
                                GitHub
                            </a>
                            <a
                                href='https://roynulrohan.github.io/'
                                className='block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Personal Site
                            </a>
                        </div>
                    </div>
                </div>

                <hr className='h-px my-6 bg-gray-300 border-none dark:bg-gray-700' />

                <div>
                    <p className='text-center text-gray-800 dark:text-white'>© AureX {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
}
