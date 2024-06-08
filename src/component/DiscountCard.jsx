const DiscountCard = () => {
  return (
    <div className="flex p-10 bg-gray-100 rounded-xl justify-between my-24  shadow-xl">
      <div>
        <h2 className="text-4xl font-bold">Eid Special Offer</h2>
        <p>Available on 20 July 2024</p>
        </div>
        <hr />
        <div >
          <h2 className="card-title font-bold text-6xl">30% discount</h2>
          <p className="text-2xl font-medium">Book your favourite place</p>
          
        </div>
      
    </div>
  );
};

export default DiscountCard;
