# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Slack bot lab - troubleshooting

## Bot unresponsive?

1. Check that your `.js` file is in the `scripts` subfolder

    Your `.js` file must be in the `scripts` subfolder of the folder containing your hubot code. If your `.js` file is in the main folder, Slack won't know where to look for it.

2. Check that you don't also have another `.js` or `.coffee` folder in your `scripts` folder

    Your `scripts` folder should contain only the file that contains the code you want to use. Other script files might be loaded after yours, overwriting your code.

3. Wake up your bot

    A Heroku app instance is known as a __dyno__. A free dyno 
    * runs for a maximum of 18 hours out of every 24
    * goes to sleep after 30 minutes of inactivity

    If a sleeping web dyno receives web traffic, it will become active again after a short delay.

    If your dyno doesn't wake when you interact with your bot on Slack, go to the command line and issue the following command:

    `heroku ps:restart`

    Your bot should wake up after a few seconds.

    Further details:
    * [Free Dyno Hours](https://devcenter.heroku.com/articles/free-dyno-hours)
    * [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku)

4. If your bot is still unresponsive after completing the previous steps, it's likely that one of the script file associated with it contains a bug. 

    * Push the most recent version of your code that worked to Heroku, then check if your bot becomes responsive.

    * If the previous solution didn't work, contact the classmates who share the bot with you and ask them to push the most recent version of their working code to Heroku as well.

    * Once the bot becomes responsive, you'll need to locate and fix whatever bugs are present in the JavaScript files that caused the bot to become unresponsive. Take this opportunity to collaborate with classmates and to hone your debugging skills!

## CoffeeScript code that you want to understand?

  CoffeeScript is often used in conjunction with Hubot; you won't need to know how to write CoffeeScript for the purposes of this class, 
  but be aware that it will come up in Hubot examples and documentation. If you encounter a CoffeeScript file (e.g., the "example.coffee" 
  file included with Hubot) and want to better understand what it's doing, you can use CoffeeScript to translate, or compile, the CoffeeScript 
  file into JavaScript code. 

  Below are instructions for compiling using either Visual Studio code or the command line:

### Compiling CoffeeScript to JavaScript Using Visual Studio Code

1. Click the Extensions button in the sidebar, then in the search box type `CoffeeScript Preview`.
1. In the search results, locate the CoffeeScript Preview extension authored by Drew Barrett, then click the __Install__ button.
1. If necessary, click the __Reload__ button to reload current files with the new extension active.
1. Open the CoffeeScript file you want to compile.
1. Press `command` + `shift` + `P`, type __Coffee__, then click `CoffeeScript Preview` in the menu below the search box. A new pane opens in Visual Studio Code showing the JavaScript version of the open CoffeeScript file.

### Compiling CoffeeScript to JavaScript Using the command line

  1. In the terminal, navigate to the directory containing the CoffeeScript file. 
  2. Then use the `coffee` command with the `-c` switch (for "compile") and the `-o` switch (to specify "output"), as follows:

  ```js
  coffee -c -o output-file.js source-file.coffee
  ```
  where `output-file.js` is the name of the new file where the compiled JavaScript code should be stored, and `source-file.coffee` is the name of a file containing CoffeeScript code that you want to compile.

  For instance, the following command compiles the CoffeeScript file script.coffee and saves the resulting JavaScript in a new file named script.js:

  ```js
  coffee -c -o script.js script.coffee
  ```

  Then you can open the JavaScript file in a code editor and examine the code.