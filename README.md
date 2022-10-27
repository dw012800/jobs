![](/ga_cog.png)

# Project #2: Building Your First Full-Stack Application

## Attendance

There are no in person lecture classes during project weeks, but we do expect you to be working on your project daily and be available during the usual class times for any meetings and check-ins with instructors as needed. Additionally, instructors will have the classroom open for you to join if you wish to work with your peers or ask for help from instructors.

There are **daily attendance checks at the start of each class period**. A thread will be posted in the classroom channel at those times and you must respond to it within 2 hours or you will be marked absent.
_Failure to make an attendance check will result in an unexcused absence_.

We will also be doing weekly stand ups on Saturdays after lunch at 1 pm EST and you must be present for the stand up. 
_Failure to be present for a stand up will result in an unexcused absence for that afternoon_

## Technical Requirements

For this project, you will be making a full CRUD app using the technologies outlined below. When thinking of an app idea, try to frame the project in terms of trying to solve a "problem" and think about the purpose of the app, who would use it, etc. The problem doesn't have to be anything intense and can be something small and simple! For example:

  >**Problem:** I have a huge enamel pin collection and want to organize it all in one place<br>
  >**General App Idea/Purpose:** An app that allows me to catalogue all my pins by category <br>
  >**Who Would Use It:** Pin collectors

### &#x1F534; Mandatory to pass:

#### MVP - Minimum Viable Product

* A working full-stack application, built by you, using **Node.js, Mongoose, Express and EJS**
* Adhere to the **MVC** file structure: Models, Views, Controllers
* At least one model with all 7 **RESTful routes** and full **CRUD**.
* :heavy_exclamation_mark: A git repository **not inside the class repo**.  
* At **least one** Github commit per class day.
* **Be deployed online** and accessible to the public via **Heroku**
* **A ``README.md`` file** with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc
* Have a **link to your hosted working app** in the **`README.md`** file in your github repo

### &#x1F535; Stretch Goals (Not Mandatory):
#### Recommended Features

* Add additional relationships (models can be related in a one-to-many relationship, for example)
  - [Optional notes on having two models and relating them](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-SmellyCat/tree/master/unit_2/w06d05/instructor_notes)
* Include **sign up/log in** functionality, with encrypted passwords & an authorization flow
* Use EJS Partials
* Include portfolio-quality styling
* Use a CSS framework like Skeleton or Bootstrap
* Incorporate **Google Maps**
* Inside Your `README.md`:
    * Include User Stories
    * Include **wireframes** that you designed during the planning process

## Setting up for deployment

This time, because you'll be creating a full-stack app with a server, we cannot just deploy to github pages. Github pages only hosts _static_ projects (i.e. projects without a server). Thus, we have to learn a new way to deploy to something called Heroku, which _does_ host full-stack apps like the ones you'll be building. Additionally, you will have to use a cloud-based version of Mongo, called Atlas.

**This deployment is more complex than the github pages deployment, so please use the one you did this morning for this project.**

- [Deploying to Heroku](https://git.generalassemb.ly/SEI-Synchrony-11-22/student_resources/blob/main/2_full_stack_dev/week_13/3_sat/warm_up/HEROKU.md)
- [Setting up MongoDB Atlas](https://git.generalassemb.ly/SEI-Synchrony-11-22/student_resources/blob/main/2_full_stack_dev/week_13/3_sat/warm_up/1.%20MONGODB_ATLAS.md)
  - Please note: the full set up for Mongo Atlas only needs to be done _once_, then for any projects that you make using this cloud version of Mongo, you just have to include the connection string

❗ Please **DEPLOY EARLY**, and **DEPLOY OFTEN!** Your app working locally does _not_ guarantee that it will work when deployed the same exact way, especially on Heroku, so whenever you have something working correctly -- please _deploy deploy deploy_ and double check! **Do not save deployment for the very last day!**

## Technical Demonstration

All projects will be presented to the class.  Your presentation should be:

* **Approximately 5-10 minutes in length**
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make
* Talk about one new thing you learned during this project (can be something technical, or even something more open ended like time management, etc.)

You will be sharing your app and your code.  Be prepared to answer questions from the instructors and other students.

## Meetings with instructors
_Your instructor will contact you to setup a meeting time to approve your project._

**Tomorrow Feb 11th - Mandatory**<br>
You will meet with an instructor to get your app idea approved.

_How to prepare for project approval_

- Pick a project idea
- Write user stories
  -  what should people be able to do on your website?
- Draw wireframes
    - at least one wireframe of how your site will look
    - (draw more for multiple views)
- Make a schedule for yourself of what you want to accomplish
    - First day most details
    - Second day less details broader strokes of what you want to accomplish
    - Further:  try to pick 'milestones' (check with the project markdown that you are building what you need for MVP) and determine the order of importance, be sure to have a separate list for stretch goals
    - This takes practice so be ready to adjust your schedule
- Know that you will have to make changes and adjust/adapt as you build
- Once you have all of the above, open an issue on this project repo with the all of the information

## How to Submit Your Project
Your project is due on Saturday Feb 25th at 9 AM EST. You will present your project and show your code to classmates and instructors.

:heavy_check_mark: Add your project to [this google sheet](https://docs.google.com/spreadsheets/d/1IcHanVGToFlJ_9bg41npmJi6mqnAOi_BcLE0PkobA-A/edit#gid=0).

  - _NOTE:_ This will be the order you present in!

## Where to go for help during project week
1. Seek out help online
2. Seek out help with your classmates
3. Seek out help with our class TA

**Office Hours**: Same Normal Times

## Etc.

<details><summary><strong>Suggested Ways to Get Started</strong></summary>

* **Wireframe** Make a drawing of what your app will look like in all of the stages of the app(what does it look like as soon as you log on to the site? What does it look like while the player is playing? What does it look like when the player wins / loses?).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
</details>


<details><summary><strong>Think about...</strong></summary>

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, indentation, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations?
</details>

<details><summary><strong>Useful Resources</strong></summary>

* **[Heroku](http://www.heroku.com)**
* **[Writing Good User Stories](https://www.mountaingoatsoftware.com/agile/user-stories)**
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)**
* **[Mongo Documentation](https://docs.mongodb.com/manual/)**
* **[Mongoose Documentation](http://mongoosejs.com/docs/guide.html)**
* **[Mongo Cheatsheet](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Mando/blob/master/unit_2/w06d03/homework/Mongo/Mongo_Cheatsheet.md)**
</details>
<hr>  

## Inspiration - Projects by Previous SEI Students

- [Decolonize My Audition](http://decolonize-my-audition-book.herokuapp.com/)
- [1LiNR](https://shielded-badlands-55529.herokuapp.com/gatekeeper)
- [Basic Goodness](https://basic-goodness.herokuapp.com/products/dinnerware)
- [I'm Outdoorsy](https://imoutdoorsy.herokuapp.com/)
- [ElseWhere](https://ajosemalik-elsewhere.herokuapp.com/)
