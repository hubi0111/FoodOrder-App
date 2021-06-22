package com.menu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.menu.model.Order;
import com.menu.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "order")
public class OrderController {

	@Autowired
	private OrderService orderService;

	@PostMapping("/add")
	public void createOrder(@RequestBody Order order) {
		orderService.createOrder(order);
	}

}