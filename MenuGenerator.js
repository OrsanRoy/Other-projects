let menu = {
    _courses: {
        appetizers: [],

        mains: [],

        desserts: [],

    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        console.log(appetizer, main, dessert);
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `This meal course contains ${appetizer.name} as appetizer, ${main.name} as main dish and ${dessert.name} as dessert, with total price ${totalPrice} dollars`
    }
}
// console.log(menu);
menu.addDishToCourse('appetizers', 'Vegano Bruschetta', 1.99);
menu.addDishToCourse('appetizers', 'Cheesy Chicken Wings', 3.99);
menu.addDishToCourse('appetizers', 'Pork Meatballs', 2.99);

menu.addDishToCourse('mains', 'Arisona Beef Burger', 7.99);
menu.addDishToCourse('mains', 'Spicy Tomato Lasagna', 4.75);
menu.addDishToCourse('mains', 'Kung Pao Chicken', 6.99);

menu.addDishToCourse('desserts', "Chef John's Cheesecake Flan", 2.99);
menu.addDishToCourse('desserts', 'Chunky Monkey Cupcakes', 2.29);
menu.addDishToCourse('desserts', 'Fruit and Yogurt Ice Pop', 1.99);