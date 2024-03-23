import Banner from "../components/Banner/Banner";
import CategoryList from "../components/CategoryList/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <FeaturedJobs />
      <h2>This is Home Component</h2>
    </div>
  );
};

export default Home;
