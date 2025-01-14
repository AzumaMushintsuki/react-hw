import {useSearchParams} from "react-router-dom";

const Pagination = () => {
    const [query, setQuery]= useSearchParams({page:'1'})
    const handlerNextOnClick= ()=>{
        const page = query.get('page');
        if(page){
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