Hey, this is my first entry of this blog I'm starting, which is something I've been wanting to start for awhile. My friend Lizzy has a awesome site who's a inspiration for me starting my own blog, which her website can be found at [https://lizainslie.dev/](https://lizainslie.dev/)

Documenting my work and life through a private journal has been super fun and I'm hoping this would keep me more grounded as a person. To start, I'll go into my first journal entry February 24th, specifically focusing on some of the progress for a sentry bot I've been working on for my Applied Robotics course.

## robot go spin

To start, I'll mention the main pursuit of why even pursue this. Honestly, I kind of don't really care about the war applications of a autonomous turret essentially and I'm ethically against creativity through code used to harm people but the main problem I wanted to solve at hand is how do I get the xyz position of any arbitrary object from two cameras, essentially stereo distance through two cameras. The idea actually came from me wanting to replicate a electronic darts machine I used during my time in Japan in January of 2025. You could essentially think of it as a electronic dartboard but connected to something like a unity game, it's worth checking them out at [https://www.dartslive.com/jp/](https://www.dartslive.com/jp/)

One of the ideas when I was working on this was how would I actually get the position that the ball lands on the dartboard. Came across a ton of insane solutions like having a motor behind the dartboard with a hall sensor but the cheapest and most replicatable solution I came across was just using cameras to triangulate where the dart lands on the dartboard. It's honestly a project I've been off and on working on but goal I had was to make a inspired product to what the folks at Dartslive made.

Well aside from that rant, goal of the project is to use two cameras to triangulate where a ball might land then move a funnel to wear we think the ball is going to land. Once we catch the ball, the goal I had in mind is to use a solenoid to essentially fling the ball in the general direction of the person (or trajectory it came from, might bring scope down to trajectory). I think it's a pretty neat project I could use to learn about the art of how cameras recognize distance, which I found this awesome project with some cool math on making this work at [https://github.com/AlexJinlei/Stereo_Vision_Camera](https://github.com/AlexJinlei/Stereo_Vision_Camera)

Mostly, I've just been working on modelling the base for the stepper motor as of recent. There's a little bit of code that exists to move the motor I started but the main deliverable I want to achieve is modelling a v1 prototype for the pitch head. I've mostly just worked the bottom base so my parts actually connect, a silly sneak peak of the base can be found below:
![Random wires and junk](https://i.imgur.com/NaSpNdM.png)

There's a GitHub with the project too at [https://github.com/SebaSphere/ballcatcher](https://github.com/SebaSphere/ballcatcher), which I think it's also been a interesting experience to learn Kotlin. Honestly, it kind of feels like typescript but the JVM, honestly I could see myself using Kotlin more. Coroutines are also a very fun feature, which as a Java developer I really appreciate how easy it is to fire up threads with an easy-to-read syntax.

## homelab stuff
blah blah blegh still working on this