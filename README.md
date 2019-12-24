# xAPI-enabled Bookmarker:

### Description:

Using the xAPI Bookmarker to capture the learning activities as xAPI statements.

### In Depth View:

This simple application that runs inside of any standard internet browser bookmark. It lets you record any webpage that you “experience” to an LRS. The tool consists of various components which are bookmark generator, LRS and a communicator to LRS.

### Bookmark Generator:

The generator lets you create your own personal bookmarker then add the bookmark link to your browser bookmark bar / list. Easiest way to do this is to simply drag and drop the newly generated xAPI bookmark link to your browser bookmark bar. 

### LRS:

LRS- Learning Record Store is a heart of any xAPI ecosystem which will receive, store and return the xAPI statements. You’ll need an LRS in order to do work with xAPI easily. It acts as central store to sends or receives the learning activity data efficiently. Most basic function of an LRS is to store and make available xAPI statements.

### Communicator to LRS:

Other than storing and retrieving the LRS can be coupled with communicator enables a range of capabilities that might include reporting dashboards, learning analytics, content recommendation engines and more. 

### Requirements:

The basic technical requirements needed are JavaScript, Knowledge of xAPI and Basics of LRS and their functionalities also working with JSON objects.


### Design and Architecture:

The basic architecture of the tool explained in the below picture,
So the flow is pretty simple whenever user sends a statement it will be send to LRS and LRS process it and stores it. Whenever requests made to the LRS we need do fetch the data and display it. For which firstly we need a LRS endpoint to send and receive the response. Here we use http method to access the data in the LRS.

Lets’ take Watershed LRS for the demo purpose:
Go to the URL and create your free account: https://watershedlrs.com/app/index.html#/orgs
Note: Watershed LRS gives you a trial account up to couple statement storage for free. 
 

Then from the top navigation bar choose data -> xAPI Data option which will navigates you to above screen.
In that screen you can see the endpoint URL save it and also create a new activity provider by clicking on Add Activity Provider button. Which eventually gives you a key and secret those are security authentication part for the endpoint we are accessing. Save that too for future purpose.
Now we have an endpoint and authentication tokens we can concentrate on bookmarker.

### For other LRS:

For LRS other than watershed available on market, the main concept is similar we just need an endpoint to the LRS. In case of your own server hosted LRS, the process is same.

### Bookmarker:

The xAPI bookmarker JavaScript file is follows server side rendering concept that is it should be placed on a server in order to run it. You can place the final file in GitHub and act that as cloud I will cover that on later. The reason is the tool should be run on all the web pages and data should be passed securely to the LRS. Let’s get into the bookmark.js file,

### Modules:

The file consists of multiple core modules and one user module. The core modules are Crypto JS, Base64 encoder and Tin Can JS and Utilities modules. DONOT delete or update these core modules by all means these are used to encrypt the http request and declare the xAPI verb and interaction statements by reference to ADL which is global reference point or definition for xAPI structure.

After Tin Can client library module the last module is our user module which holds the data passed from the bookmark tool. This part holds the HTML and CSS of UI of the bookmark popup window.

### Design Structure:

One can add or remove a section following the existing code architecture also you can update the styles too. You also have individual functions for sending, rendering, preview of statements. Note: optionally you have animate overlay action which I created to give a better UI experience you can disable it if you want.

### Updating:

Let’s look into how to modify the user module, the basic structure is html and CSS codes stored as JSON / Object upon rendering it will create an UI component.

Now remove the Default Logo:
 
Just remove or modify the highlighted line which holds the data for default logo image. You can also look at the CSS styles are being stored in array format. You can add or remove the value in store which handles your UI styles of the Popup window.

### Adding Verb:
 
### About xAPI Verb:

Verb is xAPI key portion. A xAPI statement consists of three main things actor, verb and activity for example:
John Completed the Assignment.
Here John is the actor in our case the user using the bookmarker. Assignment is the activity he done or doing. And Completed is the xAPI Verb.

In order to Learning Record Store process the verb ADL gives the international standard for each and every verb for example for completed the actual ADL purposed verb is “http://adlnet.gov/expapi/verbs/completed“. 

Here Display is the property to render on option box and id will be sent to LRS to process this data.
We can add new verb by simply adding new object to existing array, let’s take if you want to add “Pause” verb to the options, corresponding ADL verb is http://id.tincanapi.com/verb/paused
You can get all types of verb allowed by ADL and its ID from this link.
The code will looks like this:
{ display: "Paused", id: " http://id.tincanapi.com/verb/paused " }

Once you finish editing this Bookmark.js file it should be placed in server and your front end application should make a request to it. 

Now let’s look at the front end part or generating the Bookmarker:
In your frontend where your user creates their individual bookmarker you need to create a button upon clicking that should generate a bookmark link which should holds that User Name and User Email by default.
Let’s look into the code for further understanding:
 
If you look at the href part, the authentication is optional based on the LRS you’re using then endpoint is your LRS access point next is your user name and email which you have retrieve it using current user session. In the SRC attribute part you have place the url of the Bookmark.js file we created in the previous step.

### Source Code Document:

All the code is available in the following GitHub Repo: https://github.com/nagarjundeepak/xAPI-Bookmarker/tree/master

### Help and Maintenance:
	
One can customize this xAPI bookmark for various language or platform support. The Tin Can API is open sourced from Rustic Software Company. They provide this API for other language support too.
	
For asp.NET: Refer https://github.com/RusticiSoftware/TinCan.NET
For PHP: https://github.com/RusticiSoftware/TinCanPHP
For JAVA: https://github.com/RusticiSoftware/TinCanJava
Note: all these API only provides the Tin Can API you have customize the user module and front end part.

### Reference:

https://github.com/adlnet/xapi-profiles/blob/master/xapi-profiles-about.md#introduction

