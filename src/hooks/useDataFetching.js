import { useState , useEffect } from 'react';

//Creating a custom logic hook
function useDataFetching( dataSource){

    const [loading , setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error , setError] = useState('');


    useEffect(()=>{
        
        async function fetchData(){

            try {
                
                const data = await fetch(dataSource);

                const result = await data.json();

                if (result){
                    setData(result);
                    setLoading(false);
                }
                
            } catch (error) {

                setError(error.message);
                setLoading(false);
                
            }
        }

        fetchData();

    }, [dataSource]);

    return [loading,error,data];
}


export default useDataFetching;