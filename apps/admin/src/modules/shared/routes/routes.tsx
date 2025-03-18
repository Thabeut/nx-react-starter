import { Fragment, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { filterByFeatureFlag } from '@confirma/config';
import { Loader } from '@confirma/shared/ui';
import { useAppSelector } from '../data/store';
import sharedRoutes from './sharedRoutes';
import authRoutes from '../../auth/routes/routes';
import dashboardRoutes from '../../dashboard/routes/routes';
import comingSoonRoutes from '../../comingSoon/routes/routes';
import { IRouteItem } from '@confirma/layouts';

export const AppRoutes = () => {
  const { flags } = useAppSelector((state) => state.featureFlag);

  if (!flags) {
    return <Loader fullScreen />;
  }

  const routes = [
    ...authRoutes,
    ...dashboardRoutes,
    ...comingSoonRoutes,
    ...sharedRoutes,
  ];

  const filteredRoutes = filterByFeatureFlag(routes, flags);
  return (
    <Routes>
      {filteredRoutes.map((route: IRouteItem, index: number) => {
        const Component = route?.component || Fragment;
        const Layout = route?.layout || Fragment;
        const Guard = route?.guard || Fragment;

        return (
          <Route
            path={route.path}
            key={index}
            element={
              <Guard>
                <Layout>
                  <Suspense>
                    <Component />
                  </Suspense>
                </Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  );
};
