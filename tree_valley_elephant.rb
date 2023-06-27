#1
# Create a class to represent Youth in Motion
class YouthInMotion
  # A list of all participants enrolled in Youth in Motion
  @@participants = []
  
  # Initialize a new Youth in Motion object
  def initialize
    @progress = 0
  end
  
  # Get the list of participants enrolled in Youth in Motion
  def self.participants
    @@participants
  end
  
  # Add a participant to the list of participants enrolled in Youth in Motion
  def self.add_participant(participant)
    @@participants << participant
  end
  
  # Receive progress for the participant from Youth in Motion for a given week
  def update_progress(progress)
    @progress += progress
  end
  
  # Calculates and returns the overall progress of the participant
  def get_progress
    @progress
  end
end

#2
# Create a class to represent an individual participant in Youth in Motion
class Participant
  # Initialize a new Participant object
  def initialize(name, age, interest)
    @name = name
    @age = age
    @interest = interest
    @youthinmotion = YouthInMotion.new
  end
  
  # Get the name of the participant
  def name
    @name
  end
  
  # Get the age of the participant
  def age
    @age
  end
  
  # Get the area of interest of the participant
  def interest
    @interest
  end
  
  # Updates the progress of the participant
  def update_progress(progress)
    @youthinmotion.update_progress(progress)
  end
  
  # Gets the overall progress of the participant in Youth in Motion
  def get_progress
    @youthinmotion.get_progress
  end
end

#3
# Create a method to register a participant for Youth in Motion
def register_for_youthinmotion(participant)
  YouthInMotion.add_participant(participant)
end

#4
# Create a method to calculate the average progress of the participants in Youth in Motion
def average_progress
  total_progress = 0
  num_participants = YouthInMotion.participants.length
  
  YouthInMotion.participants.each do |participant|
    total_progress += participant.get_progress
  end
  
  (total_progress.to_f / num_participants).round(2)
end

#5
# Create a method to print out a report of the progress of all participants
def progress_report
  puts "Youth in Motion Progress Report:"
  puts "--------------------------------"
  puts "Average Progress: #{average_progress}"
  puts
  puts "Progress by Participant:"
  puts "------------------------"
  YouthInMotion.participants.each do |participant|
    puts "#{participant.name}: #{participant.get_progress}"
  end
end

#6
# Create some test participants to demonstrate the program
austin = Participant.new("Austin", 18, "Arts & Culture")
natalie = Participant.new("Natalie", 16, "Technology")
max = Participant.new("Max", 15, "Environmental Science")

#7
# Register the test participants for Youth in Motion
register_for_youthinmotion(austin)
register_for_youthinmotion(natalie)
register_for_youthinmotion(max)

#8
# Update the progress for each test participant
austin.update_progress(10)
natalie.update_progress(20)
max.update_progress(30)

#9
# Print out a report of the progress of all participants
progress_report

#10
# Expected Output
# Youth in Motion Progress Report:
# --------------------------------
# Average Progress: 20.0
# 
# Progress by Participant:
# ------------------------
# Austin: 10
# Natalie: 20
# Max: 30