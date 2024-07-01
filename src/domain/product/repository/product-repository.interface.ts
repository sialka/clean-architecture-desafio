import Product from "../entity/product";
import RepositoryInterace from "../../@shared/repository/repository-interface";

export default interface ProductRepositoryInterface
    extends RepositoryInterace<Product> {}
