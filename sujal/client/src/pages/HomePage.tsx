import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StockCard from '../components/StockCard';
import { GET_STOCKS } from '../graphql';
import { useQuery } from '@apollo/client';
import financialDataSVG from '../assets/svgs/financial_data.svg';
import programmingSVG from '../assets/svgs/programming.svg';

const HomePage = () => {
    const { data } = useQuery(GET_STOCKS, { variables: { limit: 3, random: true } });

    useEffect(() => {
        document.title = 'Home | AureX';
    }, []);

    return (
        <div className='dark:bg-darkBg flex flex-col min-h-screen items-center justify-center overflow-hidden'>
            <div className='flex justify-center min-h-screen items-center overflow-hidden p-10'>
                <section className='text-gray-600 body-font'>
                    <div className='container mx-auto flex md:px-16 py-24 lg:flex-row flex-col items-center'>
                        <div className='lg:flex-grow lg:w-1/2 pr-0 lg:pr-24 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center'>
                            <h1 className='title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-white'>AureX</h1>
                            <p className='title-font sm:text-2xl text-xl mb-4 text-gray-700 dark:text-gray-300 whitespace-nowrap'>
                                A dummy stock trading platform
                            </p>
                            <p className='mb-8 sm:text-sm lg:text-lg leading-relaxed dark:text-gray-300'>
                                Built as a portfolio project. Not meant to be a real application. <br />
                                Stock price fluctuations are randomly generated but real data is fetched peridoically.
                                <br />
                                <br />
                                <span className='font-bold'>No real money is involved.</span>
                            </p>
                            <div className='flex justify-center flex-nowrap'>
                                <Link
                                    to='/market'
                                    className='max-h-16 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded whitespace-nowrap'>
                                    Browse Market
                                </Link>
                                <Link
                                    to='/auth'
                                    className='ml-4 max-h-16 text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded whitespace-nowrap'>
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className='xl:max-w-2xl xl:w-full lg:w-2/3 sm:w-4/6 w-full'>
                            <img className='object-cover object-center rounded' alt='hero' src={financialDataSVG} />
                        </div>
                    </div>
                </section>
            </div>
            <section className='text-gray-600 body-font w-full flex flex-col justify-center'>
                <h1 className='title-font text-center sm:text-2xl text-xl font-medium text-gray-900 dark:text-white'>Today's Featured Picks</h1>
                <div className='dark:bg-darkBg flex md:justify-center my-7 px-2 pb-4 overflow-x-scroll sm:overflow-hidden w-screen'>
                    {data?.searchStocks.map((stock: any) => {
                        return <StockCard key={stock.ticker} stock={stock} />;

                        //return <div key={stock.ticker}>{JSON.stringify(stock)}</div>;
                    })}
                </div>
            </section>
            <section className='text-gray-600 body-font p-10'>
                <div className='container mx-auto flex md:px-16 pb-24 lg:flex-row flex-col items-center'>
                    <div className='lg:flex-grow lg:w-1/2 pr-0 lg:pr-24 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center'>
                        <h1 className='title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900 dark:text-white'>What is AureX?</h1>

                        <p className='mb-8 text-md lg:text-lg leading-relaxed dark:text-gray-300'>
                            AureX is a full-stack portfolio project. The technologies used were the MERN stack, along with TypeScript, TailwindCSS, SASS,
                            Redux, Socket.io, JWT, and Apollo GraphQL.
                        </p>
                        <div className='flex justify-center flex-nowrap'>

                        </div>
                    </div>
                    <div className='xl:max-w-xl xl:w-full lg:w-2/3 sm:w-4/6 w-full p-12'>
                        <img className='object-cover object-center rounded' alt='hero' src={programmingSVG} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
