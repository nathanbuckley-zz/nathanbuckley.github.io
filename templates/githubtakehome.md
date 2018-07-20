## GitHub Support Take Home Exercise

#### GitHub support tenets: a tl;dr
###### Logic + empathy
It's a satisfying balance to bring both analytical skills to a problem, but also remember to respond to a user with care.

###### Transparency + honesty
We put effort into [writing up post-mortem blog posts](https://blog.github.com/2013-02-04-recent-code-search-outages) about What Went Wrong. The balance here is to show enough transparency so users feel respected, but in the case where things are horribly wrong, not share so much that we overwhelm them.

 

[Here's an example of a support request](https://gist.github.com/sonyagreen/3e89df1f7c0e7d6d5737). It may be easier to say something vague and not-technically-untrue like "there was a small problem and we fixed it". It means we don't have to cop to a mistake on our end. Our users are in the tech world, and are used to figuring out problems. We have found we're much better off telling them what's up, and why.

 
###### Surprise + delight
We have an awesome user base, who generally think we're pretty great. We've put a lot of social effort into meetups, conference talks and blog posts that wow people and create fans of our company and the products we [ship](http://shipitsquirrel.github.io/images/ship%20it%20squirrel.png).

 

We follow the [Terms of Service](https://help.github.com/articles/github-terms-of-service), and go above and beyond when it's appropriate. We have the ability to refund as much as we want, and to offer coupons as often as we want. We use this judiciously, as you can turn a surprise into disappointment if wielded badly. You can go back to logic+empathy to consider if what you'd like to do will actually delight the user.

 

Often, our users may just need information quickly and clearly, without being goofy. We have to know how to respond in the way that best matches how the user is feeling.

###### GitHub voice
To explain it casually, we try to exude something that sounds like the person:

* is a real human
* is invested in things going well for you (we care)
* is really smart, but kind (not egotistical)
* and maybe kind of funny (good robot test)
* or at least interesting (and also not actually a robot)
* is not businessy
* could be found in a hoodie, blaring music, slouching in a bean bag chair

###### Humble brag
Here's what someone wrote about us, in a longer piece about moving their company to GitHub:

This leads me to the Customer Service itself. The GitHub staff I’ve been in contact with is extremely helpful, efficient, and comprehensive of our specific requirements. Most important: you deal with real people with real names, not with an anonymous service. When a member of the support staff takes your case (which happens in minutes, even for us Europeans), you get in touch with this person each time you interact on the case. And their CRM tools seem good enough so that your customer history is quickly available to all the support staff. I must say that I didn’t expect such a good customer service from a company with a reputation of automating everything they can, but they really take customer relationship seriously.

An FYI on how we work
Most of the support team is remote, so we use a group chat room and a support app to work together. We also use GitHub -- it's where the code is stored, where we log bugs, and where we collaborate on new ideas. We don't tend to email or call each other, though we'll videochat every once in a while to catch up. Mostly we hang out in the support chat room to communicate.

### _The Exercise_ - Support tickets
Please read the tickets here, and reply by removing replace this with your response, replacing it with your response.

Please make sure you don't change anything else. Just add your responses to the proper sections. 

_Having trouble getting an answer? That's okay! Walk us through your research technique, what you've tried, and where you're getting stuck so we can see your thought process instead._

 

__Good luck!__


#### Ticket #1: 
` Rejected pull request from fork`


> To start, I have to say I LOVE GITHUB. You guys rock. 
> I was at your 4th birthday party, thanks for the cupcake and booze!
>
> Anyway, here's my problem. I sent a pull request to technoweenie, and he rejected it because my master branch is out of sync. What can I do to fix this?
> Help me supportocat, you're my only hope!
>
> /.Steve


_Hint: You'll want to address their question, and you could add an explanation of topic branches as a better workflow._

#### Ticket #1 response:
Hi Steve,

Thank you for the Love and support, always appreciated. I hope the cupcakes were up to standard. :)

This is nothing to worry about. It can be a common occurrence in some workflows. To sync your local branch with master and update you PR you will need to, merge origin/master into your current local PR branch and push the changes. This will update the PR and put it inline with technoweenies head master branch.
To do this, make sure your local repo is up to date by using the command, `git fetch` then, `git pull origin` . Checkout to the branch you used to make the PR if not already. From here merge master into your branch `git merge --no-ff origin/master`. Finally, push the now synced branch to the remote branch you created the pull request from. You will see the PR update. Don't forget to leave a comment for technoweenie and let him know it is ready for review. :) 

You may find it useful using a slightly diffrent workflow that can prevent situations such as this if you find it is happening often. This is known as topic branches. You can learn more about the concept of topic branches at the link below: 
https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows

Please let me know how you get on or if you have any further questions.

Hope to see you at our next gathering.
 May the force be with you Steve.

Nathan

#### Ticket #2: 
`Syncing internal server and GitHub?`

> Hi GitHub! My company has an internal Git server used for deployments, we use GitHub, and I work on a local copy of the repository. For workflow purposes, how do I sync my repository to GitHub and the internal Git server?
>
> Thanks,
> vmg

_Hint: One common option is Git remotes. There are others!_

#### Ticket #2 response:
Hi, 

Thank you for your enquiry. 

there are a number of options available to you in this regards. 
Quickest and most commonly implemented option is to use Git remotes. Each local repo has its own config and linked remote branch URLs. After they have been set up you can specify the name of the remote repository you would like to push to.

you can see if any remote branches have already been set up on the repo in the command line using the command `git remote -v` this will print out a list of any setup and tracked remote repo names and associated URL's.
you can learn how to add an manage you remote entries at the page below;
https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes

You can also use a desktop client such as Github desktop to connect to clone and manage your repositories on your server. To learn more about our desktop client and how it works, please see the link below;
https://desktop.github.com/

Hope this helps. Please let me know how you get on or if you have any further questions.

Kind regards,

Nathan

#### Ticket #3: 
`Unhappy about forking`

>JamesTK here, I have another question.
>
>One of my dev collaborators forked my private repo without explicit permission to do so... is that typical? I am surprised that the system did not notify me if it was okay to grant the fork permission. Is there a way to set up permissions of this sort? Also, other than asking the collaborator to delete the forked repo, can I actually delete it?
>
>Thanks, jamestk



Notes:

You've checked the account in our admin view, he only has one personal repository (jamestk/tribbles), which has one collaborator. Any documentation you may need is available on help.github.com.

### Ticket #3 response:
Amsetri tre Captin, 

Hope you are well.

Sorry for any trouble this may have caused you.

As a collaborator, your developer has the permissions to fork and push access to your repository. As part of the collaborative workflow, forks of a private repository are deleted when a collaborator is removed, however, the person will still retain any local clones of your repository.it is the responsibility of the owner to ensure that people who have lost access to a repository delete any confidential information or intellectual property. 

You can learn more about collaborator, collaborator workflow and repository security settings available at the links below;

https://help.github.com/articles/removing-a-collaborator-from-a-personal-repository/

https://help.github.com/articles/about-collaborative-development-models/

https://help.github.com/articles/permission-levels-for-a-user-account-repository/

https://help.github.com/articles/keeping-your-account-and-data-secure/

Please do not hesitate to get in touch if you have any further questions. 

Live long and prosper,

spockocat

### Love to know more about yourself
We'd also love if you could share more about yourself so the team can get to know you better! If you could fill the following out that would be great:

###### Name?
Nathan Alan Buckley. People call me Nate.

###### Location?
Currently Brighton, UK

###### What's an impressionable experience you've had with customer service/support, and why?
Patagonia goes above and beyond for there customers and It shows. After a day of Climbing, I Ripped the side of my waterproof jacket from Armpit to waist. I contacted Patagonia to see if anything could be done or they could advise me on the best way to repair it. They Immediately came back with details to send it in as well as including a story about the jackets adventures. This is part of Patagonia's ethos promote repair over replace to reduce waste. I sent off my Jacket and a story of the adventures it had been on. A couple of weeks later I received an email saying they would be able to repair it for me but it would be with a different colour material, Was I ok with that? I agreed and was happy to be given the option, let alone ending up with a one of a kind. They continued to keep me updated on its progress until it was shipped back out, including a picture of how the repair was looking. It arrived with a thank you note, The finish was perfect and now I get to wear my jacket for years to come while also receiving a customer service experience I could never forget.

This experience stuck with me as they really didn't have to go so far out there way to repair a single jacket. This showed me that their customers, products and the environment are the most important aspects of their business and culture. This is something I feel I can relate to.

###### Tell us about a time where you helped someone.
I live next door to an 80-year-old retired widow. One morning I was woken up by a fire alarm going off at her house. I ran round to find her unable to turn it off while trying to find her dentures half awake. Grabbing my small step ladder I turned off the alarm and helped locate her teeth. Once we found them, I Checked she was settled and didn't need anything else. She was very thankful made me coffee for the trouble. I got to hear some amazing stories before work that day. 

###### What appeals to you about GitHub, as a company you'd potentially be working for?
I have been a user and lover of Github for many years and have followed Github's journey throughout this time seeing nothing but positive evolution,  a huge positive impact on the open source initiative and the community as well as a willingness for complete openness within with company and the supporting community. On top of this, It is easy to see that Github does a lot for it Githubbers and Is always there to help promote personal advancement and growth and help those looking to advance in a career at Github. This has been missing in my previous roles but Is something I find very important. 

 

###### How would you describe what GitHub does to a non-technical person?
Github is an online tool for Computer enthusiasts and professionals developers to store there Code, collaborate as a team on codding projects while being able to store and manage multiple versions of the code. Github is also used as a community to share and manage freely available code by with world.

###### What motivates you to work in support?
I have work in support for a number of years as I get as I find myself motivated from solving any problem and find I feel great job satisfaction when solving a problem with what I feel an elegant solution. As a member of a Support team, you are always learning new things and progressing your skills daily from day to day ticket and no one day is ever the same because of this. I also gain motivation to push my abilities in support every time I receive positive feedback. 

 

