package com.menu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.menu.db.UserRepository;
import com.menu.model.User;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	public void createUser(User user) {
		userRepository.save(user);
	}
	public User deleteUser(long id) {
		User user = userRepository.findById(id).get();
		userRepository.deleteById(id);
		return user;
	}
	public Object[] authenticate(User user) {
		Object[] ret = new Object[2];
		List<User> users = userRepository.findAll();
		for (User u : users) {
			if (u.getName().equals(user.getName()) && u.getPassword().equals(user.getPassword())) {
				ret[0] = 200;
				ret[1] = u;
				return ret;
			}
		}
		ret[0] = 401;
		return ret;
	}
}
