package com.spring.angular.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.angular.services.TodoEntity;
import com.spring.angular.services.repositories.TodoRepository;


@RestController() 
public class TodoController {
	
	
	@Autowired
	private TodoRepository repository; 
	
	@GetMapping(value= "/api/todos")
	public List<TodoEntity> getTodos() {
		return repository.findAll();
	}
	
	@PostMapping(value= "/api/todos")
	public TodoEntity saveTodo(@RequestBody TodoEntity todo) {
		return repository.save(todo);
	}
	
	@DeleteMapping(value = "/api/todos")
	public String deleteAllTodos() {
		repository.deleteAll();
		return "Successfully Deleted All Todos";
	}
	
	
	@PostMapping(value = "/api/setup")
	public String setupTodoTestData() {
		repository.deleteAll();
		
		for(int i=0; i<200; i++) {
			repository.save(new TodoEntity("ABC Todo "+i, i, false));
			repository.save(new TodoEntity("XYZ Todo "+i, i, false));
		}
		
		return "Successfully Setup Test Records";
	}
	
}
