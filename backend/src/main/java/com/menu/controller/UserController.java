package com.menu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.menu.model.User;
import com.menu.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "users")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/get")
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@PostMapping("/add")
	public void createUser(@RequestBody User user) {
		userService.createUser(user);
	}

	@DeleteMapping(path = { "/{id}" })
	public User deleteUser(@PathVariable("id") long id) {
		return userService.deleteUser(id);
	}

	@PostMapping("/login")
	@ResponseBody
	public Object[] authenticate(@RequestBody User user) {
		return userService.authenticate(user);
	}
}