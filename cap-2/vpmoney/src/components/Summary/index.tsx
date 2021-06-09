import incomeImg from '../../assets/income.svg'
import outcomeImg from'../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

import { Container } from './styles'

export function Summary(){
  const { transactions } = useTransactions();

 /*  const totalDeposits = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      return transaction.amount + acc
    }
    return acc
  }, 0) */

  const summary = transactions.reduce((acc, transction) => {
    if(transction.type === 'deposit'){
      acc.deposits += transction.amount
      acc.total += transction.amount
    }else{
      acc.withdraws += transction.amount
      acc.total -= transction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })


  return (
    <Container>      
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}