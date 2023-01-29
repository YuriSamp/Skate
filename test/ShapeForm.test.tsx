import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Shapeforms from '../components/Shapeforms'
import { RecoilRoot } from 'recoil'
import selectEvent from 'react-select-event'

describe('testing form', () => {

  test('default values', () => {
    render(<RecoilRoot>
      <Shapeforms Price={419} Name={"Primitive Wade Desarmo Rapture"} Image={"/shapes/Shape-11.jpg"} />
    </RecoilRoot>
    )
    const input = screen.getByDisplayValue(1);
    expect(input).toBeInTheDocument()
    expect(screen.getAllByRole('option').length).toBe(6)
  })

  test('try to buy without select a size', async () => {
    const user = userEvent.setup()
    render(<RecoilRoot>
      <Shapeforms Price={419} Name={"Primitive Wade Desarmo Rapture"} Image={"/shapes/Shape-11.jpg"} />
    </RecoilRoot>
    )

    const QuantidadeHadlePlus = screen.getByTestId('SUM')
    await user.click(QuantidadeHadlePlus);
    await user.click(screen.getByText('Adicionar ao carrinho'))
    expect(screen.getByText('Por favor selecione o tamanho desejado')).toBeInTheDocument()
  })

  test('try to buy without select nothing', async () => {
    const user = userEvent.setup()
    render(<RecoilRoot>
      <Shapeforms Price={419} Name={"Primitive Wade Desarmo Rapture"} Image={"/shapes/Shape-11.jpg"} />
    </RecoilRoot>
    )

    await user.click(screen.getByText('Adicionar ao carrinho'))
    expect(screen.getByText('Por favor selecione o tamanho desejado')).toBeInTheDocument()
  })

  // Voltarei pra descobrir como testa a tag select
  test('Should add to cart and display the sucess mensage', async () => {
    const user = userEvent.setup()
    render(<RecoilRoot>
      <Shapeforms Price={419} Name={"Primitive Wade Desarmo Rapture"} Image={"/shapes/Shape-11.jpg"} />
    </RecoilRoot>
    )

    user.selectOptions(screen.getByTestId('selectField'), '8.125')
    // expect(screen.getByRole('option', { name: '8.12' }).selected).toBe(true)

    const QuantidadeHadlePlus = screen.getByTestId('SUM')
    await user.dblClick(QuantidadeHadlePlus);
    await user.click(screen.getByText('Adicionar ao carrinho'))

    waitFor(async () => expect(screen.getByText('Seu item foi adicionado ao carrinho')).toBeInTheDocument())
  })

})
