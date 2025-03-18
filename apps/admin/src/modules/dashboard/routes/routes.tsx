import { Fragment, lazy } from 'react';

import { IRouteItem } from '@confirma/layouts';
import { ADMIN_PREFIX, pageLoader } from '@confirma/shared/utils';

const routes: IRouteItem[] = [
  {
    path: `/${ADMIN_PREFIX}`,
    component: lazy(pageLoader(() => import('../views/Dashboard'))),
    guard: Fragment,
    layout: Fragment,
  },
];
export default routes;
