import React from "react";
interface SarechArticleInbutprops {
  searchParams: {
    sarech: string;
  };
}
const SarechArticleInbut = ({ searchParams }: SarechArticleInbutprops) => {
  return (
    <div className=" fix-hight container m-auto px-5">
      {searchParams.sarech}
    </div>
  );
};

export default SarechArticleInbut;
