study = new Meteor.Collection('study');
space = new Meteor.Collection('space');
// 필요한 액션이 실시(게시판 글작성) 될 때 해당 액션을 insert하고
// 필요할때 꺼내 쓴다.
Logs = new Meteor.Collection('logs');
Likes = new Meteor.Collection("likes");

Chatting = new Meteor.Collection('chatting');