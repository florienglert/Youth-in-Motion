package main

import "fmt"

// YouthInMotion is a program to help young people develop positive goals and aspirations
func YouthInMotion() {
	// Prompt the user to identify their goals
	fmt.Println("What goals do you have for yourself?")
	
	// Accept input from the user
	var goals string
	fmt.Scan(&goals)

	// Encourage the user to pursue their goals
	fmt.Printf("You can achieve your goals if you work hard and stay focused, %s!\n", goals)

	// Ask the user for their current age
	fmt.Println("What is your current age?")

	// Accept input from the user
	var age int
	fmt.Scan(&age)

	// Determine the user's age category
	var ageCategory string
	if age <= 0 {
		ageCategory = "infant"
	} else if age > 0 && age <= 12 {
		ageCategory = "child"
	} else if age > 12 && age <= 18 {
		ageCategory = "teenager"
	} else {
		ageCategory = "adult"
	}

	// Give the user advice based on their age
	switch ageCategory {
	case "infant":
		fmt.Println("You are too young to have major goals yet, but keep learning and exploring the world around you!")
	case "child":
		fmt.Println("Focus on having fun and learning new skills. Write down your goals and work hard to achieve them.")
	case "teenager":
		fmt.Println("Take your time to figure out what you want in life. Seek out guidance and advice from those around you.")
	case "adult":
		fmt.Println("Be focused and driven in pursuit of your goals. Set achievable goals and take one step at a time.")
	}

	// Ask the user if they need help achieving their goals
	fmt.Println("Do you need help in achieving your goals?")

	// Accept input from the user
	var help string
	fmt.Scan(&help)

	// Offer help if needed
	if help == "yes" {
		fmt.Println("We can help! Contact us at YouthInMotion@example.com and we'll be glad to help you.")
	} else if help == "no" {
		fmt.Println("We wish you the best of luck in achieving your goals!")
	}
 
	// Ask the user if they would like to listen to inspirational music
	fmt.Println("Would you like to hear some inspirational music to get motivated?")

	// Accept input from the user
	var music string
	fmt.Scan(&music)

	// Play inspirational music if the user wants to
	if music == "yes" {
		fmt.Println("Playing inspirational music...")
		// Play inspirational music here
	} else if music == "no" {
		fmt.Println("Ok, no problem. Have a nice day!")
	}
}

func main() {
	YouthInMotion()
}