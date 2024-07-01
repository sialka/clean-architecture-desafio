import Customer from "../entity/customer";
import RepositoryInterace from "../../@shared/repository/repository-interface";

export default interface CustomerRepositoryInterface
    extends RepositoryInterace<Customer> {}
