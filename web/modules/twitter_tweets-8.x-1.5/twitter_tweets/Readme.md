#INTRODUCTION

This module enables Twitter Tweets block in Drupal 8 Website. 

* For a full description of the module, visit the project page:
   https://drupal.org/project/twitter_tweets

* To submit bug reports and feature suggestions, or to track changes:
   https://drupal.org/project/issues/twitter_tweets

* Clone URL: https://git.drupal.org/project/twitter_tweets.git


#REQUIREMENTS


This module requires the following prerequisites:


Steps to Create a New Twitter App:

1. A twitter account

2. To Create app at go to  https://apps.twitter.com/

3. Click on Create New App button

4. Fill in Application Details as:

      Name: Your app name, Description: , Website: Your site address (http://ip-address/ in case of local site) Callback URLs: Your site address/twitter/oauth (http://ip-address/twitter/oauth in case of local site)
	  
5. Accept agreement and Click Create Twitter application

6. Click on Key and Access tokens tab and see the details required further:

      Consumer Key (API Key): ************************* , Consumer Secret (API Secret): *************************
	  
7. Click on Create Access tokens on same tab as in step 5 and note down informations required further:

      Access Token: ************************* , Access Token Secret: *************************
	  

#INSTALLATION

* Install as you would normally install a contributed Drupal module.
Visist: https://www.drupal.org/docs/8/extending-drupal-8




#CONFIGURATION

1. Enable the module

2. Go to admin/config/services/twitter-settings and fill the form with details generated by creating new application in Twitter as:
   Oauth Access Token: Access Token, Oauth Access Token Secret: Access Token Secret , Consumer Key: Consumer Key (API Key) , Consumer Secret: Consumer Secret (API Secret), Screen Name: UserName (Username of Twitter account), Tweet Count: Number of tweet feed to be shown in block
   
3. Go To admin/structure/block click on "Place Block" in the list blocks and  Find "Our Tweets" block and click "Place Block"

4. Before viewing in Browser Clear the Cache and see the Twitter feeds in the enabled block

#MAINTAINERS

Current maintainers:

* Tadepalli Krishna Priya (tkrishnapriya) - https://drupal.org/u/tkrishnapriya
* Sameer Kumar Choudhary (samhaldia) - https://www.drupal.org/u/samhaldia