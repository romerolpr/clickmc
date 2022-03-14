import Select from 'react-select';
import { useFetch } from '../../fetch/useFetch';

import { Loading } from '../../../components';

const SelectMedical = ({ defineCategory }) => {

    const { data: repo } = useFetch('/categoria')
    const options = repo?.values

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (options == undefined)
        return <Loading textLabel={'Carregando especialistas...'}/>
        
    return (
        <Select 
        className="basic-single"
        classNamePrefix="select"
        onChange={(e) => defineCategory(e.label)}
        placeholder="Buscar por categoria de especialista..."
        isLoading={options == undefined}
        isSearchable={true}
        name="color"
        options={options.map(item => {
            return {
                value: item.title, 
                id: item.category.id,
                label: capitalize(item.title), 
                color: '#00B8D9' 
            }
        })}
        />
    )
}

export { SelectMedical }