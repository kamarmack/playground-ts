// const Greeter = require("super-greeter");

// OK
import Greeter from 'super-greeter'; // can only be default-imported using the 'esModuleInterop' flag

const greeter = new Greeter();
greeter.greet();
