import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.services.ts";


const Pagination = () => {
    const [totalUsers, setTotalUsers] = useState<number>(0)
    useEffect(() => {
        getUsers('1').then(res=> setTotalUsers(res.total))
    }, [totalUsers]);
    const [query, setQuery]= useSearchParams({page:'1'})
    const handlerNextOnClick= ()=>{
        const page = query.get('page');
        if(page && +page<totalUsers/30){
            let currentPage = +page;
            setQuery({page:(++currentPage).toString()})
        }
    }
    const handlerPrevOnClick= ()=>{
        const page = query.get('page');
        if(page && +page>1){
            let currentPage = +page;
            setQuery({page:(--currentPage).toString()})
        }
    }
    return (
        <div>
            <button onClick={handlerPrevOnClick}>Prev Page</button>
            <button onClick={handlerNextOnClick}>Next Page</button>
        </div>
    );
};

export default Pagination;