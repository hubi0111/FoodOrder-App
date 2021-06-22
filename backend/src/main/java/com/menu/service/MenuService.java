package com.menu.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.menu.db.MenuRepository;
import com.menu.model.Menu;

@Service
public class MenuService {

	private byte[] bytes;

	@Autowired
	private MenuRepository menuRepository;

	public List<Menu> getFoods() {
		return menuRepository.findAll();
	}

	public void uploadImage(MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	public void createFood(Menu menu) throws IOException {
		menu.setPicByte(this.bytes);
		menuRepository.save(menu);
		this.bytes = null;
	}

	public void updateFood(Menu food) {
		menuRepository.save(food);
	}

	public Menu deleteFood(long id) {
		Menu food = menuRepository.findById(id).get();
		menuRepository.deleteById(id);
		return food;
	}
}
