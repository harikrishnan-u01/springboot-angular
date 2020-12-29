package com.spring.angular.services.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.spring.angular.services.TodoEntity;

public interface TodoRepository extends MongoRepository<TodoEntity, String> {	
	
	public TodoEntity findByTitle(String title);
	
	public List<TodoEntity> findByUserId(Integer userId);

}