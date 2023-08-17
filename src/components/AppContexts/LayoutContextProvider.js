import React, {createContext, useContext, useEffect, useState} from 'react';
import defaultConfigs from '../../Utilities/defaultConfigs';
import {ConfigProvider} from 'antd';
import ar_EG from 'antd/locale/ar_EG';
import en_US from 'antd/locale/en_US';
import i18n from '../../Utilities/i18n';

const LayoutContext = createContext();
const LayoutActionsContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

export const useLayoutActionsContext = () => useContext(LayoutActionsContext);

const LayoutContextProvider = ({children}) => {
    const [direction, updateDirection] = useState(defaultConfigs.direction);
    const [locale, updateLocale] = useState(defaultConfigs.locale);
    useEffect(() => {
        document.body.setAttribute('dir', direction);
        document.body.setAttribute('lang', locale)
        i18n.changeLanguage(locale)
      }, [direction]);
    return(
        <LayoutContext.Provider
      value={{
        direction
      }}>
            <LayoutActionsContext.Provider
        value={{
          updateDirection,
          updateLocale
        }}>
        <ConfigProvider direction={direction} locale={locale == defaultConfigs.locale ? en_US : ar_EG}>
        {children}
        </ConfigProvider>
      </LayoutActionsContext.Provider>
      </LayoutContext.Provider>
    )
}

export default LayoutContextProvider;
