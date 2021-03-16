import {shallow} from 'enzyme';
import Login from '../Components/TodoApp/Login'
import {spy} from 'sinon';
describe('Todo app login page', ()=>{
    let component = shallow(<Login/>);
  it('should render correctly with no props',()=>{
    expect(component.find('input')).toHaveLength(2);

  });
  it('should render a button correctly',()=>{
      expect(component.find('button').text()).toEqual('Login');
  });
//   it('should click a button correctly',()=>{
//       const callback = spy();
//       component.find('[type="submit"]').simulate('submit');
//       expect(callback).toHaveLength(1);

//   })

})