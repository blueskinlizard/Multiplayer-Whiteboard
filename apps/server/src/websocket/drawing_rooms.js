const socket = require('socket.io');
const cache = require('redis');
const express = require('express');
const http = require('http')

socket.on("connect", () =>{
    console.log("User connected to whiteboard");
    socket.emit('Connection to whiteboard', {status: connected})
})

