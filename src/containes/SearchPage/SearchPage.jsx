import propTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import {getApiResource} from '@utils/network'
import { debounce } from 'lodash'
import {withErrorApi} from '@hoc-helpers/withErrorApi'
import {API_SEARCH} from '@constants/api'
import {getPeopleId, getPeopleImage} from '@services/getPeopleData'
import SearchPageInfo from '@components/SearchPage/SearchPageInfo'
import UIInput from '@components/UI/UIInput'
import styles from './SearchPage.module.css'

const SearchPage = ({setErrorApi}) => {
    const [inputSearchValue, setInputSearchValue] = useState('')
    const [people, setPeople] = useState([])

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param)

        if (res) {
            const PeopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(PeopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetRespose = useCallback(
        debounce(value => getResponse(value), 300),
        []
    )

    const handelInputChange = value => {
        setInputSearchValue(value)
        debouncedGetRespose(value)
    }

    return (
        <>
            <h1 className="header__text">Search</h1>

            <UIInput 
                value={inputSearchValue}
                handelInputChange={handelInputChange}
                placeholder="Input character's name"
                classes={styles.input__search}
            />

            <SearchPageInfo people={people} />
        </>
    )
}


SearchPage.propTypes = {
    setErrorApi: propTypes.func
}

export default withErrorApi(SearchPage)