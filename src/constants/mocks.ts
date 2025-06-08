import { ProductDTO } from '@dtos/ProductDTO'
import { TicketDTO } from '@dtos/TicketDTO'

export const mockProducts: ProductDTO[] = [
  {
    id: 1,
    name: 'Bowl de Quinoa',
    description: 'Quinoa orgânica com abacate, tomate cereja e molho de limão',
    price: 32.9,
    quantity: 30,
  },
  {
    id: 2,
    name: 'Smoothie de Couve',
    description:
      'Mistura de couve, banana, leite de amêndoas e sementes de chia',
    price: 15.5,
    quantity: 50,
  },
  {
    id: 3,
    name: 'Salmão Grelhado',
    description: 'Salmão fresco com legumes assados e azeite',
    price: 45.99,
    quantity: 25,
  },
  {
    id: 4,
    name: 'Barra de Proteína Vegana',
    description: 'Sem glúten, com tâmaras, castanhas e cacau',
    price: 12.99,
    quantity: 100,
  },
]

export const lastOrderedProducts: ProductDTO[] = [
  {
    id: 1,
    name: 'Bowl de Quinoa',
    description: 'Quinoa orgânica com abacate, tomate cereja e molho de limão',
    price: 32.9,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Smoothie de Couve',
    description:
      'Mistura de couve, banana, leite de amêndoas e sementes de chia',
    price: 15.5,
    quantity: 1,
  },
]

export const sideDishProducts: ProductDTO[] = [
  {
    id: 5,
    name: 'Coca-cola 350ml',
    description: 'Refrigerante coca-cola de lata',
    price: 5,
    quantity: 99,
  },
  {
    id: 6,
    name: 'Fanta Uva 350ml',
    description: 'Refrigerante fanta uva de lata',
    price: 3,
    quantity: 99,
  },
]

export const ticketMock: TicketDTO[] = [
  {
    id: 1,
    name: 'Cupom legal',
    description: 'Por tempo limitado',
    value: 20,
  },
  {
    id: 2,
    name: 'Cupom daora',
    description: 'Até o fim do mês',
    value: 12,
  },
]
