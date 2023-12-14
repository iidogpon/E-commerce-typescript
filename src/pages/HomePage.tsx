import MainLayout from "@/layout/MainLayout";
import Product, { ProductList } from "@/features/product";

const HomePage = () => {
  return (
    <MainLayout>
      <ProductList />
      <Product />
    </MainLayout>
  );
};

export default HomePage;
