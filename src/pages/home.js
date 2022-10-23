import "../styles/mystyles.css";
import React from "react";


const Home = () => {
  return (
  <body>
		<div class="header">
			<header>
				<div class="row" style="height: 200px;">
					<div class="col-md-5"></div>
					<div class="col-md-4">
						<h1>Sandip Yadav </h1>
						<p class="sub-heading">Developer, Footballer, Survivor</p>
					</div>
					<div class="col-md-3"></div>
				</div>
			</header>
		</div>


					<main>
						<div class="row">
							<div class="col-md-6">
								<h2>About</h2>
							</div>
							<div class="col-md-2"></div>
							<div class="col-md-4">
								<h2>Services</h2>
							</div>
						</div>
					</main>
				
		</body>
    );
};

export default Home;