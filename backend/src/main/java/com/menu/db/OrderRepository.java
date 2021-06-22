package com.menu.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.menu.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}