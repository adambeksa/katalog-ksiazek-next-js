import "./ProductListingPage.scss";

function ProductListingError() {
  return (
    <div className="product-listing">
      <div className="container">
        <div className="product-listing__error">Błąd ładowania produktów</div>
      </div>
    </div>
  );
}

export default ProductListingError;
