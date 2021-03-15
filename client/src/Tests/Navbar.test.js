import {shallow} from 'enzyme';
import Navbar from '../Components/Layouts/NavbarMenu'


describe('Navbar menu', ()=>{
    let component = shallow(<Navbar />);
  it('should render correctly with no props',()=>{
    
    expect(component).toMatchSnapshot();

  });

  it('should render a nav-brand', () => {
    
    expect(component.find('a').first().text()).toEqual('Java-React Apps');
  });

  it('should click navbar-brand with no error', ()=>{
      component.find('a').first().simulate('click');
  });
  it('should render a nav-item for counter', () => {
    
    expect(component.find('a').at(1).text()).toEqual('Counter App');
  });

  it('should click counter app link with no error', ()=>{
      component.find('a').at(1).simulate('click');
  })
  it('should render a nav-item for todolist', () => {
    
    expect(component.find('a').at(2).text()).toEqual('TodoList App');
  });

  it('should click todolist app link with no error', ()=>{
      component.find('a').at(2).simulate('click');
  })
});
