import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hello"
export default class extends Controller {
  connect() {
    // console.log('hello from stimulus')
  }

  sayHello() {
    console.log('hello from stimulus 🎉')
  }
}
