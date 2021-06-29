import DicodingDB from '../../data/dicodingdb';

const Home = {
  async render() {
    return `
          <h2>Home Page</h2>
        `;
  },

  async afterRender() {
    const restaurant = await DicodingDB.HomePage();
    console.log(restaurant);
  },
};

export default Home;
