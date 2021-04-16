// import React, { Component } from 'react'

class Question {

  constructor() {
      this.num1 = Math.ceil(Math.random() * 10);
      this.num2 = Math.ceil(Math.random() * 10);
      this.sum = this.num1 + this.num2;
  }

}

export default Question