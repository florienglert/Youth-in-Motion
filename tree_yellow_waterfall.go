package main

func main() {

	//Youth in Motion

 //1
 fmt.Println("Youth in Motion - We Empower Young People!")
 
 //2
 type Organization struct {
 	Name string
 	Mission string
 }

//3
var youthMotionOrganization = Organization{
	Name: "Youth in Motion",
	Mission: "To inspire and empower the next generation of young people through providing educational and leadership opportunities.",
}

//4
func (o *Organization) PrintMission() {
	fmt.Println(o.Mission)
} 

//5
func (o *Organization) ChangeMission(m string) {
	o.Mission = m
}

//6
type Program struct {
	Name string
	Description string
	Organization *Organization
}

//7
func NewProgram(n string, d string, o *Organization) Program {
	return Program{
		Name: n,
		Description: d,
		Organization: o,
	}
}

//8
func (p *Program) PrintInfo() {
fmt.Printf("Program Name: %s \nProgram Description: %s \nOrganization: %s \n", p.Name, p.Description, p.Organization.Name)
}

//9
type EducationProgram struct {
	Program
	Type string
}

//10
func NewEducationProgram(n string, d string, o *Organization, t string) EducationProgram {
	return EducationProgram{
		Program{
			Name: n,
			Description: d,
			Organization: o,
		},
		Type: t,
	}
} 

//11
func (e *EducationProgram) PrintInfo() {
	fmt.Printf("Program Name: %s \nProgram Description: %s \nOrganization: %s \nType: %s \n", e.Name, e.Description, e.Organization.Name, e.Type)
}

//12
type LeadershipProgram struct {
	Program
	Positions []string
}

//13
func NewLeadershipProgram(n string, d string, o *Organization, p []string) LeadershipProgram {
	return LeadershipProgram{
		Program{
			Name: n,
			Description: d,
			Organization: o,
		},
		Positions: p,
	}
} 

//14
func (l *LeadershipProgram) PrintInfo() {
	fmt.Printf("Program Name: %s \nProgram Description: %s \nOrganization: %s \nPositions: %v\n", l.Name, l.Description, l.Organization.Name, l.Positions)
}

//15
type YouthGroup struct {
	Program
	MaxMembers int
}

//16
func NewYouthGroup(n string, d string, o *Organization, m int) YouthGroup {
	return YouthGroup{
		Program{
			Name: n,
			Description: d, 
			Organization: o, 
		},
		MaxMembers: m,
	}
}

//17
func (y *YouthGroup) PrintInfo() {
	fmt.Printf("Program Name: %s \nProgram Description: %s \nOrganization: %s \nMax Members: %d\n", y.Name, y.Description, y.Organization.Name, y.MaxMembers)
}

//18
type VolunteerProgram struct {
	Program
	TimeCommitment string
}

//19
func NewVolunteerProgram(n string, d string, o *Organization, t string) VolunteerProgram {
	return VolunteerProgram{
		Program{
			Name: n,
			Description: d,
			Organization: o,
		},
		TimeCommitment: t,
	}
} 

//20
func (v *VolunteerProgram) PrintInfo() {
	fmt.Printf("Program Name: %s \nProgram Description: %s \nOrganization: %s \nTime Commitment: %s\n", v.Name, v.Description, v.Organization.Name, v.TimeCommitment)
}

//21
func createPrograms() {
	// Create Programs
	youthDevelopmentProgram := NewEducationProgram("Youth Development Program", "A program that provides educational and leadership development opportunities to youth ages 15-30.", &youthMotionOrganization, "Educational")
	mentorshipProgram := NewLeadershipProgram("Mentorship Program", "A program that pairs youth with experienced professionals for mentorship and career guidance.", &youthMotionOrganization, []string{"Mentor", "Mentee"})
	networkingGroup := NewYouthGroup("Networking Group", "A group for youth to come together to create networks and share experiences.", &youthMotionOrganization, 50)
	serviceProject := NewVolunteerProgram("Service Project", "An organized volunteer project that engages youth in service activities in their community.", &youthMotionOrganization, "2 hours/week")

	// Print Info
	youthDevelopmentProgram.PrintInfo()
	mentorshipProgram.PrintInfo()
	networkingGroup.PrintInfo()
	serviceProject.PrintInfo()
}

//22
func main() {
	// Print Mission
	youthMotionOrganization.PrintMission()
	// Change Mission
	youthMotionOrganization.ChangeMission("To empower youth to find their voice, find their purpose, and create meaningful change in their communities through educational and leadership opportunities.")
	// Print Mission Again
	youthMotionOrganization.PrintMission()
	// Create Programs
	createPrograms()
}

}