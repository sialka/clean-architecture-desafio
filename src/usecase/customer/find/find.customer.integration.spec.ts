import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../infrastructure/customer/repository/sequilize/customer.model";
import CustomerRepository from "../../../infrastructure/customer/repository/sequilize/customer.repository";
import Customer from "../../../domain/customer/entity/customer";
import Address from "../../../domain/customer/value-object/address";
import FindCustomerUseCase from "./find.customer.usecase";

describe("Test find customer use case", () => {
    // Simula test com db em memoria
    
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true},
        });

        await sequelize.addModels([CustomerModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should find a customer", async ()=> {
        
        const customerRepository = new CustomerRepository();
        const usecase = new FindCustomerUseCase(customerRepository);

        const custumer = new Customer("123", "Ayla");
        const address = new Address("Street", 123, "Zip", "City");
        custumer.changeAddress(address);
        
        await customerRepository.create(custumer);
        
        const input = {
            id: "123",
        };

        const output = {
            id: "123",
            name: "Ayla",
            address: {
                street: "Street",
                city: "City",
                number: 123,
                zip: "Zip",
            }
        };

        const result = await usecase.execute(input);        
        
        expect(result).toEqual(output);
        
    });

});
