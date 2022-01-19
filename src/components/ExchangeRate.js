

const ExchangeRate = ({exchangedData}) => {
  return (
    <div className="exchange-rate">
      <h3> ExchangeRate : </h3>
      <h1> {exchangedData.exchangeRate} </h1>
      <h4>
        {exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}
      </h4>
    </div>
  );
};
export default ExchangeRate;
