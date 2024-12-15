import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { HeroSection } from '../components/home/hero-section';
import { LandList } from '../components/home/land-list';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Login from './login';
import { getLandDataAction } from '@/service/action/common';

export default function HomePage() {
  const { user } = useSelector((state: RootState) => state.authenticationReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [totalPages, setTotalPages] = useState(1); // To handle the "Next" button state

  // Function to fetch land data
  const getList = (tempPage: number = page) => {
    const params = new URLSearchParams({ page: tempPage.toString() });
    if (search) params.append('search', search);

    dispatch(
      getLandDataAction({
        userType: user?.role?.toLowerCase() || '',
        params: params.toString(),
        callback: (data: { totalPages: number }) => setTotalPages(data.totalPages),
      })
    );
  };

  useEffect(() => {
    if (user && !user.approved) {
      router.push('/user'); // Redirect unapproved users
    }
  }, [user, router]);

  useEffect(() => {
    if (user && user.approved) {
      getList(); // Fetch list when user is approved
    }
  }, [user]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) return; // Prevent invalid page changes
    setPage(newPage);
    getList(newPage);
  };

  // Redirect to login if the user is not approved
  if (!user?.approved) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-green-100">
      <Header />
      <main className="container mx-auto px-6 py-8 flex-grow">
        <HeroSection search={search} getList={getList} setSearch={setSearch} setPage={setPage} />
        <LandList user={user} />
        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 0}
            className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-gray-700">Page {page + 1} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page + 1 >= totalPages}
            className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
