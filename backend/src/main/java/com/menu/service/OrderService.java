package com.menu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.menu.db.OrderRepository;
import com.menu.model.Order;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public void createOrder(Order order) {
		orderRepository.save(order);
	}

}
