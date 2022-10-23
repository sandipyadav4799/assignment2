import React from "react";
import "../styles/mystyles.css";

const About = () => {
  return (
    <body>
        <header class="bg-primary text-white ">
            <div class="container">
                <div class="row">

                    <div class="col-md-9">
                        <h1>Yadav Sandip</h1>
                        <h5>Application Developer</h5>
                        <p class="border-top pt-3">My Name Is Sandip Gunvantray Yadav. I Am From Anand Which Is Situated
                            In India. Currently I Live in Barrie, Ontario. By Profession I Am Mobile Application
                            Developer</p>
                    </div>
                </div>
            </div>
        </header>
        <div class="mb-5">
        </div>
        <main class="container">
            <div class="row">
                <div class="col-md mb-5">

                    <h2 class="mb-5">Work Experience</h2>
                    <ul>
                        <li>
                            <h6 class="text-primary">Internship-1, From:- 2017-2018</h6>
                            <p>I Did Internship When I Was In 5th Semester Of My Bachelors Of Engineering From
                                Geetanjali Co. Limited.</p>
                        </li>
                        <li>
                            <h6 class="text-primary">Internship-2, From:- 2019-2020</h6>
                            <p>I Did My Second Internship From JKB SOFTWARE SOLUTION When I Was In The Final Year The
                                Bachelors.</p>
                        </li>
                    </ul>
                </div>

                <div class="col-md mb-5">
                    <h2 class="mb-5">Education BackGround</h2>
                    <ul>
                        <li>
                            <h6 class="text-primary">Computer Engineering From:- 2016-2020</h6>
                            <p>I Completed My Bachelors In Engineering From Gujarat Technology University In Aug-2020.
                                In Which I Got Overall 7.78 CGPA</p>
                        </li>
                        <li>
                            <h6 class="text-primary">BAPS Vidhya Mandir From:- 2014-2016</h6>
                            <p>I Have Done My High School In Science Stream With In Major Maths In May-2016.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md mb-5">
                    <h2 class="mb-5">My Skills</h2>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 90%">HTML</div>
                    </div>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 87%">CSS</div>
                    </div>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 76%">JavaScript</div>
                    </div>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 80%">Photoshop</div>
                    </div>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 68%">PHP</div>
                    </div>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 78%">JAVA</div>
                    </div>
                    <div class="progress mb-4" style="height:25px;">
                        <div class="progress-bar bg-primary" style="width: 75%">SWIFT</div>
                    </div>
                </div>
                <div class="col-md"></div>
            </div>
        </main>
    </body>
    );
};

export default About;