package com.menu.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.menu.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}