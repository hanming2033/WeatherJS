const ui = new UI();

//Get weather on Dom load
document.addEventListener('DOMContentLoaded', ui.paint.bind(ui));
//ui.paint method(NOT arrow function because es7 doesnt allow arrow function in class methods yet) uses this
//if call ui.paint, this will be changed instead of the this in ui class.
//if ui.paint is called with bind then the this in ui class will refer to this.
//Alternatives:
//1. create normal function in class and assign a variable to call that function while binding it automatically. Preferred
//2. use "transform-class-properties" plugin to create arrow function in class
//3. create arrow function in constructor (not recommended as each class instance will have its own method)
//4. create a functionA separately and eventlistener calls functionA which in turn calls functionB
//5. create a anonymous arrow function for the event to call the class method

//Change location
document.querySelector('#w-change-btn').addEventListener('click', ui.setLocation);

