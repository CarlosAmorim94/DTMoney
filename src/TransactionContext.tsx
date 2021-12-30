import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (Transaction: TransactionInput) => Promise<void>
}

/*interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}*/

type TransactionInput = Omit<Transaction, 'id' |'createdAt'>

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionProviderProps ) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    } )
    const { transaction } = response.data
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}