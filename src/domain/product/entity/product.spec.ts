import Product from "./product";

// Switch de Testes
describe("Product unit test", () => {
    
    it("should throw erro when id is empty", () => {

        expect(() => {
            const product = new Product("", "Product 1", 100);
        }).toThrowError("Id is required");

    });
    
    it("should throw erro when name is empty", () => {

        expect(() => {
            const product = new Product("1", "", 100);
        }).toThrowError("Name is required");

    });
    
    it("should throw erro when price is less than zero", () => {

        expect(() => {
            const product = new Product("1", "Product 1", -1);
        }).toThrowError("Price must be greater than zero");

    });
    
    it("should change name", () => {

        const product = new Product("1", "Product 1", 100);
        product.changeName("Product 2");

        expect(product.name).toBe("Product 2");

    });
    
    it("should change price", () => {

        const product = new Product("1", "Product 1", 100);
        product.changePrice(200);

        expect(product.price).toBe(200);

    });
    
     it("should throw error when name is empty and id is empty", () => {

        expect(() => {
            const product = new Product("", "", 10);
        }).toThrowError("product: Id is required,product: Name is required");

    });
      
  
});