local youthInMotion = {};

youthInMotion.title = 'Youth in Motion';

youthInMotion.characterData = {
	
	['Tom'] = {
		name = 'Tom', 
		age = 15,
		likes = {'sports', 'music', 'friends'},
		hobbies = {'hockey', 'guitar', 'dancing'},
	},
	
	['Sally'] = {
		name = 'Sally',
		age = 16,
		likes = {'reading', 'partying', 'computers'},
		hobbies = {'swimming', 'programming', 'video games'},
	},
	
	['George'] = {
		name = 'George',
		age = 17,
		likes = {'animals', 'drawing', 'sports'},
		hobbies = {'running', 'climbing', 'painting'},
	},
	
	['John'] = {
		name = 'John',
		age = 18,
		likes = {'biking', 'studying', 'writing'},
		hobbies = {'basketball', 'poetry', 'science'},
	},
	
	['Alice'] = {
		name = 'Alice',
		age = 19,
		likes = {'teaching', 'cooking', 'movies'},
		hobbies = {'camping', 'baking', 'gardening'},
	},
	
	['Kevin'] = {
		name = 'Kevin',
		age = 20,
		likes = {'birds', 'dancing', 'hiking'},
		hobbies = {'surfing', 'skateboarding', 'photography'},
	},
};

-- function to print youthInMotion character data
youthInMotion.PrintData = function()
	for i, v in pairs(youthInMotion.characterData) do
		print(v.name..' is '..v.age..' and likes '..table.concat(v.likes, ', ')..' and enjoys '..table.concat(v.hobbies, ', '))
	end
end

-- function to add new character to youthInMotion
youthInMotion.AddCharacter = function(name, age, likes, hobbies)
	youthInMotion.characterData[name] = {
		name = name,
		age = age,
		likes = likes,
		hobbies = hobbies
	}
end

-- function to remove character from youthInMotion
youthInMotion.RemoveCharacter = function(name)
	if youthInMotion.characterData[name] then
		youthInMotion.characterData[name] = nil
	else
		print('Error: '..name..' does not exist!')
	end
end

-- function to edit character in youthInMotion
youthInMotion.EditCharacter = function(name, age, likes, hobbies)
	if youthInMotion.characterData[name] then
		youthInMotion.characterData[name].age = age
		youthInMotion.characterData[name].likes = likes
		youthInMotion.characterData[name].hobbies = hobbies
	else
		print('Error: '..name..' does not exist!')
	end
end

-- function to find character from youthInMotion
youthInMotion.FindCharacter = function(name)
	if youthInMotion.characterData[name] then
		print(youthInMotion.characterData[name].name..' is '..youthInMotion.characterData[name].age..' and likes '..table.concat(youthInMotion.characterData[name].likes, ', ')..' and enjoys '..table.concat(youthInMotion.characterData[name].hobbies, ', '))
	else
		print('Error: '..name..' does not exist!')
	end
end

-- function to show message
youthInMotion.ShowMessage = function(message)
	print('Youth in Motion says: '..message)
end

-- function to show story
youthInMotion.ShowStory = function(story)
	print('Youth in Motion story: '..story)
end

return youthInMotion