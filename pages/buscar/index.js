import { LayoutStatic, Footer } from '/src/containers';
import { Home } from '/src/pages';
import { AppModal } from '../../src/components';

const Buscar = () => {
    return (
        <LayoutStatic 
        breadcrumbLabel="Início" 
        breadcrumb={false} 
        navbarAbsolute={true}
        fluid={true}>
            <AppModal />
            <Home />
            <Footer />
        </LayoutStatic>
    )
}

export default Buscar