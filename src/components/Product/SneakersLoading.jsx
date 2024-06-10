import React from "react";
import ContentLoader from "react-content-loader";

function SneakersLoading() {
  return (
    <ContentLoader
      className="product"
      speed={0}
      width={300}
      height={350}
      viewBox="0 0 300 350"
      backgroundColor="#e0e0e0"
      foregroundColor="#ffffff"
    >
      <rect x="0" y="0" rx="67" ry="67" width="300" height="300" />
      <rect x="-1" y="327" rx="6" ry="6" width="300" height="15" />
      <rect x="0" y="307" rx="6" ry="6" width="300" height="15" />
    </ContentLoader>
  );
}

export default SneakersLoading;
