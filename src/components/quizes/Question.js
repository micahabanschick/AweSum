// import React, { Component } from 'react'

class Question {

  constructor() {
      this.correctNum1 = Math.ceil(Math.random() * 10);
      this.correctNum2 = Math.ceil(Math.random() * 10);
      this.correctSum = this.correctNum1 + this.correctNum2;

      this.wrongSum1 = Math.ceil(Math.random() * 20);
      this.wrongSum2 = Math.ceil(Math.random() * 20);
      this.wrongSum3 = Math.ceil(Math.random() * 20);
  }

}

export default Question