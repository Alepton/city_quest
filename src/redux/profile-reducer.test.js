import React from "react";
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";


let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "It's my first post", likesCount: 20 },
    { id: 4, message: "It's my first post", likesCount: 20 },
    { id: 5, message: "It's my first post", likesCount: 20 },
    { id: 6, message: "It's my first post", likesCount: 20 },
  ]
};

it ('length of post shold be incremented', () => {

  //1. test data закладываем данные для тестирования

  let action = addPostActionCreator("it-cam");

  //2. action предполагаемое действие

  let newState = profileReducer(state, action);

  //3. expectation ожидания что мы ожидаем получить (у нового стейта длина будеет равна 5)
  expect (newState.posts.length).toBe(7);

})

it ('message of new post shold be correct', () => {

  //1. test data закладываем данные для тестирования

  let action = addPostActionCreator("it-cam");

  //2. action предполагаемое действие

  let newState = profileReducer(state, action);

  //3. expectation ожидания что мы ожидаем получить (у нового стейта длина будеет равна 5)

  expect (newState.posts[6].message).toBe("it-cam");
})

it ('after deleting length of message should be decrement', () => {

  //1. test data закладываем данные для тестирования

  let action = deletePost(1);

  //2. action предполагаемое действие

  let newState = profileReducer(state, action);

  //3. expectation ожидания что мы ожидаем получить (у нового стейта длина будеет равна 5)

  expect (newState.posts.length).toBe(5);
})

it ('after deleting length shoudnt be decrement if id incorrect', () => {

  //1. test data закладываем данные для тестирования

  let action = deletePost(1000);

  //2. action предполагаемое действие

  let newState = profileReducer(state, action);

  //3. expectation ожидания что мы ожидаем получить (у нового стейта длина будеет равна 5)

  expect (newState.posts.length).toBe(6);
})
