import type { NextPage } from 'next';
import FyloFooter from '../components/FyloFooter';
import FyloHeader from '../components/FyloHeader';
import FyloMain from '../components/FyloMain';

const Home: NextPage = () => {
  return (
    <div className='bg-mainBg'>
      <FyloHeader />
      <FyloMain />
      <FyloFooter />
    </div>
  );
};

export default Home;
