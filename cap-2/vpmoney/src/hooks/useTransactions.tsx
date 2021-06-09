import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface ITransaction {
  id: number,
  title: string,
  category: string,
  amount: number,
  type: string,
  createdAt: string
}

/* interface TransactionInput {
  title: string,
  category: string,
  amount: number,
  type: string,
} */

/* type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>; */

type TransactionInput = Pick<ITransaction, 'title'| 'amount' | 'category' | 'type'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<ITransaction[]>([]);


  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput){
   
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{  transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context
}