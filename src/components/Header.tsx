import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className='header'>
            <h1>Todo <img style={{ width: '60px', height: 'auto' }} src='https://www.typescriptlang.org/images/branding/logo-grouping.svg'/></h1>

            <CreateTodo saveTodo={onAddTodo}/>
        </header>
  )
}
