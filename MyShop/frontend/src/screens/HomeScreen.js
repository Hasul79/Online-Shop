import data from '../data.js';

const HomeScreen = {
    render: () => {
        const { products } = data;
        return `
          <ul class="products">
          ${products.map(
            (product) => `
            <li>
              <div class="product">
                    <a href="/#/product/${product._id}" ></a>
                      <img src="${product.image}"  alt="${product.name}" />
                          <div class="product-name">
                      <a href="/#/product/1"> ${product.name}</a>
                  </div>
                  <div class="product-brand">${product.brand}</div>
                    <div class="product-price">$${product.price}</div>
                  
              </div>
           </li>
          `
          ).join('\n')}

          </ul>
        `;
    },
};

export default HomeScreen;