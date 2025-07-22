import {useEffect, useState} from "react";
import "./SearchForm.css";

const Row = ({row}) => {
    return <div className="row">
        <div className="field">
            {row.id}
        </div>
        <div className="field">
            {row.name}
        </div>
    </div>
};


export default function SearchForm(props) {
    const {data} = props;

    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    // let filteredData = data;

    useEffect(() => {
        const res = data
            .filter(
                ({name}) =>
                    name.toLowerCase()
                        .indexOf(searchText.toLowerCase()) > -1
            )
            .sort((a, b) => a.name > b.name ? 1 : -1).slice(0, 10);
        setFilteredData(res);
    }, [data, searchText]);

    const handleSetSearchText = (e) => {
        setSearchText(e.target.value);
    };


    return <div className="search-form">
        <div className="filter">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSetSearchText}
            />
        </div>
        <div className="container">
            {
                filteredData.map((row) => <Row key={row.id} row={row}/>)
            }
            {
                !filteredData.length && <div className="empty">No data found</div>
            }
        </div>
    </div>
}