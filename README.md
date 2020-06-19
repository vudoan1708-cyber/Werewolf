1. Aim

This Web Game Will Help Open A New Door To Socialisation Given The Coronavirus Circumstance

2. Technologies:

    -> Socket.io (Real-time communication between client sides and/or server side and client side: Video Calling, Chatbox,...)

    -> Node.js (Web static hosts, database,...)
    
    -> p5.js (Front-end, UI,...)

3. Main Ideas:

    -> The Host Will Choose A Number of Participants (max 7 players, min 5 players)

    -> Players Join In

    -> Players Will Be Greeted With A Screen Full Of Cards

    -> It Depends On Which Role A Player Chooses, Their Screen Display Will Then, Be Different To Others

    -> After Choosing Characters. All Technical Features Behind The Gameplay Depends Largely On Socket.io, Through Which All The Real-time Machine Communication Happens

    -> Visual Elements Will Be Created Using p5.js

    -> Features:

        -> The Announcer: 
            -> Sees All The Cards
            -> Knows Who Is The Owner of Each Card
            -> Can "Switch" Other Player's Cameras and Microphones On And Off
            -> Can Control The Day/Night Time Switch
        
        -> Other Roles:
            -> Only See One Card of Their Own
            -> Only See Other Players Faces Through Their Webcam When At Daytime

    -> Participants Can Only See Other Players' Faces But Themselves

    -> The Webcam, When Triggered On, Will Stack On Top of The Cards

    -> Its Resolution Is The Same As A Card's

4. Non-Technical TODO List:

    ## [v] means finished, [] means unfinished ##

    [v] Make All The Cards Objects

    [] A Welcome Screen With All The Cards Displayed (With Identical Stacked Images On Top To Hide The Identities)

    [] Players Are Able To Choose One Card Each By Clicking It:

        [] The Given Time For A Player To Take Turn and Choose A Card Is 10 Seconds

        [] Choosing Order Is Decided By The Time Of Gameplay Participation (done in server side) (who joins first gets to choose first and so on...)

        [] When A Card Is Choosen, It Removes A Stacked Image, And Reveals Itself To The Picker Only

        [] After Choosing, Each Player Is Given Some Time To Read Their Own Card Information Until The Announcer Press A "Start Game" Button

    [] Camera and Microphone Access For Every Player

        [] The Announcer:

            [] As Soon As The Gameplay Starts, He/She Will Be Greeted With A Screen Full of Cards

            [] A Switch That He/She Can Toggle On And Off For Day/Night time Changes, For "Unblocking/Blocking" ALL Players Camera, Repsectively

            [] For Special Roles That Tend To Be Called During Night Time (Werewolf, Witch, Seer...), There Are Buttons That "Block" and "Unblock" Players' Camera INDIVIDUALLY

        [] Other Players:

            [] Still Only See That One Card of Theirs

            [] When At Night Time, They Can Only See Their Own Card

            [] When At Day Time, They Get To See Other People's Faces

    [] Background Transition Animation

        [] When At Night Time, The Screen Will Display A-Dark-Sky-Full-of-Stars Animation

        [] When At Day Time, The Screen Wil Display A Sunny, Cosy Morning Animation

        .......

5. Reproduce

This Project Was Initialised With A Package Manager Called Yarn:

    -> Download It

    -> Install Express And Socket.io with "yarn add express socket.io" To Run The Code

Otherwise, Delete The "package.json" and "yarn.lock" files, And Initialise It With NPM

6. Image References

https://www.pinterest.co.uk/laramegallarde/werewolf-card-game/

https://raru.co.za/boards-dice/6255604-one-night-ultimate-werewolf-card-sleeves-50-sleeves

7. Game Rules

https://www.ultraboardgames.com/one-night-ultimate-werewolf/daybreak-game-rules.php