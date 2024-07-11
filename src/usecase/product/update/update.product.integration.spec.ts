import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import Product from "../../../domain/product/entity/product";
import UpdateProductUseCase from "./update.product.usecase";

describe("Test update product use case", () => {
        
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

    it("should update a product", async ()=> {
        
        const productRepository = new ProductRepository();
        const input = new Product("1", "Product 1", 100);

        await productRepository.create(input);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        
        expect(productModel.toJSON()).toStrictEqual({
            id: input.id,
            name: input.name,
            price: input.price,
        });

        input.changeName("Product 2")
        input.changePrice(200)

        await productRepository.update(input)

        const productModel2 = await ProductModel.findOne({ where: {id: "1"} });

        expect(productModel2.toJSON()).toStrictEqual({
            id: input.id,
            name: input.name,
            price: input.price,
        });
        
    });



});
