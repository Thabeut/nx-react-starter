import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dur from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import isToday from 'dayjs/plugin/isToday';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

import 'dayjs/locale/fr';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';

dayjs.extend(quarterOfYear);
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);
dayjs.extend(dur);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);

const currentDate = dayjs().format('YYYY-MM-DD');

const currentTimestamp = Date.now();

const currentWeek = dayjs()
  .startOf('week')
  .add(1, 'day')
  .format('YYYY-MM-DDTHH:mm:ss.sss[Z]');

const setDateFormatLocale = (currentLang: string) => {
  dayjs.locale(currentLang);
};

const formatDate = (
  date: Dayjs | string | number,
  format = 'YYYY-MM-DD'
): string => dayjs(date).format(format);

const fromNow = (date: Dayjs | string | number): string =>
  dayjs(date).fromNow();

const startOfWeek = (date: Dayjs) => {
  dayjs(date).startOf('week');
};

const formatCreatedAt = (date: Dayjs) => dayjs(date).format('MMM D, HH:mm');
const formatCreatedAtLongForm = (date: string, preposition: string) =>
  dayjs(date).format(`DD MMMM [${preposition}] HH:mm`);

export {
  currentDate,
  currentTimestamp,
  currentWeek,
  Dayjs,
  dayjs,
  formatCreatedAt,
  formatCreatedAtLongForm,
  formatDate,
  fromNow,
  setDateFormatLocale,
  startOfWeek,
};
