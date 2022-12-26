import React from 'react';
import { useUserData } from '../../hooks/useUserData';

export interface IUserContextData {
  name?: string;
  iconImg?: string;
}

export const userContext = React.createContext<IUserContextData>({});

interface IUserContextProviderProps {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: IUserContextProviderProps) {
  const [data] = useUserData();
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
