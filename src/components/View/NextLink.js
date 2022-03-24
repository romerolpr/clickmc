import Link from "next/link";
import { useRouter } from "next/router";

export const NextLink = ({ href, label, icon, className: ClassName }) => {

    const { pathname } = useRouter();
    href = href ? href : '/';

    return (
        <Link href={href}>
            <a 
            // Define classe por argumento ou não, e verifica se link está ativo 
            className={ ClassName == undefined ? pathname == href ? "nav-link active" : "nav-link" : pathname == href ? `${ClassName} active` : ClassName } 
            title={label}>{icon == undefined ? label : <i className={`bi ${icon}`}></i>}</a>
        </Link>
    )
}