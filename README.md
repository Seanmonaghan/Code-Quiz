# Javascript Code Quiz

Link to deployed application: https://seanmonaghan.github.io/Javascript-Code-Quiz/

## Objective

The objective of this assignment was to build a timed coding quiz with multiple 
choice questions that runs in the browser and features dynamically updated HTML 
and CSS powered by Javascript Code.  

## Targeted User

```
The ideal user will be someone who is a coding student that wants to take a
timed quiz on Javascript fundamentals and be able to store their high score
so they can gauge their progress and compare with their peers

```

## Functionality

```

When a user interacts with this site, they will be able to click the start
button which will begin the timer and render the first set of questions
and answers on the screen.  

```
![timer code snippet](assets/images/timer.png)
![render code snippet](assets/images/render.png)

```

The element clicked on the screen will have its text content saved as the
variable selection, and that will be compared to the text content of the 
answer to determine if the chosen answer is correct or not.

```
![selection code snippet](assets/images/selection.jpg)

```

When they select the correct answer from the list of answers, the quiz
will display the next question and inform them they were correct.

```
![correct answer message](assets/images/correct.png)
```
When they select the incorrect answer, they will be informed as to such and
that they have lost 5 seconds off their time remaining.

```
![incorrect answer message](assets/images/wrongAnswer.png)

```

When all of the questions are answered, or when the timer reaches 0, the game
terminates.  

```
![overall code snippet](assets/images/overall.png)
```

If the player surpasses the previous top score, which is based on the amount of 
time remaining, then they will be able to record their score and initials.

```

![high score code snippet](assets/images/highscore.png)

