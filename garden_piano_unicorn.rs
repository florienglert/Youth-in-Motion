// Module declarations, imports,
extern crate rand;
use rand::Rng;

// Global Variables
let mut youth_in_motion: Vec<String> = vec![];
// Custom Enums
enum Direction {
    Up, 
    Down, 
    Left, 
    Right
}

// Structs
struct Participant {
    name: String,
    age: i32,
    direction: Direction
}

// Constructors
impl Participant {
    fn new(name: String, age: i32) -> Participant {
        Participant {
            name,
            age, 
            direction: Direction::Right
        }
    }
}

// Methods
impl Participant {
    fn move(&mut self, direction: Direction) {
        self.direction = direction;
    }
    fn get_direction(&self) -> Direction {
        self.direction
    }
}

// Functions
fn move_youth_in_motion(y_m: &mut Vec<Participant>) {
    let dir: Direction;
    let mut rng = rand::thread_rng();
    for i in 0..y_m.len(){
        dir =  match rng.gen_range(0, 4) { 
            0 => Direction::Up, 
            1 => Direction::Down, 
            2 => Direction::Left, 
            _ => Direction::Right 
        };
        y_m[i].move(dir);
    }
}

fn add_to_youth_in_motion(participant: Participant, youth_in_motion: &mut Vec<Participant>) {
    youth_in_motion.push(participant);
}

fn print_youth_in_motion(y_m: &Vec<Participant>) {
    for youth in y_m {
        println!("Name: {}, Age: {}, Direction: {:?}", youth.name, youth.age, youth.get_direction());
    }
}

// Main Function
fn main() {
    let mut participants: Vec<Participant> = Vec::new();
    participants.push(Participant::new(String::from("Steven"), 12));
    participants.push(Participant::new(String::from("Jenna"), 13));
    participants.push(Participant::new(String::from("Jake"), 10));
    
    add_to_youth_in_motion(Participant::new(String::from("Tom"), 11), &mut youth_in_motion);
    add_to_youth_in_motion(Participant::new(String::from("Mary"), 9), &mut youth_in_motion);
    add_to_youth_in_motion(Participant::new(String::from("Paul"), 15), &mut youth_in_motion);
    add_to_youth_in_motion(Participant::new(String::from("Alex"), 14), &mut youth_in_motion);
        
    move_youth_in_motion(&mut youth_in_motion);
    
    print_youth_in_motion(&youth_in_motion);
}