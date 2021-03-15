import {shallow} from 'enzyme';
import Todo from '../Components/TodoApp/Todo'

describe('Todo app', ()=>{
  it('should render correctly with no props',()=>{
    const component = shallow(<Todo />);
    expect(component).toMatchSnapshot();

  });

})