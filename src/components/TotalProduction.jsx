// import myImage from './public/image.jpg';
function TotalProduction() {
  const gridItems = [
    <>
      <i key={1} className="card_icon fa-solid fa-table-cells-large"></i>
      <span key={2}>bottle</span>
    </>,
    <span key={3}>500k</span>,
    <>
      <i key={4} className="card_icon fa-solid fa-table-cells-large"></i>
      <span key={5}>pack</span>
    </>,
    <span key={6}>50k</span>,
    <>
      <i key={7} className="card_icon fa-solid fa-table-cells-large"></i>
      <span key={8}>pallet</span>
    </>,
    <span key={9}>5k</span>,
  ];

  return (
    <div className="total_production_cntr">
      <div className="cntr-header">
        <i className="fa-solid fa-table-cells-large"></i>
        <span>Total Production</span>
      </div>
      <div className="cntr-body">
        {gridItems.map((item, index) => (
          <div className="cntr-body-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotalProduction;
