import React, { Component } from "react";
import CollectionPreview from "../../../components/collection-preview/collection-preview";
import { SHOP_DATA } from "./shop.data";
import './shop-page.scss'

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
