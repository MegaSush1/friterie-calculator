class Friterie_calculator{

  test(){
    console.log("TEST")
  }

  Product_List = new Map();

  /*
  struct of peoples
{
  "people":[product : quantity]

}
  */

  peoples = new Map();

  // FUNCTION FOR ORDER TAB
  add_product(product){
    this.Product_List.set(product, 0);

    update_order();
  }

  add_people(name){
    this.peoples.set(name, new Map());

    update_order();
  }

  remove_people(name){
    this.peoples.delete(name);
  }

  add_people_product(name, product, quantity){
    this.peoples.get(name).set(product, quantity);
  }
  
  remove_people_product(name, product){
    this.peoples.get(name).delete(product);
  }

  modify_people_product_quantity(name,product, quantity){
    this.peoples.get(name).set(product, quantity);
  }

  //FUNCTIONS FOR MONEY TAB
  modify_product_price(product, price){
    this.Product_List.set(product, price);
  }

  calc_money(){

    var peoples_money = new Map();

    for ([name, products] in this.peoples){
      money = 0

      for([product, quantity] in products){
        money += this.Product_List.get(product) * quantity
      }

      peoples_money.set(name, money)
    }

    return peoples_money;
  }
  
};