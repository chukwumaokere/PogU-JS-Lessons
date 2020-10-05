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
Then do maybe the todo app update either one (the task list with vue.js or the style one) 
then you should be ready to do the employee cards one (which introduces component life cycles), then the reddit client (which introduces the vue router)
then you should be fairly proficient in vue/front end framework basics
which will make react easy 
then angular easy as well


Bank app with routes? 
Buy items with a fixed starting total and add to card to deduct amounts