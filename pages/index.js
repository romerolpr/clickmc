import { LayoutStatic, Footer } from '../src/containers';
import { Home } from '../src/pages';

const Index = () => (
  <LayoutStatic 
  breadcrumbLabel="Início" 
  breadcrumb={false} 
  navbarAbsolute={true}
  fluid={true}>
    <Home />
    <Footer />
  </LayoutStatic>
)

export default Index;