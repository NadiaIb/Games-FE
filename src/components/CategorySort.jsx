// import { useState, useEffect } from "react";
// import { getCategories } from "../../api";
// import { Link, useNavigate } from "react-router-dom";

// const CategorySort = ({
//   handleCategoryClick,
//   setIsLoadingReviews,
//   listReviews,
//   setListReviews,
// }) => {
//   const [categoryList, setCategoryList] = useState([]);

//   useEffect(() => {
//     getCategories()
//       .then((categories) => {
//         setCategoryList(categories);
//       })
//       .then(() => {
//         setIsLoadingReviews(false);
//       });
//   }, [setIsLoadingReviews]);

//   const handleClick = (slug) => {
//     const filteredReviewsCategory = listReviews.filter((review) => {
//       return review.category === slug;
//     });
//     setListReviews(filteredReviewsCategory);
//   };

//   return (
//     <section>
//       <p>Select a Category</p>
//       <ul>
//         {categoryList.map((category) => {
//           return (
//             <li key={category.slug}>
//               <Link
//                 to={`/categories/${category.slug}`}
//                 onClick={() => handleClick(category.slug)}
//               >
//                 {category.slug} games
//               </Link>
//               {/* <Link
//                   to={`/categories/${category.slug}`}
//                   onClick={() => {
//                     handleClick(category.slug)}}
//                 >
//                   {category.slug} games
//                 </Link> */}
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// // //add logic so when category is clicked it will show only those clicked

// export default CategorySort;

import { useState, useEffect } from "react";
import { getCategories } from "../../api";
import { Link } from "react-router-dom";

const CategorySort = ({ filterReviewsByCategory, resetReviews }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategoryList(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <p>Select a Category</p>
      <ul>
        {categoryList.map((category) => {
          return (
            <li key={category.slug}>
              <Link
                to={`/categories/${category.slug}`}
                onClick={() => filterReviewsByCategory(category.slug)}
              >
                {category.slug} games
              </Link>
            </li>
          );
        })}
        <li>
          <button onClick={resetReviews}>Reset</button>
        </li>
      </ul>
    </section>
  );
};

export default CategorySort;
