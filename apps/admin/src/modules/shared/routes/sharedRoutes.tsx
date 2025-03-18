import { lazy } from 'react';
import { pageLoader } from '@confirma/shared/utils';
import { IRouteItem } from '@confirma/layouts';

const routes: IRouteItem[] = [
  {
    path: '*',
    component: lazy(
      pageLoader(() => import('../components/RedirectHome/RedirectHome'))
    ),
  },
];
export default routes;
