
  display = (card) => {
    return (
      <div className="card" key={card.shortName}>
        <img src={card.img_src} alt={"Card: " + card.name} />
      </div>);
  }