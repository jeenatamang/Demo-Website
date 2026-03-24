import { useNavigate } from "react-router-dom";

const Card = ({ thumbnail, name, description, button, title, category, id, strInstructions }) => {
  const nav = useNavigate();

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 font-sans">
      {title === "Categories" ? (
        <h1 className="text-lg font-bold m-2 text-center">{title}</h1>
      ) : (
        <h1 className="text-lg font-bold m-2 text-center">PRODUCT ITEM</h1>
      )}

      <img
        src={thumbnail}
        alt={name}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />

      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="text-gray-600 text-sm mt-2">
        {description?.slice(0, 200)}...
      </p>

      {button === "Read More" ? (
        <div>
          <button
            onClick={() => nav(`/categories/${name}`)}
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition duration-300"
          >
            {button}
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => nav(`/product/${id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
          >
            {button}
          </button>
          <p className="text-gray-500 text-sm mt-2">{category}</p>
          <p className="">{strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Card;