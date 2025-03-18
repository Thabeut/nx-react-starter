import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocales } from '@confirma/packages';
import errorImg from '../../assets/imgs/error.png';

interface ErrorPageProps {
  message?: string;
  redirectLink?: string;
}

const Error: React.FC<ErrorPageProps> = ({ message, redirectLink }) => {
  const { t } = useLocales();
  const defaultMessage = t('unexpectedError');

  return (
    <div className="flex items-center justify-center flex-wrap h-screen gap-40 bg-gray-50">
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Oops! {t('somethingWentWrong')}
        </h1>
        <p className="text-xl mb-8 text-gray-800 text-left">
          {t(message || defaultMessage)}
        </p>
        {redirectLink && (
          <NavLink
            className="text-base no-underline text-white border-2 border-gray-800 py-4 px-8 rounded-2xl transition-all duration-300 bg-blue-500 max-w-72 text-center hover:bg-white hover:text-blue-500"
            to={redirectLink}
          >
            {t('backToHome')}
          </NavLink>
        )}
      </div>
      <div>
        <img src={errorImg} alt="error" />
      </div>
    </div>
  );
};

export default Error;
