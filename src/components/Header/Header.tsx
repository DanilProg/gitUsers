import classes from './Header.module.css'
import classNames from "classnames";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {FormEvent, useState} from "react";
export const Header = () => {
    const [value, setValue] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const search = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`search?q=${value}&per_page=30`)
        setValue('')
    }
    return (
        <div className={classNames('container', classes.header) }>
            <div className={classes.titleContent}>
                <Link to={'/'}><h1 className={classes.title}>ПОЛЬЗОВАТЕЛИ ГИТХАБА </h1></Link> <p className={classes.title}>{id ? '// ' + id : '' || searchParams.get('q') ? '// ' + 'Search' : ''}</p>
            </div>
            <form onSubmit={search}>
                <input placeholder={'Поиск пользователя'} value={value} className={classes.input} onChange={(e) => setValue(e.target.value)}/>
                <button className={classes.btn} type={'submit'}>НАЙТИ</button>
            </form>
        </div>
    );
};