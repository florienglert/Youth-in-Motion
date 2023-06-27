fun main() {
    // Program to recognize and encourage youth in motion

    // Create an array to store data for young people aged 14-21
    val youngPeople = arrayOf("John", "Jane", "Joe", "Jill", "Ryan", "Rachael", "Rachel", "Bobby")

    // Loop through each item in the array
    for (person in youngPeople) { 
        println("Congratulations $person on striving for success!")
    }

    // Create a for loop to identify goals for each person
    for (person in youngPeople) { 
        when (person) { 
            "John" -> println("Set a goal to save $1000")
            "Jane" -> println("Create a budget for yourself")
            "Joe" -> println("Attend college information sessions")
            "Jill" -> println("Research scholarships")
            "Ryan" -> println("Visit college websites")
            "Rachael" -> println("Write a college essay")
            "Rachel" -> println("Go to college fairs")
            "Bobby" -> println("Sign up for summer internships")
        }
    }

    // Ask each person to set a time frame to achieve their goal
    for (person in youngPeople) { 
        println("$person, set a timeline to achieve your goal this summer")
    }

    // Track progress
    println("We will now track everyone's progress!")
    var progress = 0
    for (person in youngPeople) { 
        println("$person, what is your current progress towards your goal? (0-100)")
        progress += readLine()!!.toInt()
    }
    println("The total progress made by the group is $progress")

    // Encourage and congratulate
    println("We have made amazing progress and are almost there! Let's keep pushing for success!")
    
    // Provide resources
    println("Here are some helpful resources:")
    println("• College Board: https://www.collegeboard.org/") 
    println("• Scholarship Opportunites: https://www.fastweb.com/") 
    println("• Summer Internship Opportunities: https://www.usajobs.gov/") 
    println("• Money Saving Tips: https://www.thebalance.com/")

    // Success Messages
    for (person in youngPeople) { 
        println("$person, you will achieve success if you keep working hard!")
    }
    println("Let's celebrate our accomplishments thus far and keep striving for our goals!")
}