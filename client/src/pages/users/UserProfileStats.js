import React from "react";

import '../../App.css';

const UserProfileStats = ({
  totalExp,
  totalInc,
}) => {
  return (
	  <>
    <div class="det">
	<div className="det-1">
		<div class="container-1">
			<div class="card-1">
				<div class="content-1">
					<div class="imgBx-1">

					</div>
					<div class="contentBx">
						<h3>current balance</h3>
					</div>
				</div>
				<ul class="sci">
					<li>
					 Rs.{ totalInc-totalExp}
					</li>
					
				</ul>
			</div>
			<div class="card-1">
				<div class="content-1">
					<div class="imgBx-1">
						</div>
					<div class="contentBx">
						<h3>  TOTAL INCOME</h3>
					</div>
				</div>
				<ul class="sci">
					<li>
					Rs.{totalInc}
					</li>
					
				</ul>
			</div>
			<div class="card-1">
				<div class="content-1">
					<div class="imgBx-1">
						
					</div>
					<div class="contentBx">
						<h3> TOTAL EXPENSES</h3>
					</div>
				</div>
				<ul class="sci">
					<li>
					Rs.{totalExp}
					</li>
				
				</ul>
			</div>
		</div>
	</div>
</div>
    </>
  );
};

export default UserProfileStats;