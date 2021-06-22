package com.menu.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.menu.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
