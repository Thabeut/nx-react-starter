import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initializeFlags } from '../../data/featureFlagSlice';

const FeatureFlagsInitializer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // const { data } = await axios.get(`${BASE_URL}/_/${subdomain}/config`);
        // const flags = data?.data?.flags;
        const flags = {
          dashboard: true,
        };
        dispatch(initializeFlags(flags));
      } catch (error) {
        console.error('Failed to initialize flags:', error);
      }
    };

    initializeApp();
  }, []);

  return <>{children}</>;
};
export default FeatureFlagsInitializer;
