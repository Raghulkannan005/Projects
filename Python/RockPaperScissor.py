def rps():
    print("=====ROCK--PAPER--SCISSOR=====")
    userChoice=int(input("Enter Your Choice : \n Rock -- (1)\n Paper -- (2)\n Scissor -- (3)\nYour Choice:"))
    options = ["rock", "paper", "scissor"]
    import random
    bot= random.choice(options)
    if userChoice == 1:
        value="rock"
        print("You chose : Rock and The Bot Chose :",bot)
    elif userChoice == 2:
        value="paper"
        print("You chose : Paper and The Bot Chose :",bot)
    elif userChoice == 3:
        value="scissor"
        print("You chose : Scissors and The Bot Chose :",bot)
    else:
        print("Please enter a Valid Choice!")
        rps()
    if (bot==value):
        print("Game Draw!")
    elif (bot="rock") and (value="paper" or value="scissor"):
        print("You Lose! Better luck next time")
    elif (bot="paper") and (value="rock" or value="scissor"):
        print("You Won!")
    elif (bot="scissor") and (value="paper" or value"rock"):
        if (value = "rock"):
            print("You Won!")
        else:
            print("You Lose! Better luck next time")
    retry=int(input("1 -- Restart!\n2--Exit..\nEnter Your Choice:"))
    if (retry=1):
        print("Restarting Game!")
        rps()
    elif (retry=2):
        print("Exiting...")
        quit()
rps()