//POST API call 
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  // THIS VERSION ALLOWS API CALL WHEN CODE IS CHANGED OR PAGE IS REFRESHED
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getData');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // ^^^^^^^^^^^^^^^^^^^ END OF CODE ^^^^^^^^^^^^^^^^^^^^^

  function handleSearch(event) {
    
    event.preventDefault();

    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }




  // THIS WAY OF WRITHING USEFFECT ONLY GETS THE API UPON APP LOAD ONLY IT DOES NOT FETCH AGAIN IF PAGE RELOADS OR CODE CHANGES PROBLEM IS THERE SOME BUGS ON REREBDERING THE PAGE WITH THIS VERSION 

  useEffect(() => {
    const hasFetchedData = localStorage.getItem("hasFetchedData");

    if (!hasFetchedData) {
      fetchData();
    } else {
      // If data is already fetched, get it from localStorage
      const cachedData = JSON.parse(localStorage.getItem("cryptoData"));
      setData(cachedData);
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/search");
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const jsonData = await response.json();
      console.log("API Response:", jsonData);
      setData(jsonData);
      // Store data in localStorage
      localStorage.setItem("cryptoData", JSON.stringify(jsonData));
      // Mark that data has been fetched
      localStorage.setItem("hasFetchedData", "true");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  