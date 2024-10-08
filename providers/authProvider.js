'use client';

import { AuthContext } from '@/contexts/authContext';
import { useState } from 'react';

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
