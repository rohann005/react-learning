

const PlaceCard = () => {
  return (
    <div className="parent">
    <div className="card">
      {/* Top Image Section */}
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="place"
        />
        <div className="like-icon">❤</div>
      </div>

      {/* Bottom Content */}
      <div className="card-content">
        {/* Left Section */}
        <div className="left">
          <h3>Manali Hills</h3>
          <p className="time">3 Days • 2 Nights</p>
          <p className="price">₹8,999</p>
        </div>

        {/* Right Section */}
        <div className="right">
          ⭐ 4.6
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlaceCard;