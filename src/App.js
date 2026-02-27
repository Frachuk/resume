import { useEffect, useState } from 'react';
import { About } from './views/components/About';
import { Footer } from './views/components/Footer';
import { Header } from './views/components/Header';
import { Resume } from './views/components/Resume';
import { Description } from './views/components/Description';

export const App = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/resumeData.json`);
        if (!response.ok) {
          throw new Error(`Failed to load resume data: ${response.status}`);
        }
        setResumeData(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  if (loading) {
    return <div className='App'>Loading...</div>;
  }

  if (error) {
    return <div className='App'>Something went wrong. Please refresh the page.</div>;
  }

  const { main: mainData, resume: resumeSectionData } = resumeData;

  return (
    <div className='App'>
      <Header />
      <Description data={mainData} />
      <About data={mainData} />
      <Resume data={resumeSectionData} />
      <Footer data={mainData} />
    </div>
  );
};
