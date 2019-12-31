import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        // display only 4 items per collection
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otheritemProps }) => (
          <CollectionItem key={id} {...otheritemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
