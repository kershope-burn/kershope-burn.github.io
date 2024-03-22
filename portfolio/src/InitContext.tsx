import React from 'react';

interface InitContextType {
  init: boolean;
}

export const InitContext = React.createContext<InitContextType>({ init: false });