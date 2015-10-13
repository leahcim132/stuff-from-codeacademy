print "What's your first name?"
first_name = gets.chomp

print "What is your last name?"
last_name = gets.chomp

print "What city do you live in?"
city = gets.chomp

print "What state do you live in?"
state = gets.chomp

puts "Your first name is #{first_name.capitalize!} and your last name is #{last_name.capitalize!}. You live in #{city.capitalize!} and in the state #{state.upcase!}."
