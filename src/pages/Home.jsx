import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";

const Home = () => {
  const [Doc, setDoc] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res);
      setDoc(res.data.products);
    } catch (error) {
      setError(error);
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-2 my-2">
      {Doc.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          thumbnail={item.thumbnail}
          name={item.title}
          description={item.description}
          button="Buy Now"
          title={item.title}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default Home;