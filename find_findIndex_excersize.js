function findUserByUsername(users, userToFind) {
	return users.find(function (user) {
		return user.userToFind === userToFind;
	});
}

function removeUser(users, userToRemove) {
	const userIndex = users.find(function (user) {
		return user.userToRemove === userToRemove;
	});
	if (userIndex === -1) return;
	// splice syntax splice(start, deleteCount)
	return usersArray.splice(foundIndex, 1)[0];
}
