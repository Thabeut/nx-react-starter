import React from 'react';

import { SharedError } from '@confirma/shared/ui';

import { ADMIN_PREFIX } from '@confirma/shared/utils';

const SharedErrorWrapper: React.FC = () => (
  <SharedError message="404 - Page not found" redirectLink={ADMIN_PREFIX} />
);

export default SharedErrorWrapper;
