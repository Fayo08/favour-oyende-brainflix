import React from 'react';

function VideoDetailsPage(props) {

    const [recipesData, setRecipesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const recipesResponse = await axios.get(`${API_URL}/filter.php?c=Seafood`);
                console.log(recipesResponse)
                setRecipesData(recipesResponse.data.meals);
            } catch (err) {
                console.log('Error fetching recipe data: ', err);
            }
        }
        fetchData();

    }, [])
    return (
        <div>
            
        </div>
    );
}

export default VideoDetailsPage;