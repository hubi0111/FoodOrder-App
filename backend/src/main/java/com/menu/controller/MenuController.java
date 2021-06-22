package com.menu.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.menu.model.Menu;
import com.menu.service.MenuService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "menu")
public class MenuController {

	private byte[] bytes;
	
	@Autowired
	private MenuService menuService;
	
	@GetMapping("/get")
	public List<Menu> getFoods() {
		return menuService.getFoods();
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		menuService.uploadImage(file);
	}

	@PostMapping("/add")
	public void createFood(@RequestBody Menu menu) throws IOException {
		menuService.createFood(menu);
	}
	
	@PutMapping("/update")
	public void updateFood(@RequestBody Menu food) {
		menuService.updateFood(food);
	}

	@DeleteMapping(path = { "/{id}" })
	public Menu deleteFood(@PathVariable("id") long id) {
		return menuService.deleteFood(id);
	}
	
}