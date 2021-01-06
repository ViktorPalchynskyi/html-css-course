import PageTemplate from '../PageTemplate';
import {Route} from 'react-router-dom';
import AboutMenu from './Menu/AboutMenu';
import Company from './SubMenu/Company';
import Services from './SubMenu/Services';

export default () => (
  <PageTemplate>
    <section className="events">
      <h1>[About the Company]</h1>
      <Route component={AboutMenu} />
      <Route exact path="/about" component={Company}/>
      <Route path="/about/services" component={Services}/>
      {/* <Route path="/about/history" component={History}/> */}
      {/* <Route path="/about/location" component={Location}/> */}
    </section>
  </PageTemplate>
)