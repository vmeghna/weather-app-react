import icon from "../assets/iconcloud.jpg";
import Error from "./Error";
import Loading from "./Loading";

const Display = ({ weatherData, loading, error }) => {
  return (
    <div className="display">
      <img src={icon} alt="" />
      {loading && <Loading />}
      <div className="content">
        {error ? (
          <Error />
        ) : (
          <>
            <h2>{weatherData?.name}</h2>
            <h1>{(weatherData?.main?.temp - 273).toFixed(2)} °C </h1>
            <div className="content-temp">
              <p>max - {(weatherData?.main?.temp_max - 273).toFixed(2)} °C</p>
              <p>min - {(weatherData?.main?.temp_min - 273).toFixed(2)} °C</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Display;
