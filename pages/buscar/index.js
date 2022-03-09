import { LayoutStatic, Footer } from '/src/containers';
import { Home } from '/src/pages';
import { ModalNext } from '/src/components';

const Buscar = () => {
    return (
        <LayoutStatic 
        breadcrumbLabel="Início" 
        breadcrumb={false} 
        navbarAbsolute={true}
        fluid={true}>
            <ModalNext modalShow={true} id={1}/>
            <Home />
            <Footer />
        </LayoutStatic>
    )
}

export default Buscar