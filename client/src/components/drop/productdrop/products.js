// import React, { Fragment, useEffect } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getFamily } from "../../actions/product";
// import Familyitem from "./familyitem";

// const Families = ({ getFamily, families }) => {
//   useEffect(() => {
//     getFamily();
//   }, [getFamily]);
//   return (
//     <Fragment>
//         {9+10 === 19 ? (
//           families.map(family => (
//             <Familyitem key={family._id} family={family} />
//           ))
//         ) : (
//           <h4>No families found</h4>
//         )}
//     </Fragment>
//   );
// };

// Families.propTypes = {
//   getFamily: PropTypes.func.isRequired,
//   product: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   product: state.product
// });

// export default connect(
//   mapStateToProps,
//   { getFamily }
// )(Families);

// import React, { Fragment, useEffect } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getFamily } from "../../actions/product";
// import FamilyItem from "./familyitem";

// const Families = ({ getFamily, family }) => {
//   useEffect(() => {
//     getFamily();
//   }, [getFamily]);
//   return (
//     <Fragment>
//       <div>
//         {9 + 10 === 19 ? (
//           family.families.map(family => (
//             <FamilyItem key={family._id} family={family} />
//           ))
//         ) : (
//           <h4>No family found</h4>
//         )}
//       </div>
//     </Fragment>
//   );
// };

// Families.propTypes = {
//   getFamily: PropTypes.func.isRequired,
//   families: PropTypes.object.isRequired,
//   family: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   families: state.family,
//   family: state.family
// });

// export default connect(
//   mapStateToProps,
//   { getFamily }
// )(Families);

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "../../../actions/product";
import ProductItem from './productitem'

const Products = ({ getProducts, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return <Fragment>
        {products.length >0 ? (
          products.map(product => (
            <ProductItem key={product._id} product={product}/>
          ))
        ):<option>No Family found</option>}

      </Fragment>}



Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);

