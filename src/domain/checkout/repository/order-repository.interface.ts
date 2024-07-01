import Order from "../entity/order";
import RepositoryInterace from "../../@shared/repository/repository-interface"

export default interface OrderRepositoryInterface
    extends RepositoryInterace<Order> {}
