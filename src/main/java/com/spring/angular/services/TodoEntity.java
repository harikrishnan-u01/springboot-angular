package com.spring.angular.services;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todos")
public class TodoEntity {
	
	@Id
	public String id;

	public String title;
	public Integer userId;
	public Boolean completed;

	public TodoEntity() {}

	public TodoEntity(String title, Integer userId, Boolean completed) {
		this.title = title;
		this.userId = userId;
		this.completed = completed;
	}

	@Override
	public String toString() {
		return String.format(
				"TodoEntity[id=%s, title='%s', userId='%s', completed='%s']",
				id, title, userId, completed);
	}

}
