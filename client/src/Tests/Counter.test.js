import {shallow} from 'enzyme';
import Counter from '../Components/Counter/Counter';

// test('renders learn react link', () => {
//   render(<App />);
//   const h1Element = screen.getByText(/TodoList App/i);
//   expect(h1Element).toBeInTheDocument();
// });
describe('Counter', ()=>{
  it('should render correctly with no props',()=>{
    const component = shallow(<Counter />);
    expect(component).toMatchSnapshot();

  });

})
