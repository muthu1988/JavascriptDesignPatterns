const Colors = Object.freeze({
    red: "RED",
    blue: "BLUE",
    green: "GREEEN"
});

const Size = Object.freeze({
    small: "SMALL",
    medium: "MEDIUM",
    large: "LARGE"
});

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }
    isSatisfied(item) {
        return item.color == this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }
    isSatisfied(item) {
        return item.size == this.size;
    }
}

class AndSpecification {
    constructor(...specs) {
        this.specs = specs;
    }
    isSatisfied(item) {
        return this.specs.every((spec) => spec.isSatisfied(item));
    }
}

class Filter {
    constructor(specification) {
        this.specification = specification;
    }
    filter(items) {
        return items.filter((item) => this.specification.isSatisfied(item));
    }
}

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

const apple = new Product('Apple', Colors.red, Size.small);
const tree = new Product('Tree', Colors.green, Size.large);
const car = new Product('Car', Colors.red, Size.large);
const products = [apple, tree, car];

const redColorSpec = new ColorSpecification(Colors.red);
const redFilter = new Filter(redColorSpec);
console.log("\nRed Color Products:")
redFilter.filter(products).map((i) => console.log(i.name));

const largeSizeSpec = new SizeSpecification(Size.large);
const largeSizeFilter = new Filter(largeSizeSpec);
console.log("\nLarge Size Products:")
largeSizeFilter.filter(products).map((i) => console.log(i.name));

const redAndLargeSpec = new AndSpecification(redColorSpec, largeSizeSpec);
const redAndLargeFilter = new Filter(redAndLargeSpec);
console.log("\nRed and Large Size Products:")
redAndLargeFilter.filter(products).map((i) => console.log(i.name));

