import { useState } from 'react';
import type { UserOrderInfo } from './type';
import { api } from './orderApi';

export const useOrder = () => {
  const [loading, setLoading] = useState(false);

  const createUserOrder = async (order: UserOrderInfo) => {
    setLoading(true);
    try {
      const res = await api.post('/send-order', order);
      return res.data;
    } catch (error) {
      console.error('Order yaratishda xatolik:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createUserOrder,
    loading,
  };
};
