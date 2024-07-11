import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import Product from "../../../domain/product/entity/product";
import CreateProductUseCase from "./create.product.usecase";
    
describe("Test create product use case", () => {
    // Simula test com db em memoria
    
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true},
        });

        await sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should create a product", async ()=> {

        const productRepository = new ProductRepository();
        const input = new Product("1", "Product 1", 100);        

        await productRepository.create(input);

        const output = await ProductModel.findOne({ where: { id: "1" } });
        
        expect(output.toJSON()).toStrictEqual({
            id: input.id,
            name: input.name,
            price: input.price,
        });

    });


});
