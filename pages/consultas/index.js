import { LayoutStatic, Footer } from '/src/containers';
import { identifySession } from '../../src/constants/session/identifySession';

const Consultas = () => {
    // verifica sessão
    identifySession()
    return (
        <LayoutStatic breadcrumbLabel="Consultas" breadcrumb={false}>
            
            <Footer />
        </LayoutStatic>
    )
    
}

export default Consultas