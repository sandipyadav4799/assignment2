import React from "react";
import { Alert } from "react-bootstrap";

const Contacts = ({ props }) => {
  const [Name, onNameChange] = React.useState("");
  const [Email, onEmailChange] = React.useState("");
  function submission() {
    Alert("Your request is submitted");
  }
  return (
<body>
        <div>
            <div class="containeer">
                <form>

                    <div class="text-center">
                        <h3>Contact form</h3>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <input
                type="text"
                value={Name}
                onChange={onNameChange}
                placeholder="Your Name.."
              ></input>
                            <label for="email">Email</label>
                            <input
                type="text"
                value={Email}
                onChange={onEmailChange}
                placeholder="Your Email.."
              ></input>
                            <label for="subject">Your Message</label>
                            <div class="form-group">
                                <textarea class="rounded-5" id="subject" rows="3"
                                    placeholder="Type Message Here..."></textarea>
                            </div>
                            <input
                type="Submit"
                onClick={() => {
                  submission();
                }}                       
                 />
                    </div>
                    </div>
                </form>

            </div>
        </div>
        
    </body>
    );
};

export default Contacts;