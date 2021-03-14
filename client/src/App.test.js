import {shallow} from 'enzyme';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const h1Element = screen.getByText(/TodoList App/i);
//   expect(h1Element).toBeInTheDocument();
// });
describe('App', ()=>{
  it('should render correctly with no props',()=>{
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();

  });

  it('should render h1 element correctly', ()=>{
    const app = shallow(<App />)
    expect(app.contains(<h1>ToDoList App</h1>)).toEqual(true);
});
})
