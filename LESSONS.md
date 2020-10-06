AFTER SCORE COUNTER AND TODO APP
1) create a new vue project valled like... vue-components-practice 
2) get rid of the hello world component 
3) then make a "Button" component  that accepts 4 props (text, type, className, and disabled) 
4) such that you can create a button by doing <Button className="btn btn-red" text="Home" type="button" />
5)  create 3 other buttons with one of them being disabled (Profile, Subscription, Log in) 

6) then create an Input component that takes 1 prop named "Placeholder" and whatever you type in there will be the placeholder of the input field 
7) Make the placeholder "Search..."

TASK LIST TODO APP:
You can then try to update your TODO app to work like this: https://vuejsexamples.com/task-list-with-vue-js/

OR THIS: 
2. TODO APP UPDATE
Another project that comes to my mind as something which everybody should do when practicing React.js it a simple Todo App. It can contain one or three cards or boxes, where you will display the planned tasks, in-progress tasks, and the done tasks. If you decide on the one space for all the asks, add there any colors for the particular status of the tasks.

Another useful feature would be a simple popup or modal to add a new task, and the button to delete the tasks if they are not necessary. 

If you don’t have any idea for the design, take a look at the one below, I’d prepared for you.
https://www.blog.duomly.com/wp-content/uploads/2020/06/todo-list.png


RESTAURANT MENU PAGE
The next exciting project you could create for your portfolio is a restaurant menu page. To make it a little more advanced, you can divide positions into categories, each with the list, images, and button to select, or pricing.

It'll have a navbar at the top with a few links: Home, Menu, Contact Us
Then it'll have cards components with images of food, and button for add to cart

UNIT CONVERSION CALCULATOR: 
https://www.blog.duomly.com/wp-content/uploads/2020/06/unit-measures-calculator.png
Takes an input and converts from one to the other 

1) For the first one https://codesandbox.io/s/laughing-perlman-fgudr I created it really quickly so you can reference the done code in case you need to reference the working code
on the left is the link i sent you, with a couple more additions (I added a footer and a logo) 
then on the right, is the same thing but i added way more components so i can abstractify the main App.vue file to the most syntactically pleasing template
https://cdn.discordapp.com/attachments/546208188123447296/762547147081383956/unknown.png

If you can figure out enough to get the right hand result, where the HTML for that is literally just: 
```html
  <Container>
    <Logo />
    <Navbar />
    <Input placeholder="Search..." />
  </Container>
  <Footer text="Created by Chuck!" />
```
then you've made it
(heres the link to the other one in case you want to study how i created it: https://codesandbox.io/s/muddy-haze-ssj76)

id say you do that project, (the first one) then try to get to the second one (the one on the right) 
Then do maybe the todo app update either one (the task list with vue.js or the style one) CHANGE THE BUTTONS USING BOOTSTRAP
THEN DO THE MARKET APP
then you should be ready to do the employee cards one (which introduces component life cycles), then the reddit client (which introduces the vue router)
then you should be fairly proficient in vue/front end framework basics
which will make react easy 
then angular easy as well


Bank app with routes? 
Buy items with a fixed starting total and add to card to deduct amounts

### MARKET APP
# This project is going to be a food app where users can have a starting value amount and add a quantity of various foods to their "cart" and it'll deduct it from their wallet amount
1) Create a new project called "vue-food-app" 
1.1) This app will use bootstrap css framework, so add it to our index.html
2) This app will have a few components: 
  2.1) Navbar: a navbar component with 2 buttons "Home", "Menu" and a small div on the right hand side (look up float: right on bootstrap) with "Wallet: $60"
  2.2) The wallet component's value will be whatever set as the starting value in the initially set up in the app 
  2.3) Card: the cards will display the data "product" as the product's name, the Manufacturer, the rating as a number and the price in USD format "$2.00" "$10.00" 
    1) Each card will have a unique quantity value with a plus and minus - / + and that will increment the quantity for that specific item, and as people increase the quantity of the item it will deduct from the wallet value. 
    2) If they try to add a quantity when they have insufficient funds, they should be prevented from adding it, and it should show some error message saying "You have insufficient funds" 
    3) If a user removes an item or deducts the quantity, they should get that value added back to their wallet amount 
3) we should keep an array of objects named "Cart" that will get updated with the name of the product and the quantity being ordered. Example: 
Cart : [
  {"5 Hour Energy Pomegranate": 5}, {"Monster Energy Drink": 10}, { ... }, { ... }
]

The list of objects, you can either just put in your assets folder and learn by googling, how to include a file like `let foods = require('assets/foods.json')` OR you can copy paste the entire array of objects into your App.vue

If you run into issues, DM me on discord.

## WHAT I WANT YOU TO FOCUS ON: 
Creating components and iterable components using Vue syntax, adding bootstrap to a vue project, adding buttons with - and + symbols, writing functions for those - and + buttons, adding components with props, using bootstrap. 
IF YOU CANNOT FIGURE OUT HOW TO DEDUCT AND ADD VALUES TO A COMPONENT PLEASE DONT WORRY ABOUT IT. 
https://cdn.discordapp.com/attachments/546208188123447296/762900241770479616/unknown.png