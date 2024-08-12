'use client';

import { addToFavoriteAction } from '@/actions';
import { useAuth } from '@/hooks/auth';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

const RatingButton = ({ item }) => {
  const { auth } = useAuth();
  const router = useRouter();
  const [favorite, setFavorite] = useState('');
  const [isPending, setTransition] = useTransition();

  const toggleFavorite = async () => {
    if (auth) {
      await addToFavoriteAction(item?.id, auth);
    } else {
      router.push('/login');
    }
  };

  const handleClick = () => {
    setTransition(() => {
      toggleFavorite();
    });
  };

  return <button onClick={handleClick}>⭐️ {item?.rating}</button>;
};

export default RatingButton;
