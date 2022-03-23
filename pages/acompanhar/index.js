import { LayoutStatic, Footer } from '/src/containers';
import { identifySession } from '../../src/constants/session/identifySession';
import { useEffect, useState } from 'react';

import { useFetch, useRedux } from '../../src/services/fetch';
import { useRouter } from 'next/router';

import { Loading } from '../../src/components';

import { Single, Many } from '../../src/components/Accompany';

const Consultas = () => {

    identifySession()

    const { formValues } = useRedux()

    const router = useRouter()
    
    const [ loading, setLoading ] = useState(false)

    // events
    const [ reminder, setReminder ] = useState(0)
    const [ pageDescription, setPageDescription ] = useState(undefined)
    const [ occurredError, setOccurredError ] = useState(false)
    const [ eventPopup, setEventPopup ] = useState(false)

    if (typeof document != 'undefined') {
        const divHistory = document.querySelector('.details--schedule')
        const divChat = document.querySelector('#history--chat')
        const divAttachment = document.querySelector('#history--attachment')

        if (divChat && divChat.querySelectorAll('span').length > 0) {
            divHistory.scrollTop = divChat.scrollHeight
        }
        if (divAttachment && divAttachment.querySelectorAll('span').length > 0) {
            divHistory.scrollTop = divAttachment.scrollHeight
        }
    }

    const backToPage = () => {
        router.push('/acompanhar')
    }

    const ManageComponent = () => {
        if ( loading ) {
            return <Loading label={false}/>
        }
        if ( router.query.urlCode != undefined ) {
            return <Single />
        }
        return <Many />
    }

    useEffect(() => {

        
    }, [])
    
    
    return (
        <LayoutStatic breadcrumbLabel="Consultas" breadcrumb={false}>
            <ManageComponent />
            <Footer />
        </LayoutStatic>
    )
    
}

export default Consultas