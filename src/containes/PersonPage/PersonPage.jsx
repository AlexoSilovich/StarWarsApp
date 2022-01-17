import propTypes from 'prop-types'
import React ,{ useEffect, useState, Suspense } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { withErrorApi } from "@hoc-helpers/withErrorApi"
import {getApiResource} from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData'
import {API_PERSON} from '@constants/api'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto'
import UILoading from '@components/UI/UILoading'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack'
import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({setErrorApi}) => {
    const {id} = useParams()

    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personId, setPersonId] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData =  useSelector(state => state.favoriteReducer)

    useEffect(() => {
        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`)

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setPersonId(id)

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))
                
                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })()
    },[])


    return (
        <>
        <PersonLinkBack />

        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>

            <div className={styles.container}>
                <PersonPhoto
                    personId={personId}
                    personPhoto={personPhoto}
                    personName={personName}
                    personFavorite={personFavorite}
                    setPersonFavorite={setPersonFavorite}
                />

            {personInfo && <PersonInfo personInfo={personInfo} />}

            {personFilms && (
                <Suspense fallback={<UILoading/>}>
                    <PersonFilms personFilms={personFilms} />
                </Suspense>
            )}
            </div>
        </div>
        </>
    )
}

PersonPage.propTypes = {
    match: propTypes.object,
    setErrorApi: propTypes.func
}

export default withErrorApi(PersonPage)